import { useState, useEffect } from 'react';

import img1 from '../images/bride.jpg';
import img2 from '../images/heart.png';
import img3 from '../images/flowerBg.jpg';

import { ImageSliderStyle } from './ImageSlider.style.js';

const ImageSlider = () => {
  const images = [img1, img2, img3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };

  const handlePopupOpen = (index) => {
    setCurrentIndex(index);
    setIsPopupOpen(true);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <ImageSliderStyle>
      <div className="slide">
        {isPopupOpen && (
          <Popup image={images[currentIndex]} onClose={handlePopupClose} />
        )}
        <button
          onClick={() => handlePopupOpen(currentIndex)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handlePopupOpen(currentIndex);
            }
          }}
        >
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex}`}
            className="slide-image"
          />
        </button>

        <div className="thumbnail-container">
          {images.map((image, index) => (
            <button
              className={`thumbnail-button ${
                index === currentIndex ? 'current' : ''
              }`}
              key={index}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handlePopupOpen(index);
                }
              }}
              onClick={() => handlePopupOpen(index)}
            >
              <button
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handlePopupOpen(index);
                  }
                }}
                onClick={() => handlePopupOpen(index)}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className={`thumbnail ${
                    index === currentIndex ? 'current' : ''
                  }`}
                />
              </button>
            </button>
          ))}
        </div>
        <button className="prev-button" onClick={handlePrev}>
          Prev
        </button>
        <button className="next-button" onClick={handleNext}>
          Next
        </button>
      </div>
    </ImageSliderStyle>
  );
};

const Popup = ({ image, onClose }) => (
  <div className="popup-overlay">
    <div className="popup">
      <img src={image} alt="Popup" className="popup-image" />
      <button className="close-button" onClick={onClose}>
        Close
      </button>
    </div>
  </div>
);

export default ImageSlider;
