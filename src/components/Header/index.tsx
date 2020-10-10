import React from 'react'

import ImgDevActivity from '../../assets/dev_activity.svg'

import { Container, Wrapper } from './styles'

interface Props {
  owner: string
  description: string
}

const Header: React.FC<Props> = ({ owner, description }) => (
  <Container>
    <div>
      <Wrapper>
        <h1>{owner}</h1>

        <p>{description}</p>
      </Wrapper>

      <ImgDevActivity />
    </div>
  </Container>
)

export default Header
