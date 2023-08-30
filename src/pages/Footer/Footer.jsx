import React from "react";
import Facebook from "../../assets/icons/facebook.jpg";
import Youtube from "../../assets/icons/youtube.jpg";
import Linkedin from "../../assets/icons/linkedin.jpg";
import Instagram from "../../assets/icons/instagram.jpg";
import Phone from "../../assets/icons/call.jpg";
import Slide from "react-reveal/Slide";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__links">
        <Slide bottom cascade>
          <div className="footer__link link">
            <ul className="about__link">
              <h2>About the company</h2>
              <li>
                <p className="link__paragraph">
                  Learn To Love Growth And Change And You Will Be A Success.
                  Microsoft Patch{" "}
                </p>
              </li>
              <div className="social__icons">
                <img src={Facebook} alt="" className="social__icon" />
                <img src={Youtube} alt="" className="social__icon" />
                <img src={Linkedin} alt="" className="social__icon" />
                <img src={Instagram} alt="" className="social__icon" />
              </div>
            </ul>
          </div>
        </Slide>
        <Slide bottom cascade>
          <div className="footer__link">
            <ul>
              <h2>Products</h2>
              <li className="first__link">CSR Activities</li>
              <li>Green Banking</li>
              <li>News</li>
              <li>Ongoing Campgain</li>
              <li>Updates</li>
            </ul>
          </div>
        </Slide>
        <Slide bottom cascade>
          <div className="footer__link">
            <ul>
              <h2>Get Started</h2>
              <li className="first__link">Career</li>
              <li>Contact Us</li>
              <li>Government Securities</li>
              <li>Examples</li>
              <li>NIS</li>
            </ul>
          </div>
        </Slide>
        <Slide bottom cascade>
          <div className="footer__link">
            <ul>
              <h2>About</h2>
              <li className="first__link">IPDC at a Glance</li>
              <li>Mission, VIsion & Values</li>
              <li>Corporate Governanace</li>
              <li>Shareholders</li>
              <li>Investor Relations</li>
            </ul>
          </div>
        </Slide>
        <Slide bottom cascade>
          <div className="footer__link phone__link">
            <img src={Phone} alt="" />
            <p>16519</p>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Footer;
