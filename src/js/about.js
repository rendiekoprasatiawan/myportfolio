import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const AboutMe = () => {
  const [state] = React.useState({
    subHeading: "Introduction",
    text1: "Hello! Welcome to my Website.",
    text2:
      "I have a bachelor's degree in Computer Science Department at the University of Lampung. Honestly, I started interest of technologies before I earned my bachelor's degree. And looking beyond the research within Computer Science I found that Information Technology Support and Web Programming is very interesting and so challenging. Then I decided to pursuit the most advanced method out there; Information Technology Support and Web Programming. I also like to learn and keep myself regularly informed of news, especially in the technological field.",
    text3:
      "Tap on the links below to connect with me on social media. Continue on this website to learn more about me.",
  });

  return (
    <div id="about" className="container-fluid">
      <div className="container heading1  animate__animated animate__fadeInDown animate__delay-1s">
        <div className="pt-3 py-2 text-center">
          <h1 className="text-dark">{state.subHeading}</h1>
        </div>
      </div>

      <div className="container mt-5 pt-lg-3 about">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <p className="new-line text-dark text-justify animate__animated animate__fadeInDown animate__delay-2s">
              {state.text1}
            </p>
            <p className="new-line text-dark text-justify animate__animated animate__fadeInDown animate__delay-2s">
              {state.text2}
            </p>
            <p className="new-line text-dark text-justify animate__animated animate__fadeInDown animate__delay-2s">
              {state.text3}
            </p>
            <ul className="social animate__animated animate__fadeInDown animate__delay-2s">
              <li>
                <a
                  target="_blank"
                  className="icon-social"
                  rel="noopener noreferrer"
                  href="https://twitter.com/rendiekoprstwn"
                >
                  <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon> Twitter
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  className="icon-social"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/rendiekoprasatiawan/"
                >
                  <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon> LinkedIn
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-social"
                  href="https://www.instagram.com/rendiekoprasatiawan"
                >
                  <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>{" "}
                  Instagram
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-social"
                  href="https://wa.me/6281367682868"
                >
                  <FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon> Whatsapp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
