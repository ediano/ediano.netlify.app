import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    username: process.env.GITHUB_LOGIN,
    password: process.env.GITHUB_TOKEN
  }
})
