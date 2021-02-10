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
                <h5 className="card-title">Manajemen Surat</h5>
                <p className="card-text">
                  Saya membuat Sistem Informasi Manajamen Surat Komisi Pemilihan
                  Umum Provinsi Lampung menggunakan HMTL5, CSS3, Javascript,
                  Bootstrap, jQuery, PHP, Laravel dll.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4 mb-4 animate__animated animate__fadeInDown animate__delay-3s">
            <div className="card">
              <img src={siberkad} className="card-img-top" alt="frontEnd" />
              <div className="card-body">
                <h5 className="card-title">Pemberkasan dan Akademik</h5>
                <p className="card-text">
                  Saya mengembangkan fitur bahan ajar pada Sistem Informasi
                  Pemberkasan dan Akademik Ilkom Unila menggunakan HMTL5, CSS3,
                  Javascript, Bootstrap, PHP, Laravel dll.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4 mb-4 animate__animated animate__fadeInDown animate__delay-4s">
            <div className="card">
              <img src={portfolio} className="card-img-top" alt="frontEnd" />
              <div className="card-body">
                <h5 className="card-title">Portfolio v1, v2, v3</h5>
                <p className="card-text">
                  Saya membuat Website Portfolio dengan hanya menggunakan HMTL5,
                  CSS3, Javascript, Bootstrap dan terakhir menggunakan React.
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
