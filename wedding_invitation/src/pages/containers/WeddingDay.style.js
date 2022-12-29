import styled from 'styled-components';
import heart from '../../images/heart.png';

export const WeddingDayStyle = styled.div`
  table {
    border-collapse: collapse;
    text-align: center;
    margin: 0 auto;
    width: 75vw;
    height: 35vh;
    color: #694a32;
  }
  .calWrap {
    font-family: 'Pretendard', serif;
    display: inline-block;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 0.5em;
    padding: 0.5em;
  }
  table thead {
    border-bottom: 1px solid #eee;
  }
  .month {
    font-size: 1.3em;
    padding-bottom: 0.5em;
  }
  table th {
    height: 4.5vh;
    padding: 0 3vw;
    box-sizing: border-box;
  }
  tbody tr td {
    position: relative;

    &:first-child {
      color: #9f587d;
    }
    &.heart {
      background: url(${heart}) no-repeat center/110%;
      color: #fff;
    }
  }
  .weekend {
    color: #9f587d;
  }
  .dday {
    margin-top: 1em;
    line-height: 1.5em;
    font-family: 'Pretendard', serif;
    font-size: 0.85em;
    font-weight: 500;
    color: #694a32;
    em {
      color: #9f587d;
    }
  }
`;
