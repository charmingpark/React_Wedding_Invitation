import styled from 'styled-components';

export const LoadingStyle = styled.div`
  * {
    background-color: black;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .loadingBar {
    background-color: #5d5d5d;
    border: 3px solid white;
    height: 5px;
    width: 100px;
    border-radius: 50px;
    position: relative;
  }
  .loadingBar::before {
    content: '';
    animation: fill 3s linear;
    background-color: #ccc;
    height: 5px;
    /* width: 10%; */
    position: absolute;
    left: 1px;
    right: 1px;
    border-radius: 50px;
    transform: translateY(5%);
  }
  @keyframes fill {
    0% {
      width: 25%;
    }
    50% {
      width: 50%;
    }
    100% {
      width: 95%;
    }
  }

  .loading {
    color: white;
    font-family: 'Nunito', sans-serif;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0.5px;
  }
`;
