import { createGlobalStyle } from 'styled-components'

export const colors = {
  pink: '#E66767',
  beige: '#FFEBD9',
  white: '#FFFFFF',
  yellow: '#FFB930',
  lightBeige: '#FFF8F2'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${colors.lightBeige};
    color: ${colors.pink};
    overflow-x: hidden;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: auto;
  }
`
