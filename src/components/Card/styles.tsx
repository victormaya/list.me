import styled from 'styled-components'
import theme from 'styles/theme'

export const CardDetailingContainer = styled.div<{ opened: boolean }>`
  position: relative;
  height: ${(props) => (props.opened ? '1091px' : '366px')};
`
export const CardContainer = styled.div`
  height: 366px;
  width: 275px;
  background: rgba(38, 38, 38, 0.5);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px;
  :hover {
    background: #a3a3a325;
    cursor: pointer;
  }
`
export const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
export const CardTitle = styled.p`
  font-size: ${theme.fontSizes.s14};
  color: ${theme.colors.white};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`
export const CardBrand = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: ${theme.fontSizes.s12};
  color: ${theme.colors.gray};
  margin-bottom: 12px;
`
export const CardBrandBall = styled.span`
  font-size: 6px;
  color: ${theme.colors.gray};
  position: relative;
  top: -1px;
`
export const CardButtons = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`
export const CardButtonsLeft = styled.div`
  display: flex;
  gap: 12px;
`
