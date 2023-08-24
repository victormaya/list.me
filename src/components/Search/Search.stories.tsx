import React from 'react'

import { action } from '@storybook/addon-actions'

import Search from '.'

export default {
  title: 'Search',
  component: Search
}

export const Default = () => (
  <Search setSearchText={action('Search Text Set')} />
)
