import React from 'react'
import { MdOutlineClose } from 'react-icons/md'

import { action } from '@storybook/addon-actions'

import { CloseButtonStyled } from '../../components/CloseButton'

export default {
  title: 'CloseButton',
  component: CloseButtonStyled
}

export const Default = () => (
  <CloseButtonStyled onClick={action('Button clicked')}>
    <MdOutlineClose />
  </CloseButtonStyled>
)
