// import Header from './../components/Header.js';
// import QuickMenu from './../components/QuickMenu.js';
import Container from './Container.js';

function Wrap({ thefirstPage }) {
  return (
    <div className="Wrap">
      {/* <Header /> */}
      {/* <QuickMenu /> */}
      <Container thefirstPage={thefirstPage} />
    </div>
  );
}

export default Wrap;
