import React from "react";
import kpu from "../images/projects/kpu.png";
import siberkad from "../images/projects/siberkad.png";
import portfolio from "../images/projects/portfolio v2.png";

const Projects = () => {
  const [state] = React.useState({
    subHeading: "Projects",
  });

  return (
    <div id="projects" className="container-fluid pb-4">
      <div className="container projects heading1 animate__animated animate__fadeInDown animate__delay-1s">
        <div className="pt-3 py-2 text-center">
          <h1>{state.subHeading}</h1>
        </div>
      </div>

      <div className="container mt-5 padProjects">
        <div className="row row-cols-1 row-cols-md-3">
          <div className="col-12 col-md-6 col-lg-4 mb-4 animate__animated animate__fadeInDown animate__delay-2s">
            <div className="card">
              <img src={kpu} className="card-img-top" alt="frontEnd" />
              <div className="card-body">
                <h5 className="card-title">Mail Management</h5>
                <p className="card-text">
                  I was create Incoming and Outgoing Mail Management Information
                  System in the Lampung Provincial General Election Commission
                  using HMTL5, CSS3, Javascript, Bootstrap, jQuery, PHP, Laravel
                  etc.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4 mb-4 animate__animated animate__fadeInDown animate__delay-2s">
            <div className="card">
              <img src={siberkad} className="card-img-top" alt="frontEnd" />
              <div className="card-body">
                <h5 className="card-title">Lecture Filing</h5>
                <p className="card-text">
                  I was create Teaching Materials Creation Feature in The Form
                  of Handouts on Web-Based Lecture Filing Information System
                  with Laravel Framework using HMTL5, CSS3, Javascript,
                  Bootstrap, PHP, Laravel etc.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4 mb-4 animate__animated animate__fadeInDown animate__delay-2s">
            <div className="card">
              <img src={portfolio} className="card-img-top" alt="frontEnd" />
              <div className="card-body">
                <h5 className="card-title">Portfolio v1, v2, v3</h5>
                <p className="card-text pb-5">
                  I was create a portfolio website using HMTL5, CSS3,
                  Javascript, Bootstrap and the last one using the React JS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-1"></div>
    </div>
  );
};

export default Projects;
