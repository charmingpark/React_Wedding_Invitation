import styled from 'styled-components';
export const LocationStyle = styled.div`
  .mapWrap {
    display: inline-block;
    width: 100vw;
  }

  .map {
    width: 100%;
    height: 35vh;
    background-color: #000;
  }

  .addr {
    li {
      font-family: 'Pretendard', serif;
      padding: 0.2em 0.5em;
      margin: 1em auto;
      line-height: 25px;
      border-bottom: 1px solid #aaa;
      box-sizing: border-box;
      text-align: left;
      width: 75vw;
      height: em;
      h3 {
        font-size: 1.05em;
        b {
          text-decoration: dotted;
        }
        button {
          font-size: 0.85em;
          float: right;
          color: #334357;
          background-color: #f1dae0;
          border-radius: 8px;
          height: 3em;
          padding: 5px 10px;
          cursor: pointer;

          /* &:hover {
            background-color: #f1dae0cc;
          } */
        }
      }
      p {
        font-size: 0.85em;
      }
    }
  }
`;
