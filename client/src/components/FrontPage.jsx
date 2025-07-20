import React ,{useContext}from 'react';
import { useEffect } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLocationArrow, FaEnvelope, FaPhone, FaClock, FaGlobe } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Mstyle.css';
import { useNavigate } from 'react-router-dom';
import { AppContent } from '../context/AppContext';
import {toast} from 'react-toastify'
import axios from 'axios'



const OpponixPage = () => {

   useEffect(() => {
        document.body.id = "home";
        return () => {
            document.body.id = "";
        };
    }, []);
const navigate = useNavigate();

 

const { userData, backendUrl, setUserData, setIsLoggedin } = useContext(AppContent);
const userId = userData?._id; 

const sendVerificationOtp = async () => {
 
  try {
      axios.defaults.withCredentials = true;   

     const { data } = await axios.post(
      `${backendUrl}/api/auth/send-verify-otp`,
      {userId });
      
 
  } catch (error) {
    console.log(userId)
    console.error("OTP Error:", error); // Log full error
    toast.error(error.response?.data?.message || "Failed to send OTP");
  }
};

  const logout = async () => {
    try {
      axios.defaults.withCredentials = true;
      
      const { data } = await axios.post(backendUrl + '/api/auth/logout');
      if (data.success) {
        setIsLoggedin(false);
        setUserData(null);
        navigate('/');
        toast.success("Logged out successfully");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const testimonials = [
    {
      name: "Mathalin",
      text: "Opponix transformed the way I learn debate! The mock rounds, quizzes, and instant AI feedback helped me go from nervous speaker to confident debater.",
      image: "/images/women1.jpg"
    },
    {
      name: "Marthal",
      text: "This platform makes debate feel like a fun game. I love the mini-challenges and point system. I never thought learning debating could be this interactive!",
      image: "/images/women2.jpg"
    },
    {
      name: "Matohn",
      text: "As a beginner, I struggled with argument structure. Opponix gave me a step-by-step breakdown and real practice. Now I've won my first interschool debate!",
      image: "/images/men1.jpg"
    },
    {
      name: "Mathew John",
      text: "Loved the courses. The interactive game made learning more interesting and fun!",
      image: "/images/women3.jpg"
    }
  ];

  return (
    <div className="app">
      {/* Navbar */}
      <header>
      <nav className="navbar section-content">
        <a href="/" className="nav-logo">
          <h2 className="logo-text">Opponix</h2>
        </a>
        <ul className="nav-menu">
          <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
          <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
          <li className="nav-item"><a href="#modules" className="nav-link">Modules</a></li>
          <li className="nav-item"><a href="#testimonials" className="nav-link">Testimonials</a></li>
          <li className="nav-item"><a href="#games" className="nav-link">Games</a></li>
          <li className="nav-item"><a href="#contact" className="nav-link">Contact Us</a></li>
            {userData ? (
              <li className="nav-item user-profile">
                <div className="nav-link user-initial">
                  {userData.name[0].toUpperCase()}
                  <div className="submenu">
                    <ul>
                      {!userData.isAccountVerified && (
                        <li onClick={sendVerificationOtp}>Verify email</li>
                      )}
                      <li onClick={logout}>Logout</li>
                    </ul>
                  </div>
                </div>
              </li>
            ) : (
              <li className="nav-item">
                <button 
                  onClick={() => navigate('/login')} 
                  className="nav-link login-button"
                >
                  Login / Sign In
                </button>
              </li>
            )}
          </ul>
           
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section" id="home">
        <div className="section-content">
          <div className="hero-details">
            <h2 className="title">Best Debate Learning App</h2>
            <h3 className="subtitle">Make your day great with our special debate app!</h3>
            <p className="description">
              Welcome to Opponix, where brains and heart connects and speeches come into effect.
            </p>
            <div className="buttons">
              <a href="#" className="button join-session">Join Session</a>
              <a href="#" className="button contact-us">Contact Us</a>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <img src="/images/image.svg" width= "500px" height="500px" alt="Hero" className="hero-image" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" id="about">
        <div className="section-content">
          <div className="about-image-wrapper">
            <img src="/images/aboutus.png" alt="About" className="about-image" />
          </div>
          <div className="about-details">
            <h2 className="section-title">About Us</h2>
            <p className="text">
              The main aim and objective of Opponix is to provide users the real time experience and hands on experience about debates by implementing various fun games where users can relax, and enjoy their time.
            </p>
            <div className="social-link-list">
              <a href="#" className="social-link"><FaFacebook /></a>
              <a href="#" className="social-link"><FaInstagram /></a>
              <a href="#" className="social-link"><FaTwitter /></a>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="menu-section" id="modules">
        <h2 className="section-title">Modules</h2>
        <div className="section-content">
          <ul className="menu-list">
                    <li className="menu-item" onClick={()=> navigate('/model1')}>
                        <img src="/images/model1.jpg" alt="Module1" className="menu-image"/>
                        <h3 className="name">Module 1</h3>
                        <p className="text">Wide range of topics about debate has been covered in this module.</p>
                    </li>
                    <li className ="menu-item" onClick={()=> navigate('/model2')}>
                        <img src="/images/model2.png" alt="Module2" className="menu-image"/>
                        <h3 className="name">Module 2</h3>
                        <p className="text">Wide range of topics about debate has been covered in this module.</p>
                    </li>
                    <li className="menu-item"  onClick={()=> navigate('/model3')}>
                        <img src="/images/building.jpeg" alt="Module3" className="menu-image"/>
                        <h3 className="name">Module 3</h3>
                        <p className="text">Wide range of topics about debate has been covered in this module.</p>
                    </li>
                </ul>    
        </div>
      </section>
    
      {/*testimonals*/}
      <section className="testimonials-section" id="testimonials">
        <h2 className="section-title">Testimonials</h2>
        <div className="section-content">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination',
            }}
            loop={true}
            className="slider-container"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="testimonial">
                <img src={testimonial.image} alt="User" className="user-image" />
                <h3 className="name">{testimonial.name}</h3>
                <i className="feedback">"{testimonial.text}"</i>
              </SwiperSlide>
            ))}
            
            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </Swiper>
        </div>
      </section>

      {/* Games Section */}
<section className="gallery-section" id="games">
  <h2 className="section-title">Games</h2>
  <div className="section-content">
    <ul className="gallery-list">
      <li className="gallery-item"  onClick={() => navigate('/game1')} >
        <img src="/images/game1.jpg" alt="Game" className="gallery-image" />
        <h3  className="name" >Match Debate Terms to Definitions</h3>
      </li>
      <li className="gallery-item"  onClick={() => navigate('/game2')} >
        <img src="/images/game2.png" alt="Game" className="gallery-image" />
        <h3  className="name"> Debate Bingo</h3>
      </li>
      <li className="gallery-item"  onClick={() => navigate('/game3')} >
        <img src="/images/game3.png" alt="Game" className="gallery-image" />
        <h3  className="name">⚔ POI Dodge</h3>
      </li>
    </ul>
  </div>
</section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <h2 className="section-title">Contact Us</h2>
        <div className="section-content">
          <ul className="contact-info-list">
            <li className="contact-info">
              <FaLocationArrow />
              <p>123 Campsite Avenue, Wilderness, CA 98765</p>
            </li>
            <li className="contact-info">
              <FaEnvelope />
              <p>info@opponixwebsite.com</p>
            </li>
            <li className="contact-info">
              <FaPhone />
              <p>8969866365</p>
            </li>
            <li className="contact-info">
              <FaClock />
              <p>Monday - Friday: 9.00 AM - 5.00 PM</p>
            </li>
            <li className="contact-info">
              <FaClock />
              <p>Saturday: 10.00 AM - 3.00 PM</p>
            </li>
            <li className="contact-info">
              <FaClock />
              <p>Sunday: Closed</p>
            </li>
            <li className="contact-info">
              <FaGlobe />
              <p>www.opponix.com</p>
            </li>
          </ul>

          <form className="contact-form">
            <input type="text" placeholder="Your name" className="form-input" required />
            <input type="email" placeholder="Your email" className="form-input" required />
            <textarea placeholder="Your message" className="form-input" required></textarea>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-section">
        <div className="section-content">
          <p className="copyright-text">@ 2025 Opponix</p>
          <div className="social-link-list">
            <a href="#" className="social-link"><FaFacebook /></a>
            <a href="#" className="social-link"><FaInstagram /></a>
            <a href="#" className="social-link"><FaTwitter /></a>
          </div>
          <p className="policy-text">
            <a href="#" className="policy-link">Privacy policy</a>
            <span className="separator">:</span>
            <a href="#" className="policy-link">Refund policy</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default OpponixPage;