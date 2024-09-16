import { createGlobalStyle } from 'styled-components'

const cores = {
  coral: '#E66767',
  rosa: '#FFEBD9',
  rosaClaro: '#FFF8F2',
  branca: '#FFFFFF'
}


export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: ${cores.rosaClaro};
    color: ${cores.coral};
`
