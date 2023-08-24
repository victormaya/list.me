import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsBookmark, BsMegaphone } from 'react-icons/bs'

import styled from 'styled-components'
import theme from 'styles/theme'

export const IconButtonStyled = styled.button`
  width: 48px;
  height: 48px;
  border: 1px solid ${theme.colors.grayDark};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.white};
  cursor: pointer;
  background: none;
  font-size: ${theme.fontSizes.s16};
  padding: 0;
  :hover {
    border: 1px solid ${theme.colors.white};
    background: ${theme.colors.white};
    color: ${theme.colors.dark};
  }
`

function IconButton({ type }: { type: 'like' | 'save' | 'megaphone' }) {
  function renderIcon() {
    if (type === 'megaphone') {
      return <BsMegaphone data-testid="megaphone-icon" />
    } else if (type === 'like') {
      return <AiOutlineHeart data-testid="like-icon" />
    } else if (type === 'save') {
      return <BsBookmark data-testid="save-icon" />
    }
  }

  return <IconButtonStyled>{renderIcon()}</IconButtonStyled>
}

export default IconButton
