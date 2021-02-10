import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLanguage,
  faLaptopCode,
  faToolbox,
  faTools,
} from "@fortawesome/free-solid-svg-icons";
import { MdDeveloperMode } from "react-icons/md";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  const [state] = React.useState({
    subHeading: "Skills",
  });

  return (
    <div id="skills" className="container-fluid">
      <div className="container skills heading1 animate__animated animate__fadeInDown animate__delay-1s">
        <div className="pt-3 py-2 text-center">
          <h1>{state.subHeading}</h1>
        </div>
      </div>

      <div className="container marSkill">
        <div className="row mt-5 pb-5">
          <div className="col-lg-4 py-2 animate__animated animate__fadeInDown animate__delay-2s">
            <div className="card h-100 skills-box">
              <div className="icon-bg-prog text-center py-1">
                <MdDeveloperMode size="2.4rem" />
              </div>
              <div className="card-body">
                <div className="card-title text-center">
                  Programming Languages
                </div>
                <div className="card-text text-center">
                  <span className="badge badge-pill badge-dark py-2 my-2 ml-2 mr-2">
                    Java
                  </span>
                  <span className="badge badge-pill badge-dark py-2 my-2 ml-2 mr-2">
                    Python
                  </span>
                  <span className="badge badge-pill badge-dark py-2 my-2 ml-2 mr-2">
                    C
                  </span>
                  <span className="badge badge-pill badge-dark py-2 my-2 mr-2">
                    C++
                  </span>
                  <span className="badge badge-pill badge-dark py-2 my-2 ml-2 mr-2">
                    Javascript
                  </span>
                  <span className="badge badge-pill badge-dark py-2 ml-2 my-1 mr-2">
                    TypeScript
                  </span>
                  <span className="badge badge-pill badge-dark py-2 my-2 ml-2 mr-2">
                    PHP
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 py-2 animate__animated animate__fadeInDown animate__delay-3s">
            <div className="card h-100 skills-box">
              <div className="icon-bg-web text-center py-1">
                <FontAwesomeIcon icon={faLaptopCode} size="2x" />
              </div>
              <div className="card-body">
                <div className="card-title text-center">
                  Website Technological Field
                </div>
                <div className="card-text text-center">
                  <span className="badge badge-pill badge-dark py-2 my-2 ml-2 mr-2">
                    HTML
                  </span>
                  <span className="badge badge-pill badge-dark py-2 my-2 ml-2 mr-2">
                    CSS
                  </span>
                  <span className="badge badge-pill badge-dark py-2 my-2 ml-2 mr-2">
                    ReactJS
                  </span>
                  <span className="badge badge-pill badge-dark py-2 my-2 mr-2">
                    NodeJS
                  </span>
                  <span className="badge badge-pill badge-dark py-2 my-2 ml-2 mr-2">
                    Bootstrap
                  </span>
                  <span className="badge badge-pill badge-dark py-2 ml-2 my-1 mr-2">
                    REST API
                  </span>
                  <span className="badge badge-pill badge-dark py-2 ml-2 my-1 mr-2">
                    ExpressJS
                  </span>
                  <span className="badge badge-pill badge-dark py-2 ml-2 my-1 mr-2">
                    Laravel
                  </span>
                  <span className="badge badge-pill badge-dark py-2 ml-2 my-1 mr-2">
                    CI
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 py-2 animate__animated animate__fadeInDown animate__delay-4s">
            <div className="card h-100 skills-box">
              <div className="icon-bg-data text-center py-1">
                <FontAwesomeIcon icon={faDatabase} size="2x" />
              </div>
              <div className="card-body">
                <div className="card-title text-center">Database</div>
                <div className="card-text text-center">
                  <span className="badge badge-pill badge-dark py-2 my-2 ml-2 mr-2">
                    RDBMS
                  </span>
                  <span className="badge badge-pill badge-dark py-2 my-2 ml-2 mr-2">
                    SQL
                  </span>
                  <span className="badge badge-pill badge-dark py-2 my-2 ml-2 mr-2">
                    DML
                  </span>
                  <span className="badge badge-pill badge-dark py-2 my-2 mr-2">
                    DDL
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 py-2 animate__animated animate__fadeInDown animate__delay-5s">
            <div className="card h-100 skills-box">
              <div className="icon-bg-tools text-center py-1">
                <FontAwesomeIcon icon={faToolbox} size="2x" />
              </div>
              <div className="card-body">
                <div className="card-title text-center">Editing Tools</div>
                <div className="card-text text-center">
                  <span className="badge badge-pill badge-dark py-2 my-2 ml-2 mr-2">
                    Adobe Photoshop
                  </span>
                  <span className="badge badge-pill badge-dark py-2 my-2 ml-2 mr-2">
                    Adobe Premire Pro
                  </span>
                  <span className="badge badge-pill badge-dark py-2 my-2 mr-2">
                    Adobe Audition
                  </span>
                  <span className="badge badge-pill badge-dark py-2 ml-2 my-1 mr-2">
                    Adobe AE
                  </span>
                  <span className="badge badge-pill badge-dark py-2 my-2 ml-2 mr-2">
                    Adobe XD
                  </span>
                  <span className="badge badge-pill badge-dark py-2 my-2 ml-2 mr-2">
                    VS-Code
                  </span>
                  <span className="badge badge-pill badge-dark py-2 my-2 ml-2 mr-2">
                    Virtualbox
                  </span>
                  <span className="badge badge-pill badge-dark py-2 my-2 ml-2 mr-2">
                    Github
                  </span>
                  <span className="badge badge-pill badge-dark py-2 my-2 ml-2 mr-2">
                    Android Studio
                  </span>
                  <span className="badge badge-pill badge-dark py-2 my-2 ml-2 mr-2">
                    Git Bash
                  </span>
                  <span className="badge badge-pill badge-dark py-2 my-2 ml-2 mr-2">
                    MS-Office
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 py-2 animate__animated animate__fadeInDown animate__delay-5s">
            <div className="card h-100 skills-box">
              <div className="icon-bg-os text-center py-1">
                <FontAwesomeIcon icon={faTools} size="2x" />
              </div>
              <div className="card-body">
                <div className="card-title text-center">Operation Systems</div>
                <div className="card-text text-center">
                  <span className="badge badge-pill badge-dark py-2 my-2 ml-2 mr-2">
                    Windows
                  </span>
                  <span className="badge badge-pill badge-dark py-2 my-2 ml-2 mr-2">
                    Linux (Kali Linux)
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 py-2 animate__animated animate__fadeInDown animate__delay-5s">
            <div className="card h-100 skills-box">
              <div className="icon-bg-languages text-center py-1">
                <FontAwesomeIcon icon={faLanguage} size="2x" />
              </div>
              <div className="card-body">
                <div className="card-title text-center">Languages</div>
                <div className="card-text text-center">
                  <span className="badge badge-pill badge-dark py-2 my-2 ml-2 mr-2">
                    English : Pre-advanced
                  </span>
                  <span className="badge badge-pill badge-dark py-2 my-2 ml-2 mr-2">
                    Malaysia : Advanced
                  </span>
                  <span className="badge badge-pill badge-dark py-2 my-2 ml-2 mr-2">
                    Indonesia : Native
                  </span>
                  <span className="badge badge-pill badge-dark py-2 my-2 ml-2 mr-2">
                    Palembang : Native
                  </span>
                  <span className="badge badge-pill badge-dark py-2 my-2 ml-2 mr-2">
                    Ogan : Native
                  </span>
                  <span className="badge badge-pill badge-dark py-2 my-2 ml-2 mr-2">
                    Kalimantan : Upper Intermediate
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
