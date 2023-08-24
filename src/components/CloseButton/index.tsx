import React, { MouseEventHandler } from 'react'
import { MdOutlineClose } from 'react-icons/md'

import styled from 'styled-components'
import theme from 'styles/theme'

export const CloseButtonStyled = styled.button`
  position: absolute;
  right: 1rem;
  top: 1rem;
  font-size: {
    ${theme.fontSizes.s24}
  }
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${theme.colors.white};
  border: 1px solid ${theme.colors.grayDark};
  background: none;
  :hover {
    border: 1px solid ${theme.colors.white};
    background: ${theme.colors.white};
    color: ${theme.colors.dark};
  }
`

function CloseButton({
  handleClick
}: {
  handleClick: MouseEventHandler<HTMLButtonElement>
}) {
  return (
    <CloseButtonStyled type="button" onClick={handleClick}>
      <MdOutlineClose />
    </CloseButtonStyled>
  )
}

export default CloseButton
