import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: 45vh;

  background: ${props => props.theme.colors.primary};
  box-shadow: 0 0 12px 4px ${props => props.theme.colors.secondaryLight};

  overflow: hidden;

  > div {
    position: relative;
    display: flex;
    align-items: center;

    width: 100%;
    max-width: 800px;
    height: 100%;
    margin: 0 auto;

    svg {
      position: absolute;
      width: auto;
      height: 100%;
      right: 0;

      @media (max-width: 600px) {
        width: 150%;
        right: -25%;
      }
    }
  }
`

export const Wrapper = styled.div`
  padding: 30px;
  z-index: 999;

  h1 {
    color: ${props => props.theme.colors.white};
    font-size: 2rem;
  }

  p {
    margin-top: 1rem;
    color: ${props => props.theme.colors.light};
  }
`
