import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <div id="footer">
      <div className="container animate__animated animate__fadeInDown animate__delay-2s">
        <div className="row">
          <div className="col-lg p-lg-0">
            <ul className="list-unstyled">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#education">Education</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#footer">Contact</a>
              </li>
            </ul>
          </div>

          <div className="col-lg p-lg-0">
            <div className="svg-group logo">
              <a href="https://rendiekoprasatiawan.github.io/myportfolio">
                RenkoPras
              </a>
            </div>
            <ul className="list-unstyled">
              <a
                target="_blank"
                className="icon-social"
                rel="noopener noreferrer"
                href="https://twitter.com/rendiekoprstwn"
              >
                <FontAwesomeIcon icon={faTwitter} size="2x"></FontAwesomeIcon>
              </a>

              <a
                target="_blank"
                rel="noopener noreferrer"
                className="icon-social"
                href="https://www.instagram.com/rendiekoprasatiawan"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x"></FontAwesomeIcon>
              </a>

              <a
                target="_blank"
                rel="noopener noreferrer"
                className="icon-social"
                href="https://wa.me/6281367682868"
              >
                <FontAwesomeIcon icon={faWhatsapp} size="2x"></FontAwesomeIcon>
              </a>
            </ul>
          </div>

          <div className="col-lg p-lg-0 pt-3">
            <small>You want to contact me?</small>
            <form>
              <div className="form-group">
                <div className="row">
                  <div className="col-10 pr-0">
                    <input
                      className="form-control btn-dark"
                      type="email"
                      disabled
                      placeholder="rendiekoprasatiawan99@gmail.com"
                    ></input>
                  </div>
                  <a
                    href="mailto:rendiekoprasatiawan99@gmail.com"
                    className="btn btn-light btn-join text-black-50"
                  >
                    Me!
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="text-center copy">
          <p>RenkoPras &copy; all right reserved. </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
