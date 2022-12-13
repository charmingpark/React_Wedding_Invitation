import MainVisual from './containers/MainVisual';
import Greeting from './containers/Greeting';
import AboutUs from './containers/AboutUs.js';
import WeddingDay from './containers/WeddingDay.js';
import Gallery from './containers/Gallery.js';
import Location from './containers/Location.js';
import Credit from './containers/Credit.js';

function Container() {
  return (
    <div id="Container">
      <MainVisual />
      <Greeting />
      <AboutUs />
      <WeddingDay />
      <Gallery />
      <Location />
      <Credit />
    </div>
  );
}

export default Container;