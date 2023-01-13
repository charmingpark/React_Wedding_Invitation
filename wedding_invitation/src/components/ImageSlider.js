import { useState, useEffect } from 'react';

import img1 from '../images/img_1.jpg';
import img2 from '../images/img_2.jpg';
import img3 from '../images/img_3.jpg';
import img4 from '../images/img_4.jpg';
import img5 from '../images/img_5.jpg';
import img6 from '../images/img_6.jpg';
import Prev from '../images/Prev.png';
import Next from '../images/Next.png';

import { ImageSliderStyle } from './ImageSlider.style.js';

const ImageSlider = () => {
  const images = [img1, img2, img3, img4, img5, img6];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 50000);

    if (isPopupOpen) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [currentIndex, isPopupOpen]);

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };
  // popupHere

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
        {/* popupHere */}
        <button
          className="image-container"
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
        <p>사진을 클릭하시면 전체 비율로 감상하실 수 있습니다.</p>
        <div className="thumbnail-container">
          <button className="prev-button" onClick={handlePrev}>
            <img src={Prev} alt="prev" className="prev" />
          </button>
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
          <button className="next-button" onClick={handleNext}>
            <img src={Next} alt="next" className="next" />
          </button>
        </div>
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
