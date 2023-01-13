import ImageSlider from '../../components/ImageSlider.js';
import { forwardRef } from 'react';
import styled from 'styled-components';

const GalleryInner = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Gallery = forwardRef((props, ref) => {
  return (
    <section
      className="galleryWrap atm"
      id="galleryWrap"
      ref={(inputEl) => (ref.current[ref.current.length] = inputEl)}
    >
      <GalleryInner className="galleryInner">
        <div className="secTitleWrap t1">
          <h2 className="hanTit ranTxt top mt">갤러리</h2>
        </div>
        <ImageSlider />
      </GalleryInner>
    </section>
  );
}); //함수 닫는 괄호 잊지 마세요!

Gallery.displayName = 'Gallery';

export default Gallery;
