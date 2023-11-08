import React, { useEffect } from "react";
import { adjustSvgForMobile } from "./helpers";
import "./App.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Parallax, Pagination, Navigation } from 'swiper/modules';

function App() {
  useEffect(() => {
    adjustSvgForMobile();
    window.addEventListener("resize", adjustSvgForMobile);
    return () => window.removeEventListener("resize", adjustSvgForMobile);
  }, []);

  return (
    // section 1
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

      {/* section 2 */}
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
            <div className="description">
              Description for Google Business Account
            </div>
          </p>
          <p>
            <span>Ads</span>
            <div className="description">Description for Ads</div>
          </p>
        </div>
      </section>

      {/* section 3  */}
      <section className="App-section">
          <h3 className="h3section">Create Your Online Logo Brand</h3>
          <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        
       
        <SwiperSlide>
          <div className="logo-container">
          <div className="background_logo_img1"></div>
          <div className="title" data-swiper-parallax="-300">
          First Impressions Count
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p className="p_logo">
             Make every introduction memorable.
             Your logo is often the first point of interaction with your audience. We ensure it’s impactful,
              making a lasting impression and fostering brand recognition.
            </p>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="logo-container">
          <div className="background_logo_img2"></div>
          <div className="title" data-swiper-parallax="-300">
          Investment in Success
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p className="p_logo">
             A logo is an investment, not an expense. It can elevate your credibility,
             enhance your customer's trust,
             and ultimately contribute to your business's bottom line.
            </p>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="logo-container">
          <div className="background_logo_img3"></div>
          <div className="title" data-swiper-parallax="-300">
          Your Satisfaction Our Commitment
          </div>
          
          <div className="text" data-swiper-parallax="-100">
            <p className="p_logo">
            We're not happy until you're thrilled.
             Your satisfaction drives us,
             and we're committed to delivering a logo that you're proud to showcase.
            </p>
          </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
       
      </section>
      
      {/* section 4 */}
      <section className="App-section">Create Your Own Website</section>
      <section className="App-section">Create Your Social Media</section>
      <section className="App-section">Create Your Google Business Account</section>
      <section className="App-section">Online Advertising</section>
      <footer className="App-footer">Footer </footer>
    </div>
  );
}

export default App;
