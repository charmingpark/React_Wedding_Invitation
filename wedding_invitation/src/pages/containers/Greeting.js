import { GreetingStyle } from './Greeting.style.js';
import { forwardRef } from 'react';

const Greeting = forwardRef((props, ref) => {
  return (
    <section
      className="greetingWrap atm"
      id="greetingWrap"
      ref={(inputEl) => (ref.current[ref.current.length] = inputEl)}
    >
      <GreetingStyle>
        <div className="secTitleWrap">
          <h2 className="hanTit ranTxt top">인사말</h2>
          <p className="mt">소중한 분들을 초대합니다.</p>
        </div>
        <div className="greetingBox">
          <div className="greetingInner">
            <div className="textBox mt">
              <p className="wrapPre">
                하나님의 사랑으로 만난 두 사람이
                <br />
                이제 함께 가정을 이루는
                <br />
                아름다운 약속을 하려 합니다.
                <br />
                <br />
                언제나 아름답고 주위에 사랑을 나누는
                <br />
                행복한 가정을 이루도록
                <br />
                모두 함께 축복해 주세요.
              </p>
              <p className="from dotted-spaced">
                <b>김의홍</b> · <b>한옥화</b>의 장남<em>김동진</em>
                <br />
                <b>박춘서</b> · <b>오치림</b>의 장녀<em>박찬민</em>
              </p>
            </div>
          </div>
        </div>
      </GreetingStyle>
    </section>
  );
}); //함수 닫는 괄호 잊지 마세요!

Greeting.displayName = 'Greeting';

export default Greeting;
