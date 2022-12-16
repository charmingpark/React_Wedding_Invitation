function PopGnb() {
  const CloseMenu = () => {
    console.log(`something`);
  };

  return (
    <div className="PopGnb popContainer">
      {/* <!-- PopGnb - header에 붙은 전체화면 팝메뉴(Global Nav Bar) --> */}
      <div className="inner">
        {/* <!-- gnbList --> */}
        <div className="gnbList">
          <div className="in">
            <ul>
              <li id="Btn_MenuInvite">
                <a href="#InviteYou">
                  INVITE YOU <span className="ko">인사말</span>
                </a>
              </li>
              <li id="Btn_MenuInterview">
                <a href="#Interview">
                  INTERVIEW <span className="ko">인터뷰</span>
                </a>
              </li>
              <li id="Btn_MenuWedding">
                <a href="#WeddingDay">
                  WEDDING DAY <span className="ko">웨딩 데이</span>
                </a>
              </li>
              <li id="Btn_MenuGallery">
                <a href="#gallery">
                  GALLERY <span className="ko">웨딩 갤러리</span>
                </a>
              </li>
              <li id="Btn_MenuHeart">
                <a href="#ForYourHeart">
                  FOR YOUR HEART <span className="ko">마음 전하실 곳</span>
                </a>
              </li>
              <li id="Btn_MenuLocation">
                <a href="#Location">
                  LOCATION <span className="ko">오시는 길</span>
                </a>
              </li>
              <li id="Btn_MenuThanks">
                <a href="#ThanksTo">
                  THANKS TO <span className="ko">감사 인사</span>
                </a>
              </li>
              <li id="Btn_MenuDevs">
                <a href="#EndCredits">
                  END CREDITS <span className="ko">엔딩 크레딧</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <button type="button" className="btnMenuClose" onClick={CloseMenu}>
        {/* TODO: EventTarget.addEventListener() 를 썼을 것이다. --> onClick으로 대체하기 */}
        메뉴닫기
      </button>
    </div>
  );
}

export default PopGnb;
