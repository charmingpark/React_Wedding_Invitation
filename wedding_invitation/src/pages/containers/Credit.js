import { forwardRef } from 'react';
import { CreditStyle } from './Credit.style.js';
import Kakaolink from '../../components/Kakaolink.js';

const Credit = forwardRef((props, ref) => {
  return (
    <section
      className="creditWrap"
      id="creditWrap"
      ref={(inputEl) => (ref.current[ref.current.length] = inputEl)}
    >
      <CreditStyle>
        <div className="thanksInner secTitleWrap">
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
          <button className="creater">제작한 사람</button>
          <Kakaolink />
        </div>
      </CreditStyle>
    </section>
  );
}); //함수 닫는 괄호 잊지 마세요!

Credit.displayName = 'Credit';

export default Credit;
