import styled from 'styled-components'

export const Main = styled.main`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`

export const ListRepos = styled.section`
  display: flex;
  align-items: center;

  margin: 25px;
  padding: 25px;

  background: ${props => props.theme.colors.light};

  border-radius: 0.5rem;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-right: 1rem;
  }

  a {
    margin-bottom: 0.5rem;
    display: inline;
    font-size: 1.5rem;
    color: ${props => props.theme.colors.primary};
  }

  @media (max-width: 600px) {
    flex-direction: column;

    > div {
      text-align: center;
    }

    img {
      margin-right: 0;
      margin-bottom: 1rem;
    }
  }
`
