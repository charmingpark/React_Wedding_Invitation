import Header from './../components/Header.js';
import QuickMenu from './../components/QuickMenu.js';
import Container from './Container.js';

function Wrap() {
  return (
    <div className="Wrap">
      <Header />
      <QuickMenu />
      <Container />

      {/* iframe 을 사용해 음악을 멈출 경우, 처음부터 다시 틀기 위함 같음. */}
      {/* <iframe
        title="silence"
        className="silence"
        style="width: 1px; height: 1px"
        src="https://dddproject.com/html/images/silence.mp3"
        allow="autoplay"
      ></iframe> */}
    </div>
  );
}

export default Wrap;
