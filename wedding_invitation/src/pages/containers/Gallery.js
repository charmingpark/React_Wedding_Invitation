import ImageSlider from '../../components/ImageSlider.js';
import { forwardRef } from 'react';

const Gallery = forwardRef((props, ref) => {
  return (
    <section
      className="galleryWrap atm"
      id="galleryWrap"
      ref={(inputEl) => (ref.current[ref.current.length] = inputEl)}
    >
      <div className="galleryInner">
        <div className="secTitleWrap t1">
          <h2 className="hanTit ranTxt top mt">갤러리</h2>
        </div>
        <div className="secTitleWrap">
          <p className="mt">
            사진을 클릭하시면
            <br />큰 사이즈로 확인하실 수 있습니다.
          </p>
        </div>
        <ImageSlider />
      </div>
    </section>
  );
}); //함수 닫는 괄호 잊지 마세요!

Gallery.displayName = 'Gallery';

export default Gallery;
