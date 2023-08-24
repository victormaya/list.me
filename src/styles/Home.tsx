import styled from 'styled-components'

export const Main = styled.main`
  padding: 2rem 0;
  padding-top: 6rem;
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

  @media (max-width: 1839px) {
    width: 1527px;
  }
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
