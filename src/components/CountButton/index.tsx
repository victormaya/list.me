import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsBookmark, BsDownload } from 'react-icons/bs'

import { CountButtonStyled } from './styles'

function CountButton({
  type,
  total
}: {
  type: 'download' | 'like' | 'save'
  total: number
}) {
  function renderIcon() {
    if (type === 'download') {
      return <BsDownload data-testid="download-icon" />
    } else if (type === 'like') {
      return <AiOutlineHeart data-testid="like-icon" />
    } else if (type === 'save') {
      return <BsBookmark data-testid="save-icon" />
    }
  }

  return (
    <CountButtonStyled>
      {renderIcon()}
      {total}
    </CountButtonStyled>
  )
}

export default CountButton
