import React from "react";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";

const Newsletter = () => {
  return (
    <div className="newsletter__container">
      <Zoom>
        <h1 className="newsletter__header">Newsletter</h1>
      </Zoom>
      <Zoom>
        <p className="newsletter__paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ac quis
          aliquam arcu lacus.
        </p>
      </Zoom>
      <div className="form">
        <Slide top>
          <form className="newsletter__input">
            <input
              className="newsletter__input"
              type="text"
              placeholder="Your name"
              name="user_name"
            />
            <button type="submit" className="newsletter__btn">
              Subscribe
            </button>
          </form>
        </Slide>
      </div>
    </div>
  );
};

export default Newsletter;
