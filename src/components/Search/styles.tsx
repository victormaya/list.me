import styled from 'styled-components'
import theme from 'styles/theme'

export const SearchContainer = styled.div`
  width: 50%;
  position: fixed;
  top: 1rem;
  display: flex;
  align-items: center;
  padding: 1rem;
  z-index: 1;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(13.5px);
  -webkit-backdrop-filter: blur(13.5px);
  border-radius: 10px;
`
export const InputContainer = styled.div`
  width: 100%;
  position: relative;
  svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0.5rem;
    font-size: ${theme.fontSizes.s24};
    color: ${theme.colors.white};
  }
`
export const SearchInput = styled.input`
  padding-left: 3rem;
  font-size: ${theme.fontSizes.s14};
  width: 100%;
  height: 40px;
  border-radius: 8px;
  background: ${theme.colors.graySearch};
  border: none;
  color: ${theme.colors.white};
`
