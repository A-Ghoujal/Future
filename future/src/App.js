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
          <p className="logo-background_one">
            <span>Logo</span>
            <div className="description">A logo is vital for a store brand as it creates a memorable first impression,
             symbolizes the store's identity, and enhances brand recognition. It builds trust,
              signifies professionalism, and ensures consistency across marketing platforms.
               Essentially, a logo is more than just an image,
             it's a key element that communicates the essence and values of a brand to customers.</div>
          </p>
          <p className="logo-background_two">
            <span>Website</span>
            <div className="description">Expand your business horizons with your own website! It's the key to unlocking a global audience,
             available 24/7, and it simplifies customer engagement. In the digital era, 
             a website is your business's beacon, guiding customers right to your doorstep.
              Embrace the power of the web and watch your business soar!</div>
          </p>
          <p className="logo-background_three">
            <span>Social Media</span>
            <div className="description">Social media accounts are crucial for businesses, 
            offering a platform for direct customer engagement, brand promotion, and market insight.
             They enable real-time communication, foster brand identity, and provide valuable analytics.
              In today's digital era, social media presence is key to enhancing customer relationships and driving business growth.</div>
          </p>
          <p className="logo-background_four">
            <span>GBA</span>
            <div className="description">
            Having a Google Business account is crucial for enhancing a store or business's online visibility and local search presence.
             It offers an effective way to display key information, manage customer reviews,
             and gain insights into customer behavior, playing a significant role in boosting credibility and customer engagement.
            </div>
          </p>
          <p className="logo-background_five">
            <span>Ads</span>
            <div className="description">Advertising is key for businesses, enhancing brand visibility, reaching new customers, and driving sales.
             It's essential for market differentiation and long-term success, making it a fundamental component of business growth.</div>
          </p>
        </div>
      </section>

      {/* section 3  */}
      <section className="App-section">
          <h3 className="h3section">Online Logo Brand</h3>
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
    <h1 className="title_create_website_">Your Own Website</h1>
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


      <section className="App-section">
        <div className="google_section">
          <div className="gba_title">
            .Google<br></br>..Business<br></br>....Account
            </div>
            <Swiper
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper_google"
      >
        <SwiperSlide className="google_slide"><div className="background_google_img1"></div></SwiperSlide>
        <SwiperSlide className="google_slide"><div className="background_google_img2"></div></SwiperSlide>
        <SwiperSlide className="google_slide"><div className="background_google_img3"></div></SwiperSlide>
        <SwiperSlide className="google_slide"><div className="background_google_img4"></div></SwiperSlide>
      </Swiper>
        </div>
        
        </section>


      <section className="App-section">Online Advertising</section>
      <footer className="App-footer">Footer </footer>
    </div>
  );
}

export default App;
