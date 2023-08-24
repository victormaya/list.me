import styled from 'styled-components'
import theme from 'styles/theme'

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const LoadingSpinner = styled.div`
  border: 4px solid ${theme.colors.yellow};
  border-left: 4px solid ${theme.colors.grayDark};
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: spin 1s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
