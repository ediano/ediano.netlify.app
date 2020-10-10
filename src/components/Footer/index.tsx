import React, { useState, useEffect } from 'react'
import { api } from '../../services/api'

import { Container } from './styles'

interface Owner {
  html_url: string
  name: string
}

const Footer: React.FC = () => {
  const [owner, setOwner] = useState<Owner>()

  useEffect(() => {
    api.get<Owner>('users/ediano').then(response => {
      setOwner(response.data)
    })
  }, [])

  const data = new Date()

  return (
    <Container>
      <strong>
        <a href={owner?.html_url} target="_black">
          {owner?.name}
        </a>
      </strong>
      <span>Todos os direitos reservados</span>
      <span>{data.getFullYear()}</span>
    </Container>
  )
}

export default Footer
