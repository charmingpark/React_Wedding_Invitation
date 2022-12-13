function MainVisual() {
  const name = ['김동진', '&', '박찬민'];

  const date = ['23', '02', '18'];
  return (
    <section className="mainVisual" id="mainVisual">
      {/* <!-- visualBox --> */}
      <div className="visualBox">
        <div className="imgBox">
          {/* imgBox의 background로 전체사진 깔기 */}
        </div>

        {/* titleWrap 테두리 만들기 */}
        <div className="titleWrap">
          <div className="in">
            <div className="topText">
              <div className="top">
                {/* map으로 돌리기 */}
                {/* opacity 1 --> 0 */}
                <span className="blast">{name}</span>
              </div>
              <div className="name">
                {/* map으로 돌리기 */}
                {/* 세로쓰기 writing-mode: vertical-rl; */}
                <span className="blast">{date}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll">
          <span className="bar"></span>
          <span className="txt">SCROLL</span>
        </div>
      </div>
      {/* <!-- //visualBox --> */}
    </section>
  );
}

export default MainVisual;
