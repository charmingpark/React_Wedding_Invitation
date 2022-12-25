import React, { useState } from 'react'; // eslint-disable-line no-unused-vars
import Modal from 'react-modal';

Modal.setAppElement(document.getElementById('root'));

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleNext = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + images.length) % images.length
    );
  };

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setModalIsOpen(true);
  };

  const handleModalClose = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="image-slider">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleModalClose}
        appElement={document.getElementById('root')}
      >
        <img className="galleryModal" src={images[currentImageIndex]} alt="" />
        <button onClick={handleModalClose}>Close</button>
      </Modal>
      <button className="image-slider__previous" onClick={handlePrevious}>
        &lt;
      </button>
      <button
        className="image-slider__main"
        onClick={() => handleImageClick(currentImageIndex)}
      >
        <img src={images[currentImageIndex]} alt="" />
      </button>
      <button className="image-slider__next" onClick={handleNext}>
        &gt;
      </button>
      <div className="image-slider__thumbnails">
        {images.map((image, index) => (
          <button
            className="imgbtn"
            onClick={() => handleImageClick(index)}
            key={image}
          >
            <img
              src={image}
              alt=""
              className={index === currentImageIndex ? 'selected' : ''}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
