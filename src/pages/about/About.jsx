import React, { useEffect } from "react";
import Typed from "typed.js"; 
import HeaderSection from "../../components/HeaderSection";
import "./About.scss";

const About = () => {
  useEffect(() => {
    const typed = new Typed(".text", {
      strings: ["Frontend Developer.", "YouTuber", "Web Developer."],
      typeSpeed: 50,
      backSpeed: 50,
      loop: false, 
    });

    return () => {
      typed.destroy(); 
    };
  }, []);

  return (
    <div>
      <HeaderSection
        title="Meet the Mind Behind the Work"
        subtitle="Turning Ideas into Reality!"
      />
      <div className="about-container">
        <section className="about" id="home">
          <div className="about-content">
            <h2>Hello, It's Me</h2>
            <h1>Rajesh Kumar</h1>
            <h3>
              And I'm a <span className="text"></span>
            </h3>
            <p>
              I'm a Certified Social Media Manager
              <br />I would love to share MY knowledge with You
            </p>
            <a
              href="https://d1yei2z3i6k35z.cloudfront.net/3978491/655467d8b4221_Rajesh_Kumar_Portfolio-1.pdf"
              className="btn-box"
            >
              More About Me
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
