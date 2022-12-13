function WeddingDay() {
  return (
    <section className="weddingDay atm" id="weddingDay">
      <div className="dayInner">
        <div className="secTitleWrap">
          <h2 className="hanTit ranTxt">초대합니다</h2>
        </div>
        <div className="dayBox">
          {/* mt, mt2는 transition-delay 속성과 연관됨.(800) */}
          <p className="mt">
            2023년 2월 18일 토요일
            <br />
            오후 4시 20분
          </p>
        </div>
        <div className="mt2">
          <span className="place">양재 영일교회 본당</span>
          <div className="calender">
            {/* react-calender 사용 2월 18일 표기 */}
          </div>
        </div>
        <div>
          <p>결혼식 시작까지</p>
          {/* count-it-down 사용 2월 18일 오후 12시 30분 표기*/}
        </div>
      </div>
    </section>
  );
}

export default WeddingDay;
