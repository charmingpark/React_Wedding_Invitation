function Credit() {
  return (
    <section className="creditWrap" id="creditWrap">
      <div className="thanksInner secTitleWrap">
        <h2 className="hanTit ranTxt top">감사인사</h2>
        <p>모두에게 감사합니다.</p>
        <div className="textBox">
          <p className="mt">
            {/* style="white-space: pre-line;" */}
            함께 노력해 청첩장 사이트를
            <br />
            완성해 준 친구들과
            <br />
            <br />
            언제나 곁을 따뜻하게
            <br />
            지켜주신 부모님과
            <br />
            <br />
            사랑으로 응원해 주신
            <br />
            모든 분들께 감사드립니다.
            <br />
          </p>
        </div>
        <button>만든 사람들</button>
        <button>깃허브 바로가기</button>
      </div>
    </section>
  );
}

export default Credit;
