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

  button {
    background: none;
    border: none;
    color: inherit;
    font: inherit;
    line-height: normal;
    margin: 0;
    overflow: visible;
    padding: 0;
    -webkit-appearance: button; /* for input */
  }
  /* cummon */

  .top {
    color: #9f587d;
    font-family: 'AritaBuri', serif;
    font-size: 1.2em;
    text-indent: 0.1em;
    letter-spacing: 0.41em;
    text-indent: 0.41em;
    padding: 16vh 15% 5%;
  }

  @media not (max-width: 800px) {
    .top {
      padding: 13dvh 15% 5%;
    }
  }

  section:nth-child(n + 2) {
    background: #f1dae0;
    /* border-radius: 50vw 50vw 0 0; */
    /* transition: border-radius 1s; */
  }
  /* 
  section.focus {
    border-radius: 0;
  } */

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
    margin-top: 18px;
    font-size: 1.15em;
    margin-bottom: 2.5dvh;
    line-height: 1.4;
    letter-spacing: 2px;
  }

  .textBox p:first-of-type {
    line-height: 2;
    margin-bottom: 27px;
    font-size: 1.05em;
    color: #222;
    padding: 13px;
  }

  @media all and (max-width: 800px) {
  }
  /* 지워야할 임시 CSS */
  /* header {
    display: none;
  }

  a,
  button {
    color: yellowgreen;
  } */

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
    box-shadow: #f1dae0 0px -50dvh 0px;
  }
  section:nth-of-type(2n + 4) {
    box-shadow: #334357 0px -50dvh 0px;
  }
  section:last-child {
    background: url(${flowerBg}) no-repeat bottom/cover;
    .top {
      color: #9f587d;
    }
    color: #222 !important;
    box-shadow: #f1dae0 0 20px 55px inset, #f1dae0 0px -50dvh 0px;
  }
  /* section:nth-last-child(2) {
    background: #f6e5d9;
  } */
`;
