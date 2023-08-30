import React from "react";
import GlanceImg from "../../assets/images/Glance.png";
import ArrowRight from "../../assets/icons/right arrow.jpg";
import Slide from "react-reveal/Slide";

const Glance = () => {
  return (
    <div className="glance__container">
      <div className="glance__left">
        <Slide left>
          <img src={GlanceImg} alt="" />
        </Slide>
      </div>
      <div className="glance__right">
        <Slide top cascade>
          <h1 className="glance-right__header">IPDC AT A GLANCE</h1>
        </Slide>
        <Slide top cascade>
          <p className="glance-right__paragraph">
            IPDC Finance Limited (previously known as "Industrial Promotion and
            Development Company of Bangladesh Limited") is the first private
            sector financial institution of the country established in 1981 by a
            distinguished group of shareholders namely International Finance
            Corporation (IFC), USA, German Investment and Development Company
            (DEG), Germany, The Aga Khan Fund for Economic Development (AKFED),
            Switzerland, Commonwealth Development Corporation (CDC), UK and the
            Government of Bangladesh
          </p>
        </Slide>
        <Slide left>
          <button className="glance__button">
            Read More <img src={ArrowRight} alt="" />
          </button>
        </Slide>
      </div>
    </div>
  );
};

export default Glance;
