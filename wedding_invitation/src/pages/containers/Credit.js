import { useState } from 'react';
import { CreditStyle } from './Credit.style.js';
import Kakaolink from '../../components/Kakaolink.js';

function Credit() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };

  const handlePopupOpen = () => {
    setIsPopupOpen(true);
  };

  return (
    <section
      className="creditWrap"
      id="creditWrap"
      // ref={(inputEl) => (ref.current[ref.current.length] = inputEl)}
    >
      <CreditStyle>
        <div className="thanksInner secTitleWrap">
          {isPopupOpen && <Popup onClose={handlePopupClose} />}
          <h2 className="hanTit ranTxt top">감사인사</h2>
          <p>모두에게 감사합니다.</p>
          <div className="textBox">
            <p>
              {/* style="white-space: pre-line;" */}
              함께 노력해 청첩장 사이트를
              <br />
              완성해 준 친구들과
              <div className="addHeight" />
              언제나 곁을 따뜻하게
              <br />
              지켜주신 부모님과
              <div className="addHeight" />
              사랑으로 응원해 주신
              <br />
              모든 분들께 감사드립니다.
              <br />
            </p>
          </div>
          <button
            className="creater popupBtn"
            onClick={() => handlePopupOpen()}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handlePopupOpen();
              }
            }}
          >
            제작에 기여한 사람들
          </button>
          <Kakaolink />
        </div>
      </CreditStyle>
    </section>
  );
}

const Popup = ({ onClose }) => (
  <div className="popup-overlay">
    <div className="popup">
      <div>
        <h2 className="createdBy">제작에 기여한 사람들</h2>
        <ul className="addr">
          <li>
            <h3>
              <b>박찬민</b>
              <a className="addrCopy" href="https://github.com/charmingpark">
                GitHub
                <br />
                바로가기
              </a>
            </h3>
            <div>
              기획, 디자인, 코딩 총괄
              <br /> 이 결혼식의 신부
            </div>
          </li>
          <li>
            <h3>
              <b>이유진</b>
              <a className="addrCopy" href="https://github.com/nuuco">
                GitHub
                <br />
                바로가기
              </a>
            </h3>
            <div>코딩 도와준 친구</div>
          </li>
          <li>
            <h3>
              <b>고혜준</b>
            </h3>
            <div>디자인 도와준 친구</div>
          </li>
        </ul>
        <p className="thankyou">
          여러분과 함께 해서
          <br />
          끝까지 완성할 수 있었습니다.
        </p>
      </div>
      <button className="close-button" onClick={onClose}>
        Close
      </button>
    </div>
  </div>
);

export default Credit;
