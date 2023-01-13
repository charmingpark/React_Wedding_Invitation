import styled from 'styled-components';
export const CreditStyle = styled.div`
  h2.createdBy {
    font-size: 1.2em;
    letter-spacing: 0.41em;
    text-indent: 0.41em;
    color: #f1dae0;
    padding: 5rem 0 2rem;
  }
  .creater {
    display: block;
    padding: 5px 0;
    color: #9f587d;
    width: 14em;
    border-radius: 8px;
    height: 36px;
    -webkit-text-decoration: auto;
    -webkit-text-decoration: auto;
    text-decoration: auto;
    text-indent: 0.5em;
    font-size: 1.05em;
    margin: 1em auto;
    background-color: #f4f3ef;
  }

  .popup-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 20;
  }

  .popup {
    /* border: 1px solid black; */
    border-radius: 1em;
    width: 95vw;
    height: 95vh;
    overflow: auto;
    display: flex;
    flex-direction: column;
    z-index: 10;
    div:first-child {
      background-color: #334357;
      color: #fff;
      flex: 1; //남은 영역을 슬라이드 이미지가 차지하게 해준다.
    }
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
        /* font-size: 1em; */

        b {
          text-decoration: dotted;
          font-size: 1.25em;
          padding: 3.5px 0;
        }
        a {
          font-size: 0.85em !important;
          float: right;
          color: #334357;
          background-color: #f1dae0;
          border-radius: 8px;
          height: 2.2em;
          padding: 5px 10px;
          line-height: normal !important;
          margin: 0;
          -webkit-text-decoration: none;
          text-decoration: none;
          text-align: center;
          cursor: pointer;
          font: inherit;
        }
      }
      p {
        font-size: 0.85em;
      }
      div {
        padding: 0.5em 0.01em;
      }
    }
  }

  .thankyou {
    font-size: 1em !important;
  }
  .close-button {
    padding: 8px;
    background-color: #fff;
    border: none;
    cursor: pointer;
    font-size: 16px;
    color: black;
    outline: none;
  }
`;
