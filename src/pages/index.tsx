import React from 'react'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import { api } from '../services/api'

import Header from '../components/Header'
import Footer from '../components/Footer'

import { Main, ListRepos } from '../styles/pages/Home'
import { promises } from 'fs'

interface License {
  name: string
  url: string
}

interface Owner {
  login: string
  avatar_url: string
  html_url: string
  name?: string
  bio?: string
}

interface ReposProps {
  id: string
  full_name: string
  description: string
  license: License
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
        <title>Homepage</title>
      </Head>

      <Header owner={owner?.name} description={owner?.bio} />

      <Main>
        {repos.map(repo => (
          <ListRepos key={repo.id}>
            <Link href="#">
              <a>
                <img src={repo.owner.avatar_url} alt={repo.owner.login} />
              </a>
            </Link>

            <Link href="#">
              <a className="content-link">
                <strong>{repo.full_name}</strong>

                <p>{repo.description}</p>
              </a>
            </Link>
          </ListRepos>
        ))}
      </Main>

      <Footer owner={owner?.name} url={owner.html_url} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const [repos, owner] = await Promise.all([
    api.get<ReposProps[]>('users/ediano/repos'),
    api.get<Owner>('users/ediano')
  ])

  return {
    props: { repos: repos.data, owner: owner.data }
  }
}

export default Home
