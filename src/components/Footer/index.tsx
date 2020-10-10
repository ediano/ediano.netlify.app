import React from 'react'

import { Container } from './styles'

interface Props {
  owner: string
  url: string
}

const Footer: React.FC<Props> = ({ owner, url }) => {
  const data = new Date()

  return (
    <Container>
      <strong>
        <a href={url} target="_black">
          {owner}
        </a>
      </strong>
      <span>Todos os direitos reservados</span>
      <span>{data.getFullYear()}</span>
    </Container>
  )
}

export default Footer
