import React, { useState, useEffect } from 'react'; // eslint-disable-line no-unused-vars
import SkipNav from './components/SkipNav';
import Wrap from './pages/Wrap';
import PopGnb from './pages/PopGnb';
import PopImg from './pages/PopImg';
import Loading from './pages/Loading';
import thefirstPage from './images/thefirstPage.png';

// import './Sakura.css';
// import './Sakura.js';
import { AppStyle } from './App.style.js';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const image = new window.Image();
    image.src = thefirstPage;
    image.onload = () => setIsLoaded(true);
    image.onerror = () => setIsLoaded(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, [thefirstPage]);

  if (!isLoaded || isLoading) {
    return <Loading />;
  }

  return (
    <AppStyle>
      <div className="App">
        <SkipNav />
        <Wrap thefirstPage={thefirstPage} />
        <PopGnb />
        <PopImg />
      </div>
    </AppStyle>
  );
}

export default App;
