import React from "react";
import ServiceImg from "../../assets/images/service.png";
import ServiceImg2 from "../../assets/images/service2.png";
import ServiceImg3 from "../../assets/images/service3.png";
import ServiceImg4 from "../../assets/images/service4.png";
import ArrowRight from "../../assets/icons/right arrow.jpg";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";

const Service = () => {
  return (
    <div className="main__service_container">
      <div className="service__container">
        <Slide top cascade>
          <h2 className="service__header">Our Services</h2>
        </Slide>
        <Slide top cascade>
          <p className="service__paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam,
            dapibus mattis vel feugiat erat tortor eleifend.
          </p>
        </Slide>
        <div className="service__cards">
          <Zoom top cascade >
            <div className="service__card">
              <img src={ServiceImg} alt="" />
              <div className="card-text">
                <h2>IPDC SAVING SCHEMES</h2>
                <img src={ArrowRight} alt="" />
              </div>
            </div>
          </Zoom>
          <Zoom top cascade>
            <div className="service__card">
              <img src={ServiceImg2} alt="" />
              <div className="card-text">
                <h2>IPDC SAVING SCHEMES</h2>
                <img src={ArrowRight} alt="" />
              </div>
            </div>
          </Zoom>
          <Zoom top cascade>
            <div className="service__card">
              <img src={ServiceImg3} alt="" />
              <div className="card-text">
                <h2>IPDC Deposit schemes</h2>
                <img src={ArrowRight} alt="" />
              </div>
            </div>
          </Zoom>
          <Zoom top cascade>
            <div className="service__card">
              <img src={ServiceImg4} alt="" />
              <div className="card-text">
                <h2>IPDC Auto Loannn</h2>
                <img src={ArrowRight} alt="" />
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default Service;
