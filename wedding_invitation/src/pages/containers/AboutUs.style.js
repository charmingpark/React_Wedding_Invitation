import styled from 'styled-components';

export const AboutUsStyle = styled.div`
  img {
    width: 100px;
    height: 100px;
  }

  .MuiTab-root {
    opacity: 0.5;
    background-color: transparent;
    img {
      height: 8em;
      width: 8em;
      margin: 0 10px 10px;
      border-radius: 50%;
      display: inline-block;
    }
    p {
      font-size: 1.15em;
      padding-bottom: 0.5em;
      color: #f1dae0;
    }
  }

  p.info {
    margin-top: 3em;
    line-height: 1.5em;
    font-family: 'Pretendard', serif;
    font-size: 0.85em;
    font-weight: 500;
  }
  a.callTo {
    padding: 5px 0;
    line-height: 36px;
    background-color: #f1dae0;
    color: #334357;
    width: 14em;
    display: inline-block;
    border-radius: 8px;
    height: 36px;
    text-decoration: auto;
    text-indent: 0.5em;
    img {
      width: 1.05em;
      height: 1.05em;
      position: relative;
      top: 4px;
      right: 8px;
    }
  }
  a.bankCopy {
    padding: 5px 0;
    margin: 1em;
    width: 14em;
    border-radius: 8px;
    border: 0.5px solid #fff;
    display: inline-block;
    text-decoration: auto;
    color: #fff;
    opacity: 0.8;
    span {
      display: block;
      margin-top: -10px;
      font-size: 0.8em;
    }
  }
  .MuiTab-root.Mui-selected {
    opacity: 1;
  }
  .MuiTabPanel-root {
    font-size: 1.05em;
    line-height: 2;
  }

  .from {
    font-family: 'Pretendard', serif;
  }
`;
