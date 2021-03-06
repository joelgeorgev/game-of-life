import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'

import { App } from './App'
import reportWebVitals from './reportWebVitals'

import woff2 from './fonts/source-sans-pro-v11-latin-regular.woff2'
import woff from './fonts/source-sans-pro-v11-latin-regular.woff'

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', sans-serif;
    overscroll-behavior-y: none;
  }

  /* source-sans-pro-regular - latin */
  @font-face {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    font-display: optional;
    src: local('Source Sans Pro Regular'), local('SourceSansPro-Regular'),
        url(${woff2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url(${woff}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
`

ReactDOM.render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
