import { LocationStyle } from './Location.style.js';
// import KakaoMap from '../../components/KakaoMap.js';
import Clipboard from 'clipboard';

import { forwardRef } from 'react';

const Location = forwardRef((props, ref) => {
  const clipboard = new Clipboard('.addrCopy');
  clipboard.on('success', function (e) {
    console.log('Action:', e.action);
    console.log('Text:', e.text);
    console.log('Trigger:', e.trigger);

    e.clearSelection();
  });

  clipboard.on('error', function (e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
  });
  return (
    <section
      className="locationWrap atm"
      id="locationWrap"
      ref={(inputEl) => (ref.current[ref.current.length] = inputEl)}
    >
      <LocationStyle>
        <div className="locationInner">
          <div className="secTitleWrap t1">
            <h2 className="hanTit ranTxt top">오시는 길</h2>
          </div>

          {/* <!-- mapWrap 카카오지도 --> */}
          <div className="mapWrap">
            <ul className="addr">
              <li>
                <h3>
                  <b>영일교회</b>
                  <button
                    className="addrCopy"
                    data-clipboard-text="서울 서초구 바우뫼로41길 67 영일교회"
                  >
                    예식장
                    <br />
                    주소 복사
                  </button>
                </h3>
                <p>서울 서초구 바우뫼로41길 67 </p>
              </li>
              <li>
                <h3>
                  <b>성문주차장</b>
                  <button
                    className="addrCopy"
                    data-clipboard-text="서울 서초구 남부순환로 2636 성문주차장"
                  >
                    주차장
                    <br />
                    주소 복사
                  </button>
                </h3>
                <p>서울 서초구 남부순환로 2636</p>
              </li>
            </ul>
            {/* <KakaoMap /> */}
            {/* <!-- //mapWrap --> */}
          </div>
        </div>
      </LocationStyle>
    </section>
  );
}); //함수 닫는 괄호 잊지 마세요!

Location.displayName = 'Location';

export default Location;
