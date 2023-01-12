import styled from 'styled-components';

export const GreetingStyle = styled.div`
  .from {
    color: #694a32;
    font-size: 0.85em;
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
`;
