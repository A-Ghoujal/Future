import React, { useEffect } from "react";
import { adjustSvgForMobile } from "./helpers";
import "./App.css";

function App() {
  useEffect(() => {
    adjustSvgForMobile();
    window.addEventListener("resize", adjustSvgForMobile);
    return () => window.removeEventListener("resize", adjustSvgForMobile);
  }, []);

  return (
    <div className="_carousel">
      <header className="App-header">
        <div transition-style="in:custom:swoopy">
          <div className="logo"></div>
          <svg id="welcome-svg" preserveAspectRatio="xMidYMid meet">
            <text x="50%" y="50%" text-anchor="middle">
              Welcome to BOOST My Business Agency
            </text>
          </svg>
          <div className="arrows">
            <div className="indicator">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </header>
      <section className="App-section">
      <div className="sectionh2">
  <h3 className="h2section">Here you can take a quick look</h3>
</div>
      <div className="card">
      <p>
        <span>Logo</span>
        <div className="description">Description for Logo</div>
      </p>
      <p>
        <span>Website</span>
        <div className="description">Description for Website</div>
      </p>
      <p>
        <span>Social Media</span>
        <div className="description">Description for Social Media</div>
      </p>
      <p>
        <span>GBA</span>
        <div className="description">Description for Google Business Account</div>
      </p>
      <p>
        <span>Ads</span>
        <div className="description">Description for Ads</div>
      </p>
    </div>
      </section>

      <section className="App-section">Create Your Online Logo Brand</section>
      <section className="App-section">Create Your Own Website</section>
      <section className="App-section">Create Your Social Media</section>
      <section className="App-section"> Create Your Google Business Account</section>
      <section className="App-section">Online Advertising</section>
      <footer className="App-footer">Footer </footer>
    </div>
  );
}

export default App;
