import styled from 'styled-components';

export const GreetingStyle = styled.div`
  .from {
    color: #694a32;
    font-size: 0.85em;
    margin: 3em 5em;
    padding: 1.2dvh 0 1em;
    line-height: 2em;
    font-family: 'Pretendard', serif;
    em {
      font-family: 'AritaBuri';
      font-size: 1.2em;
      padding-left: 5px;
      display: inline-block;
    }
  }

  @media not (max-width: 800px) {
    .from {
      max-width: 542px;
      margin: 0 auto;
    }
  }
  /* 
  .dotted-spaced {
    background-image: linear-gradient(
      to right,
      #000 10%,
      rgba(255, 255, 255, 0) 0%
    );
    background-position: top;
    background-size: 5px 1px;
    background-repeat: repeat-x;
  } */
`;
