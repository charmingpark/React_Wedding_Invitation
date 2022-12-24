import SkipNav from './components/SkipNav';
import Wrap from './pages/Wrap';
import PopGnb from './pages/PopGnb';
import PopImg from './pages/PopImg';

import { AppStyle } from './App.style.js';

function App() {
  return (
    <AppStyle>
      <div className="App">
        <SkipNav />
        <Wrap />
        <PopGnb />
        <PopImg />
      </div>
    </AppStyle>
  );
}

export default App;
