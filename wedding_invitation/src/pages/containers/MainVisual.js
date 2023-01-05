import { MainVisualStyle } from './MainVisual.style.js';

function MainVisual({ thefirstPage }) {
  const date = ['23', '02', '18'];
  return (
    <section className="mainVisual" id="mainVisual">
      <MainVisualStyle thefirstPage={thefirstPage}>
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
                  <div className="bottomName">
                    <em className="name">김동진</em>
                    <span className="and">&amp;</span>
                    <em className="name">박찬민</em>
                  </div>
                </div>
                <div className="middle">
                  {/* map으로 돌리기 */}
                  {/* 세로쓰기 writing-mode: vertical-rl; */}
                  <p className="blast date">
                    {date[0]}
                    <br />
                    {date[1]}
                    <br />
                    {date[2]}
                  </p>
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
      </MainVisualStyle>
    </section>
  );
}

export default MainVisual;
