import ImageSlider from '../../components/ImageSlider.js';

function Gallery() {
  const images = [
    'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
  ];

  return (
    <section className="galleryWrap atm" id="galleryWrap">
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
        <ImageSlider images={images} />
      </div>
    </section>
  );
}

export default Gallery;
