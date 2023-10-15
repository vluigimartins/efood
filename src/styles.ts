import { createGlobalStyle } from 'styled-components'

export const cores = {
  rosa: '#E66767',
  beje: '#FFEBD9',
  branco: '#FFFFFF',
  amarelo: '#FFB930',
  bejeClaro: '#FFF8F2'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${cores.bejeClaro};
    color: ${cores.rosa};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: auto;
  }
`
