import React from 'react'

import styled from 'styled-components'
import theme from 'styles/theme'

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  p {
    font-size: ${theme.fontSizes.s16};
    text-align: center;
    color: ${theme.colors.white};
  }
`

function pages() {
  return (
    <Container>
      <p>
        Conteúdo não disponível.
        <br />
        Utilize o comando 'yarn api' para iniciar o json-server, caso ainda não
        o tenha feito.
      </p>
    </Container>
  )
}

export default pages
