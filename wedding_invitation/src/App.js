import './reset.css';
import './App.css';
import SkipNav from './pages/SkipNav';
import Wrap from './pages/Wrap';
import PopGnb from './pages/PopGnb';
import PopImg from './pages/PopImg';

function App() {
  return (
    <div className="App">
      <SkipNav />
      <Wrap />
      <PopGnb />
      <PopImg />
    </div>
  );
}

export default App;
