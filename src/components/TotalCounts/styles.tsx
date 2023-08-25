import styled from 'styled-components'
import theme from 'styles/theme'

export const DownloadLikesSaves = styled.ul`
  border: 1px solid ${theme.colors.grayDark};
  margin-top: 25px;
  color: ${theme.colors.grayLight};
  justify-self: flex-start;
  padding: 1rem;
  border-radius: 8px;
  font-size: ${theme.fontSizes.s12};
  display: flex;

  li {
    margin-right: 2rem;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    span {
      @media (max-width: 660px) {
        display: none;
      }
    }
    :last-child {
      margin-right: 0;
    }
  }

  .withDot {
    position: relative;
  }
  .withDot::before {
    content: '';
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: ${theme.colors.grayLight};
    position: absolute;
    left: -1rem;
  }
`
