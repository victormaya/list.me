import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
}

  ${({ theme }) => css`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Rubik+Iso&display=swap');
    body {
      font-size: 16px;
      line-height: 1.5;
      background: '#171717';
      min-height: 100vh;
    }

    ul,
    ol {
      list-style: none;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    body {
      background: #171717;
      color: #333;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto; /* Centralizar o conteúdo na página */
    }

    h1,
    h2,
    h3 {
      font-weight: bold;
    }

    input,
    textarea {
      border: 1px solid #ccc;
      padding: 10px;
      border-radius: 4px;
    }

    button {
      padding: 10px 20px;
      background-color: #333;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    /* Adicione seus próprios estilos personalizados após este ponto */

    * {
      font-family: 'Inter', sans-serif;
    }

    ::-webkit-scrollbar {
      width: 5px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #a3a3a3;
      border-radius: 5px;
    }

    ::-webkit-scrollbar-track {
      background-color: #171717;
    }
  `}

`
export default GlobalStyles
