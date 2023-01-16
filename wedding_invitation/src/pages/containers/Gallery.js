import ImageSlider from '../../components/ImageSlider.js';
import styled from 'styled-components';

const GalleryInner = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

function Gallery() {
  return (
    <section
      className="galleryWrap atm"
      id="galleryWrap"
      // ref={(inputEl) => (ref.current[ref.current.length] = inputEl)}
    >
      <GalleryInner className="galleryInner">
        <div className="secTitleWrap t1">
          <h2 className="hanTit ranTxt top mt">갤러리</h2>
        </div>
        <ImageSlider />
      </GalleryInner>
    </section>
  );
}
export default Gallery;
