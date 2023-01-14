import styled from 'styled-components';
export const ImageSliderStyle = styled.div`
  height: 100%;
  flex: 1;
  overflow: hidden;

  .slide {
    margin: 0 auto;
    width: 95vw;
    height: 60vh;
    display: flex;
    flex-direction: column;
    p {
      padding: 0.4em 0;
      font-family: 'Pretendard', serif;
      color: #694a32;
    }
  }

  .image-container {
    flex: 1; //남은 영역을 슬라이드 이미지가 차지하게 해준다.
    width: 95vw;
    display: block;
    overflow: hidden;
  }

  .slide-image {
    display: block;
    width: 95vw;
    height: 100%;
    object-fit: cover;
    border-radius: 1em;
  }

  .thumbnail-container {
    display: block;
    display: flex;
    justify-content: center;
  }

  .thumbnail,
  .prev,
  .next {
    display: block;
    width: calc(95vw / 8); //썸네일 너비
    height: calc(95vw / 8); //썸네일 높이
    max-width: 50px;
    max-height: 50px;
  }
  .thumbnail {
    object-fit: cover;
    border-radius: 50%;
    box-sizing: border-box;
    padding: 5px;
  }
  .prev,
  .next {
    object-fit: scale-down;
  }
  .thumbnail-button {
    //현재 썸네일에 효과를 주고 싶으면 여기에!
    opacity: 0.3;
    &.current {
      opacity: 1;
    }
  }

  .move-buttons {
    height: 40px; //버튼 구역 높이
    display: flex;
    justify-content: space-between;
  }

  .prev-button,
  .next-button {
    background: transparent;
    border: 0;
    color: white;
    cursor: pointer;
    font-size: 1rem;
    width: calc(95vw / 8); //썸네일 너비
    height: calc(95vw / 8); //썸네일 높이
    max-width: 50px;
    max-height: 50px;
  }

  .prev,
  .next {
    width: calc(95vw / 8); //썸네일 너비
    height: calc(95vw / 8); //썸네일 높이
    max-width: 50px;
    max-height: 50px;
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
    background-color: white;
    /* border: 1px solid black; */
    border-radius: 1em;
    max-width: 95vw;
    max-height: 95vh;
    overflow: auto;
    display: flex;
    flex-direction: column;
    z-index: 10;
  }

  .popup-image {
    max-width: 95vw;
    max-height: 100%;
    object-fit: cover;
  }

  .close-button {
    margin: 8px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 16px;
    color: black;
    outline: none;
  }
`;
