import React, { useEffect, useState } from "react";
import CircleLayer from "../../assets/icons/Circle Layer.jpg";
import UnderGround from "../../assets/icons/Object Ungroup.jpg";
import Scenery from "../../assets/icons/Scenery.jpg";
import Teamwork from "../../assets/icons/User Arrows.jpg";
import Rocket from "../../assets/icons/Rocket.jpg";
import Bag from "../../assets/icons/Bag.jpg";
import Cube from "../../assets/icons/Cube.jpg";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

const Customer = () => {
  return (
    <div className="customer__container">
      <Fade left cascade>
        <h1 className="customer__header">
          Creating Extraordinary Customer Experience
        </h1>
      </Fade>
      <Fade top cascade>
        <p className="customer__paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          bibendum eget morbi dignissim eu pharetra consequat montes, sagittis.
        </p>
      </Fade>
      <div className="customer__cards">
        <Flip top>
          <div className="customer__card">
            <div className="customer__card__image">
              <img src={CircleLayer} alt="image" />
            </div>
            <div className="customer__card__text">
              <h2 className="customer__card__text__title">Integrity</h2>
              <p className="customer__card__text__paragraph">
                Displaying the highest level of Integrity in the way we conduct
                our business
              </p>
            </div>
          </div>
        </Flip>
        <Flip top>
          <div className="customer__card">
            <div className="customer__card__image">
              <img src={UnderGround} alt="image" />
            </div>
            <div className="customer__card__text">
              <h2 className="customer__card__text__title">Demonstrate</h2>
              <p className="customer__card__text__paragraph">
                Demonstrating a strong Will to Win in the market place
              </p>
            </div>
          </div>
        </Flip>
        <Flip top>
          <div className="customer__card">
            <div className="customer__card__image">
              <img src={Scenery} alt="image" />
            </div>
            <div className="customer__card__text">
              <h2 className="customer__card__text__title">Diversity</h2>
              <p className="customer__card__text__paragraph">
                Promoting Diversity in the work place and community
              </p>
            </div>
          </div>
        </Flip>
        <Flip top>
          <div className="customer__card">
            <div className="customer__card__image">
              <img src={Teamwork} alt="image" />
            </div>
            <div className="customer__card__text">
              <h2 className="customer__card__text__title">Integrity</h2>
              <p className="customer__card__text__paragraph">
                Displaying the highest level of Integrity in the way we conduct
                our business
              </p>
            </div>
          </div>
        </Flip>
        <Flip top>
          <div className="customer__card">
            <div className="customer__card__image">
              <img src={Rocket} alt="image" />
            </div>
            <div className="customer__card__text">
              <h2 className="customer__card__text__title">Teamwork</h2>
              <p className="customer__card__text__paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
                semper aenean id pen
              </p>
            </div>
          </div>
        </Flip>
        <Flip top>
          <div className="customer__card">
            <div className="customer__card__image">
              <img src={Bag} alt="image" />
            </div>
            <div className="customer__card__text">
              <h2 className="customer__card__text__title">Collaboration</h2>
              <p className="customer__card__text__paragraph">
                Displaying the highest level of Integrity in the way we conduct
                our business
              </p>
            </div>
          </div>
        </Flip>
        <Flip top>
          <div className="customer__card">
            <div className="customer__card__image">
              <img src={Cube} alt="image" />
            </div>
            <div className="customer__card__text">
              <h2 className="customer__card__text__title">Technology</h2>
              <p className="customer__card__text__paragraph">
                Harnessing the power of Technology to deliver better customer
                experience
              </p>
            </div>
          </div>
        </Flip>
        <Flip top>
          <div className="customer__card">
            <div className="customer__card__image">
              <img src={CircleLayer} alt="image" />
            </div>
            <div className="customer__card__text">
              <h2 className="customer__card__text__title">Corporate</h2>
              <p className="customer__card__text__paragraph">
                Setting the standard for the best Corporate Citizenship in the
                communities we work
              </p>
            </div>
          </div>
        </Flip>
      </div>
    </div>
  );
};

export default Customer;
