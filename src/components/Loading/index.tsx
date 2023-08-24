import React from 'react'

import { LoadingContainer, LoadingSpinner } from './styles'

function Loading() {
  return (
    <LoadingContainer>
      <LoadingSpinner data-testid="loading-spinner" />
    </LoadingContainer>
  )
}

export default Loading
