import { createGlobalStyle } from 'styled-components'

import RobotoRegular from '../assets/fonts/Roboto-Regular.ttf'
import RobotoBold from '../assets/fonts/Roboto-Bold.ttf'
import RobotoSemi from '../assets/fonts/Roboto-Medium.ttf'

const GlobalStyles = createGlobalStyle`
  :root {
    --white: #d8d8d8;
    --white-two: #ffffff;
    --dark-indigo: #1a0e49;
    --warm-grey: #8d8c8c;
    --charcoal-grey: #383743;
    --charcoal-grey-two: #403e4d;
    --greyish: #b5b4b4;
    --medium-pink: #ee4c77;
    --night-blue: #0d0430;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    background-color: #EEECDB;
  }

  li {
    list-style: none;
  }

  @font-face {
    font-family: 'Roboto-regular';
    src: url(${RobotoRegular}) format("truetype");
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
  }

  @font-face {
    font-family: 'Roboto-Bold';
    src: url(${RobotoBold}) format("truetype");
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
  }

  @font-face {
    font-family: 'Roboto-Semi';
    src: url(${RobotoSemi}) format("truetype");
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
  }

`

export default GlobalStyles
