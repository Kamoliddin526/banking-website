import React from "react";
import Slide from "react-reveal/Slide";

const Results = () => {
  return (
    <div className="results__container">
      <Slide top cascade>
        <h1 className="results__header">Our best results for the year</h1>
      </Slide>
      <Slide top cascade>
        <p className="results__paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, dapibus
          mattis vel feugiat erat tortor eleifend.
        </p>
      </Slide>
      <div className="results__cards">
        <Slide top cascade>
          <div className="results__card">
            <h2 className="results__count count ">57.6 bn</h2>
            <p>LOAN PORTFOLIO</p>
          </div>
        </Slide>
        <Slide top cascade>
          <div className="results__card">
            <h2 className="results__count">0.95%</h2>
            <p>CLASSIFIED LOAN PORTFOLIO</p>
          </div>
        </Slide>
        <Slide top cascade>
          <div className="results__card">
            <h2 className="results__count">388.5%</h2>
            <p>CLASSIFIED LOAN Coverage</p>
          </div>
        </Slide>
        <Slide top cascade>
          <div className="results__card">
            <h2 className="results__count">50.4 bn</h2>
            <p>Deposit</p>
          </div>
        </Slide>
        <Slide bottom cascade>
          <div className="results__card">
            <h2 className="results__count">6.1 bn</h2>
            <p>Shareholders equity</p>
          </div>
        </Slide>
        <Slide bottom cascade>
          <div className="results__card">
            <h2 className="results__count">18.51%</h2>
            <p>Capital Adequacy Ratio</p>
          </div>
        </Slide>
        <Slide bottom cascade>
          <div className="results__card">
            <h2 className="results__count">8.5 bn</h2>
            <p>Market Capitalization</p>
          </div>
        </Slide>
        <Slide bottom cascade>
          <div className="results__card">
            <h2 className="results__count">AAA</h2>
            <p>Credit Rating</p>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Results;
