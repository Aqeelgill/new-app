import React, { useState } from "react";
import { TiChevronRightOutline } from "react-icons/ti";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import HeaderSection from "../../components/HeaderSection";
import "./Contact.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("📩 Server Response:", data);

      if (response.ok) {
        alert("Form submitted successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Error submitting form");
      }
    } catch (error) {
      console.error("❌ API Request Failed:", error);
    }
  };
  return (
    <>
      <HeaderSection
        title="Meet the Mind Behind the Work"
        subtitle="Turning Ideas into Reality!"
      />
      <div className="contact-container">
        <h1>
          Contact<span> Me</span>
        </h1>
        <form onSubmit={handleSubmit} className="contact-left">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="contact-inputs"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="contact-inputs"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="contact-inputs"
          />
          <button type="submit" className="submit">
            Submit
          </button>
        </form>

        <div className="contact-sci">
          <a href="https://web.facebook.com/ratedadorable">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/irajexhkumar/">
            <FaInstagram />
          </a>
          <a href="https://twitter.com/RajexhKumar">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/in/rajexhkumar/">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
