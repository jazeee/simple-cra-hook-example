import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [ isLogoVisible, setIsLogoVisible ] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => setIsLogoVisible(true), 2500);
    return () => clearTimeout(timeoutId);
  }, [isLogoVisible]);

  return (
    <div className="App">
      {isLogoVisible &&
        <img src={logo} className="App-logo" alt="logo" />
      }
      <button onClick={() => setIsLogoVisible(!isLogoVisible)}>
        Toggle {isLogoVisible ? "off" : "on"}
      </button>
    </div>
  );
}

export default App;
