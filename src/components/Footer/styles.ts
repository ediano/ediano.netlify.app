import styled from 'styled-components'

export const Container = styled.footer`
  text-align: center;
  padding: 3rem;

  background: ${props => props.theme.colors.primary};
  box-shadow: 0 0 12px 4px ${props => props.theme.colors.secondaryLight};

  strong {
    display: block;
    margin-bottom: 1rem;
    font-size: 1.3rem;

    a {
      color: ${props => props.theme.colors.light};
      border-bottom: 1px solid ${props => props.theme.colors.light};
    }
  }

  span {
    margin: 0 2.5px;
    color: ${props => props.theme.colors.white};
    font-size: 1.2rem;
  }
`
