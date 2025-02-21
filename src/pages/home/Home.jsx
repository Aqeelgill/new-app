import React from "react";
import { FaCheckCircle, FaHeadset, FaShippingFast } from "react-icons/fa";
import HeaderSection from "../../components/HeaderSection";
import growthHawksImg from "../../assets/images/growth hawks.png";
import "./Home.scss";

const Home = () => {
  return (
    <div>
      <HeaderSection
        title="Welcome to My Website"
        subtitle="Enjoy your experience!"
      />

      <section className="promise-section">
        <h1>
          I <span>Promise</span>
        </h1>
        <div className="promise-container">
          <div className="promise-card">
            <FaCheckCircle className="promise-icon" />
            <h3>Quality</h3>
            <p>Top-notch material</p>
          </div>
          <div className="promise-card">
            <FaHeadset className="promise-icon" />
            <h3>Support</h3>
            <p>Customer help</p>
          </div>
          <div className="promise-card">
            <FaShippingFast className="promise-icon" />
            <h3>Fast Delivery</h3>
            <p>Quick & reliable</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="portfolio-title">
          Latest<span> project</span>
        </h2>
        <div className="portfolio">
          <div className="main-text">
            <div className="portfolio-content">
              <div className="row">
                <img src={growthHawksImg} alt="Growth Hawks" />
                <div className="layer">
                  <h1>Motivational reel creating</h1>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
                    eius consectetur esse.
                  </p>

                  <a href="https://www.upwork.com/freelancers/rkumar">More</a>
                </div>
              </div>
              <div className="row">
                <img src={growthHawksImg} alt="Growth Hawks" />
                <div className="layer">
                  <h1>Rockstar Social Media</h1>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
                    eius consectetur esse.
                  </p>

                  <a href="https://www.upwork.com/freelancers/rkumar">More</a>
                </div>
              </div>
              <div className="row">
                <img src={growthHawksImg} alt="Growth Hawks" />
                <div className="layer">
                  <h1>Instagram Store Manager</h1>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
                    eius consectetur esse.
                  </p>

                  <a href="https://www.upwork.com/freelancers/rkumar">More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
