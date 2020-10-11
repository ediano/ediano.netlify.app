import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `Basic ${process.env.GITHUB_LOGIN}:${process.env.GITHUB_TOKEN}`
  }
})
