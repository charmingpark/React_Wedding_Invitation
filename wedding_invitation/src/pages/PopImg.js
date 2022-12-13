function PopImg() {
  const imgPopClose = () => {
    console.log(`something2`);
  };
  return (
    <div className="PopImg">
      <div className="in">
        <div className="imageContainer">
          <img src="" alt="" className="zoomImg" />
          {/* props로 받은 이미지파일 경로.jpg */}
        </div>
      </div>
      {/* <button className="btnDownload" download="">다운로드</button> */}
      {/* 누르면, 이미지가 다운로드 되는 버튼이 있었음. --> 굳이? */}
      <button type="button" className="btnClose" onClick={imgPopClose}>
        닫기
      </button>
    </div>
  );
}

export default PopImg;
