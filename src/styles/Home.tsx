import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
  justify-content: center;
  min-height: 100vh;
`
export const CardsContainer = styled.div`
  min-height: 100vh;
  width: 1840px;
  display: flex;
  flex-wrap: wrap;
  gap: 38px;
  padding: 2rem 0;
  padding-top: 6rem;
  @media (max-width: 1839px) {
    width: 1527px;
  }
  @media (max-width: 1610px) {
    width: 1214px;
  }
  @media (max-width: 1290px) {
    width: 901px;
  }
  @media (max-width: 1290px) {
    width: 901px;
  }
  @media (max-width: 970px) {
    width: 588px;
  }
  @media (max-width: 970px) {
    width: 588px;
  }
  @media (max-width: 660px) {
    width: 270px;
  }
`
export const CardSkeleton = styled.div`
  height: 366px;
  width: 275px;
  background: linear-gradient(90deg, #262626 25%, #404040 50%, #262626 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite ease-in-out;
  margin: 0;
  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
  border-radius: 8px;
`
