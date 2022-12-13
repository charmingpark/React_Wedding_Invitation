// import PopGnb from "../pages/PopGnb";

function Header() {
  return (
    <>
      {/* <!-- head --> */}
      <header className="head">
        <div className="inner">
          <div className="h1Wrap">
            <h1>{/* <a href="#">CHAN MIN &amp; DONG JIN</a> */}</h1>
          </div>
          <div className="btnMenu">
            {/* <a href="#">메뉴열기</a> */}
            {/* <PopGnb/> */}
            {/* TODO: 버튼을 누르면 PopGnb를 띄워준다. */}
          </div>
        </div>
      </header>
      {/* <!-- //head --> */}
    </>
  );
}

export default Header;
