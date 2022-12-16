function Gallery() {
  return (
    <section className="galleryWrap atm" id="galleryWrap">
      <div className="galleryInner">
        <div className="secTitleWrap t1">
          <h2 className="hanTit ranTxt top mt">갤러리</h2>
        </div>
        {/* <!-- galWrap --> */}
        <div className="galWrap mt">
          <div className="inner">
            {/* <!-- gallery --> */}
            <div className="gallery">
              <div className="galList">
                <div className="col">
                  <ul>
                    {/* li태그 map으로 사진 띄우기 */}
                    {/* 클릭 하면 뜨는 팝업은 props로 받는다 */}
                    {/* hover하면 돋보기 기호 + 크게보기 뜨게 */}
                    {/* 다운로드 버튼도 만들고 싶긴 함. */}
                    {/* 클릭 후 들어가서 슬라이드로 넘겨볼 수 있게 하기 */}
                    <li>
                      <button type="button">
                        <img src="" alt="" className="img lazy" />
                        <div className="pop">
                          <span className="hover">사진</span>
                        </div>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <!-- //gallery--> */}
            <div className="more">
              {/* 클릭하면 morePic 함수 실행 */}
              <button>
                <span>사진 더보기</span>
              </button>
            </div>
          </div>
        </div>
        {/* <!-- //galWrap --> */}
      </div>
    </section>
  );
}

export default Gallery;
