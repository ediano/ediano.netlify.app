import React from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { api } from '../services/api'

import { Container } from '../styles/pages/Home'

interface RepoProps {
  id: string
  name: string
}

interface HomeProps {
  repos: RepoProps[]
}

const Home: React.FC<HomeProps> = ({ repos }) => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      {repos.map(repo => (
        <span key={repo.id}>{repo.name}</span>
      ))}
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get('users/ediano/repos')

  return {
    props: { repos: response.data }
  }
}

export default Home
