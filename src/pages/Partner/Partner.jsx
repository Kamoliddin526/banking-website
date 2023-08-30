import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";
import Partner1 from "../../assets/images/partner.png";
import Partner2 from "../../assets/images/partner2.png";
import Partner3 from "../../assets/images/partner3.png";
import Partner4 from "../../assets/images/partner4.png";
import PartnerTimeline from "../../assets/images/partner-timeline.png";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Partner = () => {
  return (
    <div className="partner__container">
      <Slide down cascade>
        <h1>BUSINESS PARTNERS</h1>
      </Slide>
      <Carousel className="partner-img__wrapper" responsive={responsive}>
        <Zoom>
          <img className="partner__img" src={Partner1} alt="" />
        </Zoom>
        <Zoom>
          <img className="partner__img" src={Partner2} alt="" />
        </Zoom>
        <Zoom>
          <img className="partner__img" src={Partner3} alt="" />
        </Zoom>
        <Zoom>
          <img className="partner__img" src={Partner4} alt="" />
        </Zoom>
      </Carousel>
      <img src={PartnerTimeline} alt="" />
    </div>
  );
};

export default Partner;
