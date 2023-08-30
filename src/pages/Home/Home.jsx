import React from "react";
import HomeLayer from "../../assets/images/home-layer.png";
import Car from "../../assets/icons/car.jpg";
import House from "../../assets/icons/house.jpg";
import Phone from "../../assets/icons/call.jpg";
import Facebook from "../../assets/icons/facebook.jpg";
import Youtube from "../../assets/icons/youtube.jpg";
import Linkedin from "../../assets/icons/linkedin.jpg";
import Instagram from "../../assets/icons/instagram.jpg";
import Slide from "react-reveal/Slide";
import Bounce from "react-reveal/Bounce";

const Home = () => {
  return (
    <div className="home__container">
      <div className="home__leftbar">
        <Slide left>
          <h1 className="home__header">Chase Your Dream with us</h1>
        </Slide>
        <Slide left>
          <p className="home__paragraph">
            The harder you work for something, the greater you’ll feel when you
            achieve it.
          </p>
        </Slide>
        <Slide left>
          <div className="home__btn-wrapper">
            <button className="home__btn">Apply Online</button>
            <button className="home__btn home__outline-btn">
              Loan Caclulator
            </button>
          </div>
        </Slide>
        <div className="home__social">
          <Slide left>
            <div className="social__phone">
              <img src={Phone} alt="" />
              <p>16519</p>
            </div>
          </Slide>
          <div className="social__images">
            <Slide top>
              <img src={Facebook} alt="" className="social__icon" />
            </Slide>
            <Slide top>
              <img src={Youtube} alt="" className="social__icon" />
            </Slide>
            <Slide top>
              <img src={Linkedin} alt="" className="social__icon" />
            </Slide>
            <Slide top>
              <img src={Instagram} alt="" className="social__icon" />
            </Slide>
          </div>
        </div>
      </div>
      <div className="home__rightbar">
        <Slide bottom>
          <img className="rightbar_layer" src={HomeLayer} alt="layer" />
        </Slide>
        <Bounce bottom>
          <div className="home__loan">
            <img src={Car} alt="car" />
            <h4>Car Loans</h4>
          </div>
        </Bounce>
        <Bounce bottom>
          <div className="car__loan">
            <img src={House} alt="" />
            <h4>Home Loan</h4>
          </div>
        </Bounce>
      </div>
    </div>
  );
};

export default Home;
