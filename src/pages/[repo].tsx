import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { api } from '../services/api'

import Header from '../components/Header'
import Footer from '../components/Footer'

import { Container } from '../styles/pages/Repo'

interface RepoProps {
  name: string
  html_url: string
  description: string
  clone_url: string
  homepage: string
  language: string
  open_issues: number
  stargazers_count: number
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
    <>
      <Head>
        <title>{repo.name}</title>
      </Head>

      <Header title={repo.name} description={repo.description} />

      <Container>
        <div>
          <span>
            Forks
            <strong>{repo.forks_count}</strong>
          </span>

          <span>
            Issues
            <strong>{repo.open_issues}</strong>
          </span>

          <span>
            Star
            <strong>{repo.stargazers_count}</strong>
          </span>
        </div>

        <div>
          <span>
            License
            <strong>{repo.license ? repo.license.name : 'Not'}</strong>
            {repo.license && (
              <a href={repo.license.url} target="_black">
                Acessar
              </a>
            )}
          </span>

          <span>
            Language
            <strong>{repo.language}</strong>
          </span>
        </div>

        <div>
          <span>
            GitHub
            <strong>
              <a href={repo.html_url} target="_black">
                Acessar
              </a>
            </strong>
          </span>

          <span>
            Site
            <strong>
              <a href={repo.homepage} target="_black">
                Acessar
              </a>
            </strong>
          </span>
        </div>
      </Container>

      <Footer />
    </>
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
