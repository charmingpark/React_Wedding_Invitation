import DDay from '../../components/DDay.js';
import Calendar from '../../components/Calendar.js';
import { forwardRef } from 'react';

const WeddingDay = forwardRef((props, ref) => {
  return (
    <section className="weddingDay atm" id="weddingDay"  ref={(inputEl) => (ref.current[ref.current.length] = inputEl)}>
      <div className="dayInner">
        <div className="secTitleWrap">
          <h2 className="hanTit ranTxt top">초대합니다</h2>
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
            <Calendar month={1} year={2023} />
            <DDay eventDate="2023-02-18 12:00:00" />
          </div>
        </div>
        <div>
          <p>결혼식 시작까지</p>

          {/* count-it-down 사용 2월 18일 오후 12시 30분 표기*/}
        </div>
      </div>
    </section>
  );
});  //함수 닫는 괄호 잊지 마세요!

WeddingDay.displayName = 'WeddingDay';

export default WeddingDay;
