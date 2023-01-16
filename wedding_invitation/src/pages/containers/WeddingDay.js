import DDay from '../../components/DDay.js';
import Calendar from '../../components/Calendar.js';
import { WeddingDayStyle } from './WeddingDay.style.js';

function WeddingDay() {
  return (
    <section className="weddingDay atm" id="weddingDay">
      <WeddingDayStyle>
        <div className="secTitleWrap">
          <h2 className="hanTit ranTxt top">초대합니다</h2>
        </div>
        <div className="secTitleWrap">
          {/* mt, mt2는 transition-delay 속성과 연관됨.(800) */}
          <p className="mt place">
            2023년 2월 18일 토요일
            <br />
            낮 12시 30분
            <br />
            양재 영일교회 본당
          </p>
        </div>
        <div className="mt2">
          <div className="calender calWrap">
            <Calendar month={1} year={2023} />
          </div>
          <DDay year={2023} month={2} day={18} />
        </div>
        <div>
          {/* <p>결혼식 시작까지</p> */}
          {/* count-it-down 사용 2월 18일 오후 12시 30분 표기*/}
        </div>
      </WeddingDayStyle>
    </section>
  );
}

export default WeddingDay;
