import React, { useState, useEffect } from 'react'; // eslint-disable-line no-unused-vars
import SkipNav from './components/SkipNav';
import Wrap from './pages/Wrap';
import PopGnb from './pages/PopGnb';
import PopImg from './pages/PopImg';
import Loading from './pages/Loading';

// import './Sakura.css';
// import './Sakura.js';
import { AppStyle } from './App.style.js';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // simulate a long-running task
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <Loading />;
  }
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
