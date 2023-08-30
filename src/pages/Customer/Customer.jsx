import React, { useEffect, useState } from "react";
import CircleLayer from "../../assets/icons/Circle Layer.jpg";
// import UnderGround from "../../assets/icons/Object Ungroup.jpg";
// import Scenery from "../../assets/icons/Scenery.jpg";
// import Teamwork from "../../assets/icons/User Arrows.jpg";
// import Rocket from "../../assets/icons/Rocket.jpg";
// import Bag from "../../assets/icons/Bag.jpg";
// import Cube from "../../assets/icons/Cube.jpg";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import axios from "axios";

const Customer = () => {
  const [card, setCard] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:5000/card",
    }).then((res) => setCard(res.data));
  }, []);
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
        {card.map((item, index) => (
          <Flip top>
            <div className="customer__card" key={index}>
              <div className="customer__card__image">
                <img src={CircleLayer} alt="image" />
              </div>
              <div className="customer__card__text">
                <h2 className="customer__card__text__title">{item.title}</h2>
                <p className="customer__card__text__paragraph">{item.body}</p>
              </div>
            </div>
          </Flip>
        ))}
      </div>
    </div>
  );
};

export default Customer;
