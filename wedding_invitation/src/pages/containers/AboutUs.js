function AboutUs() {
  return (
    <section className="aboutUs atm" id="aboutUs">
      <div className="contactInner">
        <div className="secTitleWrap t1">
          <h2 className="hanTit ranTxt">신랑신부 소개</h2>
          {/* material.UI 를 설치하고 탭패널로 만들기 */}
          <div className="ranBox family">
            <div className="box">
              <p className="mt">전화나 메시지로 축하의 마음을 전달해보세요.</p>
              {/* table 태그로 구현하기 */}
              <em>김의홍 · 한옥화</em>의 장남
              <strong>김동진</strong>
              {/* ::after image-background로 전화버튼 삽입 */}
              <a href="tel:010-2270-6408">전화</a>
              {/* 계좌번호 탭 누르면 접혀있던거 열리게 */}
              <div className="contBox orderBankInfo groom">
                <div className="tit">
                  <span>신랑 측 축의금 보내기</span>
                </div>

                <div className="toggle" data-id="bank-0">
                  <div className="info">
                    <div className="bank">
                      <span>우리은행</span>
                      <em>1002-454-084513</em>
                    </div>
                    <div className="name">
                      <p>
                        신랑
                        <em>정창윤</em>
                      </p>
                    </div>
                  </div>
                  <div className="btn">
                    <button
                      className="no2 bankCopy"
                      data-clipboard-text="우리은행 1002-454-084513 정창윤"
                    >
                      <span>계좌번호 복사</span>
                    </button>
                  </div>
                </div>
                <div className="toggle" data-id="bank-1">
                  <div className="info">
                    <div className="bank">
                      <span>하나은행</span>
                      <em>223-18-17116-9</em>
                    </div>
                    <div className="name">
                      <p>
                        아버지
                        <em>정후길</em>
                      </p>
                    </div>
                  </div>
                  <div className="btn">
                    <button
                      className="no2 bankCopy"
                      data-clipboard-text="하나은행 223-18-17116-9 정후길"
                    >
                      <span>계좌번호 복사</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="box">
              <em>박춘서 · 오치림</em>의 장녀
              <strong>박찬민</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
