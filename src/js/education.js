import React from "react";
const Education = () => {
  const [state] = React.useState({
    subHeading: "Education",
  });
  return (
    <div id="education" className="container-fluid">
      <div className="container heading1 animate__animated animate__fadeInDown animate__delay-1s">
        <div className="pt-3 py-2 text-center">
          <h1>{state.subHeading}</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-1 col-md-1 col-lg-3"></div>
        <div className="col-10 col-md-10 col-lg-6 mt-3 resume-block ">
          <ul>
            <li className="animate__animated animate__fadeInDown animate__delay-2s">
              <h6 className="mt-2 title">UNIVERSITAS LAMPUNG</h6>
              <span className="mt-2 date"> Since 2021</span>
              <p className="mt-2 description">
                I graduated from college with a bachelor degree in computer
                science since 2021.
              </p>
            </li>
            <li className="animate__animated animate__fadeInDown animate__delay-3s">
              <h6 className="mt-2 title">SMAN 1 OKU</h6>
              <span className="mt-2 date"> Since 2016</span>
              <p className="mt-2 description">
                I graduated from high school in SMA Negeri 1 OKU since 2016.
              </p>
            </li>
            <li className="animate__animated animate__fadeInDown animate__delay-4s">
              <h6 className="mt-2 title">SMPN 21 OKU</h6>
              <span className="mt-2 date"> Since 2013</span>
              <p className="mt-2 description">
                I graduated from middle school in SMP Negeri 28 OKU since 2013.
              </p>
            </li>
            <li className="animate__animated animate__fadeInDown animate__delay-5s">
              <h6 className="mt-2 title">SDN 58 OKU</h6>
              <span className="mt-2 date"> Since 2010</span>
              <p className="mt-2 description">
                I graduated from elementary school in SD Negeri 58 OKU since
                2010.
              </p>
            </li>
          </ul>
        </div>
        <div className="col-1 col-md-1 col-lg-3 mb-lg-5"></div>
      </div>
    </div>
  );
};

export default Education;
