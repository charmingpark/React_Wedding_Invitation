import styled from 'styled-components';
export const LoadingStyle = styled.div`
  .LoadingBox {
    opacity: 0.8;
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;

    .title1 {
      position: absolute;
      top: 2.5em;
      right: 2.5em;
      writing-mode: 'vertical-rl';
      line-height: 1.5em;
      font-family: 'AritaBuri';
      font-size: 0.85em;
      font-weight: 500;
    }
    .title2 {
      font-family: 'AritaBuri';
      position: absolute;
      top: 1.2em;
      right: 2rem;
      font-size: 3em;
    }
  }
`;
