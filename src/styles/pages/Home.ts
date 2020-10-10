import styled from 'styled-components'

export const Main = styled.main`
  width: 80%;
  max-width: 800px;
  margin: 25px auto;
`

export const ListRepos = styled.section`
  display: flex;
  align-items: center;

  width: 100%;
  margin: 25px;
  padding: 25px;

  background: ${props => props.theme.colors.light};

  border-radius: 1rem;
  border: 1px solid ${props => props.theme.colors.light};

  transition: transform 0.2s;

  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    margin-right: 1rem;
  }

  &:hover {
    transform: translateX(20px);
  }

  .content-link {
    display: flex;
    flex-direction: column;

    strong {
      color: ${props => props.theme.colors.primary};
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      font-weight: bold;
      margin-bottom: 0.5rem;
      font-size: 1.5rem;
    }

    p {
      color: ${props => props.theme.colors.secondaryDark};
    }
  }

  @media (max-width: 600px) {
  }

  @media (max-width: 600px) {
    flex-direction: column;

    img {
      margin-right: 0;
      margin-bottom: 1rem;
    }

    .content-link {
      display: grid;
      text-align: center;
    }
  }
`
