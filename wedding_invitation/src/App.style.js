import styled from 'styled-components';
import flowerBg from './images/flowerBg.jpg';

// const narrowWindow = `max-width: 30em`;

export const AppStyle = styled.div`
  /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain) */

  .App {
    font-family: 'AritaBuri';
    text-align: center;
  }

  a,
  address,
  article,
  aside,
  audio,
  blockquote,
  canvas,
  center,
  div,
  em,
  fieldset,
  figcaption,
  figure,
  footer,
  form,
  h1,
  h2,
  h3,
  h4,
  h5,
  img h6,
  header,
  html,
  img,
  label,
  legend,
  li,
  menu,
  nav,
  ol,
  output,
  p,
  section,
  span,
  strong,
  time,
  ul {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */

  ol,
  ul {
    list-style: none;
  }

  /* cummon */

  .top {
    color: #9f587d;
    font-family: 'AritaBuri', serif;
    font-size: 1.2em;
    text-indent: 0.1em;
    letter-spacing: 0.41em;
    text-indent: 0.41em;
    padding: 21% 15% 5%;
  }

  @media not (max-width: 800px) {
    .top {
      padding: 17% 15% 5%;
    }
  }

  section:nth-child(n + 2) {
    background: #f1dae0;
    border-radius: 50vw 50vw 0 0;
  }

  @supports (height: 100dvh) {
    section {
      height: 100dvh;
    }
  }
  @supports not (height: 100dvh) {
    section {
      height: 100vh;
    }
  }

  .secTitleWrap p {
    margin-top: 8px;
    font-size: 1.15em;
    margin-bottom: 30px;
    line-height: 1.4;
    letter-spacing: 2px;
    line-height: 2;
    /* margin-bottom: 27px; */
  }

  .textBox p:first-of-type {
    line-height: 2;
    margin-bottom: 27px;
    font-size: 1.05em;
    color: #222;
  }

  @media all and (max-width: 800px) {
  }
  /* 지워야할 임시 CSS */
  header {
    display: none;
  }

  a,
  button {
    color: yellowgreen;
  }

  #Skip_Nav,
  .QuickMenu,
  .popContainer {
    display: none;
  }

  section:nth-of-type(odd) {
    background: #334357;
    color: #fff;
    .top {
      color: #f1dae0;
    }
  }
  section:first-of-type {
    background: pink;
  }
  section:last-child {
    background: url(${flowerBg}) no-repeat bottom/cover;
    .top {
      color: #9f587d !important;
    }
    color: #222 !important;
    box-shadow: #f1dae0 0 20px 55px inset;
  }
  /* section:nth-last-child(2) {
    background: #f6e5d9;
  } */
`;
