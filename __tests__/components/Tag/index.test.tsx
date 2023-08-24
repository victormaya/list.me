import React from 'react'

import { render } from '@testing-library/react'
import Tag from 'components/Tag'

describe('Tag', () => {
  it('renders tag text correctly', () => {
    const { getByText } = render(<Tag />)
    const tagText = getByText('Novo')
    expect(tagText).toBeInTheDocument()
  })
})
