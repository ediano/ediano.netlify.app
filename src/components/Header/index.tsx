import React from 'react'

import ImgDevActivity from '../../assets/dev_activity.svg'

import { Container, Wrapper } from './styles'

console.log(process.env.GITHUB_LOGIN)

const Header: React.FC = () => (
  <Container>
    <div>
      <Wrapper>
        <h1>Ediano Silva Santos</h1>

        <p>Cillum excepteur anim magna do. Cillum excepteur anim magna do.</p>
      </Wrapper>

      <ImgDevActivity />
    </div>
  </Container>
)

export default Header
