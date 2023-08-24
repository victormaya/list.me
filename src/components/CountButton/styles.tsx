import styled from 'styled-components'
import theme from 'styles/theme'

export const CountButtonStyled = styled.button`
  border: 1px solid rgb(64, 64, 64);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background: none;
  font-size: ${theme.fontSizes.s12};
  padding: 4px 8px;
  gap: 8px;
  svg {
    color: ${theme.colors.yellow};
  }
  :hover {
    background: ${theme.colors.yellow};
    color: ${theme.colors.dark};
    svg {
      color: ${theme.colors.dark};
    }
  }
`
