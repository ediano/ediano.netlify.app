import styled from 'styled-components'

export const Container = styled.main`
  width: 80%;
  max-width: 800px;
  margin: 50px auto;

  > div {
    display: flex;
    justify-content: space-around;

    span {
      background: ${props => props.theme.colors.white};
      flex: 1;
      padding: 1rem;
      margin: 1rem;
      border-radius: 0.5rem;
      box-shadow: 0 0 12px 4px ${props => props.theme.colors.secondaryLight};

      strong {
        margin-top: 0.5rem;
        padding-top: 0.5rem;
        border-top: 1px solid;
        display: block;
      }

      a {
        display: block;
        margin-top: 0.5rem;
        color: ${props => props.theme.colors.primaryLight};

        &:hover {
          color: ${props => props.theme.colors.primaryDark};
        }
      }
    }

    @media (max-width: 450px) {
      flex-direction: column;
    }
  }
`
