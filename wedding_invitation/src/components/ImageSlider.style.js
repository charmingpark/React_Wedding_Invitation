import styled from 'styled-components';
export const ImageSliderStyle = styled.div`
  .slide {
    position: relative;
    overflow: hidden;
    width: 100vw;
  }

  .slide-image {
    width: 500px;
    height: 500px;
  }

  .thumbnail-container {
    display: flex;
  }

  .thumbnail-button {
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  .thumbnail {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }

  .current {
    border: 2px solid red;
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
  .slide {
    height: 10px;
  }
`;
