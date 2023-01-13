import styled from 'styled-components';
export const ImageSliderStyle = styled.div`
  height: 100%;
  flex: 1;
  overflow: hidden;

  .slide {
    position: relative;
    overflow: hidden;
    width: 100vw;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .image-container {
    flex: 1; //남은 영역을 슬라이드 이미지가 차지하게 해준다.
    display: block;
    overflow: hidden;
  }

  .slide-image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .thumbnail-container {
    display: block;
    display: flex;
  }

  .thumbnail-button {
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  .thumbnail {
    display: block;
    width: 80px; //썸네일 너비
    height: 80px; //썸네일 높이
    object-fit: cover;
  }

  .thumbnail-button .current {
    //현재 썸네일에 효과를 주고 싶으면 여기에!
    position: relative;
    z-index: 10;
    outline: 2px solid red;
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
    font-size: 1.5rem;
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
    border: 1px solid black;
    border-radius: 4px;
    max-width: 80%;
    max-height: 80%;
    overflow: auto;
    display: flex;
    flex-direction: column;
    z-index: 10;
  }

  .popup-image {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
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
