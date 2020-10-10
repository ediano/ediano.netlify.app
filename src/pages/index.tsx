import React from 'react'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import { api } from '../services/api'

import Layout, { Owner } from '../components/Layout'

import { Main, ListRepos } from '../styles/pages/Home'

interface License {
  name: string
  url: string
}

interface ReposProps {
  id: string
  name: string
  description: string
  license: License
  owner: Owner
}

interface Props {
  repos: ReposProps[]
}

const Home: React.FC<Props> = ({ repos }) => {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>

      <Layout>
        <Main>
          {repos.map(repo => (
            <ListRepos key={repo.id}>
              <Link href={repo.owner.html_url}>
                <a>
                  <img src={repo.owner.avatar_url} alt={repo.owner.name} />
                </a>
              </Link>

              <Link href={repo.name}>
                <a className="content-link">
                  <strong>{repo.name}</strong>

                  <p>{repo.description}</p>
                </a>
              </Link>
            </ListRepos>
          ))}
        </Main>
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const repos = await api.get<ReposProps[]>('users/ediano/repos')

  return {
    props: { repos: repos.data }
  }
}

export default Home
