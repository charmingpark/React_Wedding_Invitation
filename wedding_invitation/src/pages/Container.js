import MainVisual from './containers/MainVisual';
import Greeting from './containers/Greeting';
import AboutUs from './containers/AboutUs.js';
import WeddingDay from './containers/WeddingDay.js';
import Gallery from './containers/Gallery.js';
import Location from './containers/Location.js';
import Credit from './containers/Credit.js';
import { ContainerStyle } from './Container.style.js';
import { useRef, useEffect } from 'react';

function Container({ thefirstPage }) {
  const boxRef = useRef([]);

  useEffect(() => {
    const options = {
      threshold: 0.7, //컨테이너에서 item이 몇 퍼센트 보였을 때 작동할지
      //-> 타이밍 판단할 때 threshold 옵션과 transition-delay 속성(CSS)을 조합해 조절하면 좋다.
    };

    const observer = new IntersectionObserver((entry) => {
      entry.forEach((box) => {
        if (box.isIntersecting) {
          box.target.classList.add('focus');
        } else {
          box.target.classList.remove('focus');
        }
      });
    }, options);

    if (boxRef.current.length > 0) {
      boxRef.current.forEach((el) => {
        observer.observe(el);
      });
    }
  });

  return (
    <ContainerStyle>
      <div id="Container">
        <MainVisual thefirstPage={thefirstPage} />
        <Greeting ref={boxRef} />
        <AboutUs ref={boxRef} />
        <WeddingDay ref={boxRef} />
        <Location ref={boxRef} />
        <Gallery ref={boxRef} />
        <Credit ref={boxRef} />
      </div>
    </ContainerStyle>
  );
}

export default Container;
