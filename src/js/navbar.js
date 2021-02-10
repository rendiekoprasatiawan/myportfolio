import logo from "../icons/renkopras.png";
import menu from "../icons/menu.png";
import Typed from "react-typed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGitlab } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <div id="wrapper" className="container-fluid">
      <div className="row marNav justify-content-center">
        <div className="col-12 mb-5">
          <nav className="navbar navbar-expand-lg fixed-top">
            <a
              className="navbar-brand"
              href="https://rendiekoprasatiawan.github.io/myportfolio"
            >
              <img
                width="100"
                height="100"
                src={logo}
                alt="rendiekoprasatiawan.png"
                className="img-fluid"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <img
                src={menu}
                className="img-fluid"
                width="23"
                height="23"
                alt="logo"
              />
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <ul className="navbar-nav text-lg-center">
                <li className="nav-item active">
                  <a className="nav-item" href="#home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-item" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#education">
                    Education
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#skills">
                    Skills
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#projects">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#footer">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>

      <div className="col-12 text-center mt-5">
        <div className="text-center">
          <p
            id="spin"
            className="animate__animated animate__fadeInDown animate__delay-1s"
          ></p>
        </div>
      </div>
      <div className="col-12 text-center mt-2">
        <div className="text-center">
          <p className="name animate__animated animate__fadeInDown animate__delay-2s">
            I am Rendi Eko Prasatiawan.
          </p>
        </div>
      </div>
      <div className="col-12 text-center mt-2">
        <div className="text-center">
          <p className="profession animate__animated animate__fadeInDown animate__delay-3s">
            <Typed
              className="typed-text"
              strings={[
                "Leadership",
                "Content Researcher",
                "Web Designer",
                "Photo Editor",
                "Video Editor",
                "Blogger",
                "Front-End Web Developer",
                "Back-End Web Developer",
                "Full Stack Web Developer",
                "Mobile Programmer",
              ]}
              typeSpeed={40}
              backSpeed={60}
              loop
            />
          </p>
        </div>
      </div>
      <div className="col-12 text-center mt-2 socAnimate">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-8 text-center mt-4 socials animate__animated animate__fadeInDown animate__delay-4s">
              <div className="row my-5">
                <div className="col-4 col-lg-2 mt-5 mb-lg-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-social"
                    href="https://github.com/rendiekoprasatiawan"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="mr-2"
                    ></FontAwesomeIcon>
                  </a>
                </div>
                <div className="col-4 col-lg-2 mt-5 mb-lg-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-social"
                    href="https://gitlab.com/rendiekoprasatiawan"
                  >
                    <FontAwesomeIcon
                      icon={faGitlab}
                      className="mr-2"
                    ></FontAwesomeIcon>
                  </a>
                </div>
                <div className="col-4 col-lg-2 mt-5 mb-lg-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-social"
                    href="https://twitter.com/rendiekoprstwn"
                  >
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="mr-2"
                    ></FontAwesomeIcon>
                  </a>
                </div>
                <div className="col-4 col-lg-2 mt-5 mb-lg-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-social"
                    href="https://www.linkedin.com/checkpoint/challengesV2/AQFFg9fohxJBTAAAAXd7rn7zDuPOcfShYpZgU3plcZW5jKhEd5dT_xD33uFdSo4gE262B0K6129QtgoDTZ8qQyXBwZWjFo33Uw"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="mr-2"
                    ></FontAwesomeIcon>
                  </a>
                </div>
                <div className="col-4 col-lg-2 mt-5 mb-lg-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-social"
                    href="https://web.facebook.com/rendiekoprasatiawan"
                  >
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="mr-2"
                    ></FontAwesomeIcon>
                  </a>
                </div>
                <div className="col-4 col-lg-2 mt-5 mb-lg-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-social"
                    href="https://www.instagram.com/rendiekoprasatiawan"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="mr-2"
                    ></FontAwesomeIcon>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
