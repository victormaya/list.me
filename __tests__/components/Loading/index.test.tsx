import React from 'react'

import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Loading from 'components/Loading'

describe('Loading Component', () => {
  it('renders loading spinner', () => {
    const { getByTestId } = render(<Loading />)
    const loadingSpinner = getByTestId('loading-spinner')

    expect(loadingSpinner).toBeInTheDocument()
  })
})
