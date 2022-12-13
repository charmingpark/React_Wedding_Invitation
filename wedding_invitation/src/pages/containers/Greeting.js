function Greeting() {
  return (
    <section className="greetingWrap atm" id="greetingWrap">
      <div className="secTitleWrap">
        <h2 className="hanTit ranTxt">인사말</h2>
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
              언제나 아름답고 주위에 사랑을 나누는
              <br />
              행복한 가정을 이루도록
              <br />
              모두 함께 축복해 주세요.
            </p>
            <p className="from">동진 & 찬민 올림</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Greeting;
