import React from 'react'

import styled from 'styled-components'
import theme from 'styles/theme'

export const TagText = styled.p`
  background: ${theme.colors.red};
  border-radius: 4px !important;
  padding: 4px;
  font-size: ${theme.fontSizes.s10};
  color: ${theme.colors.white};
`

function Tag() {
  return <TagText>Novo</TagText>
}

export default Tag
