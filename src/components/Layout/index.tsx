import React, { useState, useEffect } from 'react'
import { api } from '../../services/api'

import Header from '../Header'
import Footer from '../Footer'

export interface Owner {
  avatar_url: string
  html_url: string
  name?: string
  bio?: string
}

const Layout: React.FC = ({ children }) => {
  const [owner, setOwner] = useState<Owner>()

  useEffect(() => {
    api.get<Owner>('users/ediano').then(response => {
      setOwner(response.data)
    })
  }, [])

  return (
    <>
      <Header owner={owner?.name} description={owner?.bio} />
      {children}
      <Footer owner={owner?.name} url={owner?.html_url} />
    </>
  )
}

export default Layout
