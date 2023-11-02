import React, { useEffect } from 'react';
import { adjustSvgForMobile } from './helpers';
import './App.css';

function App() {
  useEffect(() => {
    adjustSvgForMobile();
    window.addEventListener('resize', adjustSvgForMobile);
    return () => window.removeEventListener('resize', adjustSvgForMobile);
  }, []);
  
  return (
    <div className='_carousel'>
    <div className="App">
      <header className="App-header">
      <div className="logo" ></div>
      
      <svg id="welcome-svg"  preserveAspectRatio="xMidYMid meet">
        <text x="50%" y="50%" text-anchor="middle">
        Welcome to BOOST My Business Agency
        </text>
      </svg>
        <h2 className='description'>We will take care of your online brand from A to Z.</h2>
      </header>

      <section className="App-section">Create Your Online Logo Brand</section>

      <section className="App-section">Create Your Own Website</section>

      <section className="App-section">Create Your Social Media</section>

      <section className="App-section">Create Your Google Business Account</section>

      <section className="App-section">Online Advertising</section>
      
      <footer className="App-footer">Footer </footer>
    </div>
    </div>
  );
}


export default App;

