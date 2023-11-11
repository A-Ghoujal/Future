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
  const images = [
    './assets/11.PNG',
    './assets/22.PNG',
    './assets/44.PNG',
    './assets/55.PNG',
    './assets/66.PNG',
    './assets/77.PNG',
    './assets/88.PNG',
    './assets/99.PNG',
    './assets/00.PNG',
  ];
  const galleryItems = images.concat(images).map((image, index) => (
    <div className="gallery-item" key={index}>
      <img src={image} alt={`Gallery item ${index + 1}`} />
    </div>
    ));
   
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
          <h3 className="h2section">Here Are The 5 Steps For Your Online Branding</h3>
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
      <section className="App-section">
      <div className="app-website">
  <div className="gallery">
    <div className="gallery-inner">{galleryItems}</div>
  </div>
  <div className="title_create_website">
    <h1 className="title_create_website_">Create Your Own Website</h1>
    <p className="title_create_website__">
      Expand your business horizons with your own website!
      It's the key to unlocking a global audience, available 24/7,
      and it simplifies customer engagement. In the digital era,
      a website is your business's beacon, guiding customers right to your doorstep.
      Embrace the power of the web and watch your business soar!
    </p>
  </div>
  <div className="gallery_right">
    <div className="gallery-inner_right">{galleryItems}</div>
  </div>
</div>
      </section>

       {/* section 5 */}
      <section className="App-section">
      <div className="app-socials">

      <div className="container_socials">
      <div className="content-block_socials image-left">
  <div className="image_socials"><img className="image_socials_logo" src="/assets/3d1.png" alt="TikTok Logo" /></div>
  <div className="text_socials">
    "Leverage TikTok's viral potential to showcase your products in creative short videos. Its algorithm can propel your content to a wide audience."
  </div>
</div>
<div className="content-block_socials image-right">
  <div className="text_socials">
    "Utilize Facebook's vast user base to target potential customers effectively. Through Facebook ads and community engagement, you can create a loyal customer base."
  </div>
  <div className="image_socials"><img className="image_socials_logo" src="/assets/3d2.PNG" alt="Facebook Logo" /></div>
</div>
<div className="content-block_socials image-left">
  <div className="image_socials"><img className="image_socials_logo" src="/assets/3d3.png" alt="Instagram Logo" /></div>
  <div className="text_socials">
    "Instagram's visually-driven platform is perfect for highlighting your products with high-quality images and stories. Engage with your audience through influencers."
  </div>
</div>

</div>


        </div>
        </section>


      <section className="App-section">Create Your Google Business Account</section>
      <section className="App-section">Online Advertising</section>
      <footer className="App-footer">Footer </footer>
    </div>
  );
}

export default App;
