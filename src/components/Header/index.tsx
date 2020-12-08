import React from 'react'
import Link from 'next/link'
import { FiArrowLeft } from 'react-icons/fi'

import ImgDevActivity from '../../assets/dev_activity.svg'

import { Container, Wrapper } from './styles'

interface Props {
  title: string
  description: string
  isGoBack?: boolean
}

const Header: React.FC<Props> = ({ title, description, isGoBack }) => {
  return (
    <Container>
      <div>
        <Wrapper>
          <h1>{title}</h1>

          <p>{description}</p>
        </Wrapper>

        {isGoBack && (
          <Link href="/">
            <a>
              <FiArrowLeft size={32} />
            </a>
          </Link>
        )}

        <ImgDevActivity />
      </div>
    </Container>
  )
}

export default Header
