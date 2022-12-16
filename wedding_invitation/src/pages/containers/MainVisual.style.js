import styled from 'styled-components';
import scroll_bg from '../../images/scroll_bg.png';
import circle from '../../images/circle.png';

export const MainVisualStyle = styled.div`
  /* 둥근 테두리 */
  .titleWrap {
    width: 80%;
    height: 95%;
    right: 10%;
    bottom: 0;
    border: 2px solid #694a32;
    border-style: double double none;
    position: absolute;
    border-radius: 230px 230px 0 0;
    margin: 0 auto;
  }

  section:first-child:before {
    content: '';
    position: absolute;
    z-index: 1;
    bottom: -25px;
    left: 0;
    background: url(${scroll_bg}) no-repeat center;
    width: 100%;
    height: 100px;
  }

  .in {
    position: absolute;
    width: 100%;
  }

  .bottomName {
    height: 1.5em;
    line-height: 1.5em;
    text-shadow: 1px 1px 2px yellow, 0 0 1em #fc0, 0 0 0.2em #fc0;
  }

  .name {
    font-size: 16px;
    font-weight: 700;
    color: #694a32;
  }
  .and {
    font-size: 14px;
    color: #888;
  }
  .date {
    font-size: 55px;
    font-family: 'Martel';
    line-height: 70px;
    color: #694a32;
  }

  .scroll {
    height: 45px;
    font-size: 12px;
    color: #694a32;
    position: absolute;
    z-index: 1;
    bottom: -1px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
  }

  .scroll span.bar {
    position: relative;
    display: block;
    width: 1px;
    height: 16px;
    background-color: #dcdcdc;
    content: '';
    margin: 0 auto 3px auto;
  }
  .scroll span.bar:before {
    content: '';
    width: 4px;
    height: 4px;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    margin: 0;
    background: url(${circle}) no-repeat 50% 50%;
    background-size: 3px 3px;
    -webkit-animation: scrollMot 1.3s infinite ease-in-out;
    animation: scrollMot 1.3s infinite ease-in-out;
  }

  .scroll span.txt {
    font-family: 'Martel';
  }

  @-webkit-keyframes scrollMot {
    0% {
      top: 0px;
    }
    50% {
      top: 14px;
    }
    100% {
      top: 0;
    }
  }

  @keyframes scrollMot {
    0% {
      top: 0px;
    }
    50% {
      top: 14px;
    }
    100% {
      top: 0;
    }
  }
`;
