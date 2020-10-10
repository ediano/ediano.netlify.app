import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { api } from '../services/api'

import Layout from '../components/Layout'

import { Container } from '../styles/pages/Repo'

interface RepoProps {
  name: string
  html_url: string
  description: string
  clone_url: string
  homepage: string
  language: string
  forks: number
  open_issues: number
  watchers: number
  forks_count: number
  license: {
    name: string
    url: string
  }
}

interface Props {
  repo: RepoProps
}

const Repo: React.FC<Props> = ({ repo }) => {
  return (
    <Layout>
      <Container>{repo.name}</Container>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.get<RepoProps[]>('/users/ediano/repos')

  const paths = data.map(repo => {
    return { params: { repo: repo.name } }
  })

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async context => {
  const { repo } = context.params

  const response = await api.get(`/repos/ediano/${repo}`)

  return {
    props: { repo: response.data }
  }
}

export default Repo
