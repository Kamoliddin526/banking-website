import React, { useState } from "react";
import { Modal } from "antd";
import BankingLogo from "../../assets/icons/banking-logo.jpg";
import Search from "../../assets/icons/search-icon.png";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="nav__container">
      <Bounce top>
        <div className="nav__logo">
          <img className="logo" src={BankingLogo} alt="banking logo" />
        </div>
      </Bounce>
      <Zoom >
        <div className="nav__links__wrapper">
          <ul className="nav__links">
            <li className="nav__link">
              <a href="#">RETAIL</a>
            </li>
            <li className="nav__link">
              <a href="#">SME</a>
            </li>
            <li className="nav__link">
              <a href="#">CORPORATE</a>
            </li>
            <li className="nav__link">
              <a href="#">ABOUT US</a>
            </li>
            <li className="nav__link">
              <a href="#">COVID 19</a>
            </li>
            <li className="nav__link">
              <a href="#">CAMPAIGNS</a>
            </li>
          </ul>
        </div>
      </Zoom>
      <Bounce top>
        {" "}
        <div className="nav__icon-btn">
          <img className="nav__search" src={Search} alt="search" />
          <button className="nav__button">iService</button>
        </div>
      </Bounce>
      <div className="dot__wrapper" onClick={showModal}>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
      <Modal
        className="modal"
        open={isModalOpen}
        footer={null}
        onOk={handleOk}
      >
        <div className="nav__wrapper">
          <ul className="links">
            <li className="link">
              <a href="#">RETAIL</a>
            </li>
            <li className="link">
              <a href="#">SME</a>
            </li>
            <li className="link">
              <a href="#">CORPORATE</a>
            </li>
            <li className="link">
              <a href="#">ABOUT US</a>
            </li>
            <li className="link">
              <a href="#">COVID 19</a>
            </li>
            <li className="link">
              <a href="#">CAMPAIGNS</a>
            </li>
          </ul>
        </div>
        <div className="icon-btn">
          <img className="search" src={Search} alt="search" />
          <button className="button">iService</button>
        </div>
      </Modal>
    </div>
  );
};

export default Navbar;
