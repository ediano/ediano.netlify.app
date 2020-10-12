import React from 'react'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import { api } from '../services/api'

import Header from '../components/Header'
import Footer from '../components/Footer'

import { Main, ListRepos } from '../styles/pages/Home'

interface Owner {
  avatar_url: string
  html_url: string
  name: string
  bio?: string
}

interface ReposProps {
  id: string
  name: string
  description: string
  owner: Owner
}

interface Props {
  repos: ReposProps[]
  owner: Owner
}

const Home: React.FC<Props> = ({ repos, owner }) => {
  return (
    <>
      <Head>
        <title>{owner.name}</title>
      </Head>

      <Header title={owner.name} description={owner.bio} />

      <Main>
        {repos.map(repo => (
          <ListRepos key={repo.id}>
            <a href={repo.owner.html_url}>
              <img src={repo.owner.avatar_url} alt={repo.owner.name} />
            </a>

            <Link href={repo.name}>
              <a className="content-link">
                <strong>{repo.name}</strong>

                <p>{repo.description}</p>
              </a>
            </Link>
          </ListRepos>
        ))}
      </Main>

      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const [repos, owner] = await Promise.all([
    api.get<ReposProps[]>('users/ediano/repos'),
    api.get<Owner>('users/ediano')
  ])

  return {
    props: { repos: repos.data, owner: owner.data },
    revalidate: 60
  }
}

export default Home
