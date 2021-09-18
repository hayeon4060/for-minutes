import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import HY from "../../images/HY.png";
import JJ from "../../images/JJ.jpg";
import TL from "../../images/TL.jpg";
import SJ from "../../images/SJ.jpg";

function Cards() {
  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem src={TL} text="JDJS_TaeLim Lee" label="Frontend" />
            <CardItem src={JJ} text="JDJS_JinJoo Yoo" label="Frontend" />
            <CardItem src={SJ} text="JDJS_SuJi Kang" label="Backend" />
            <CardItem src={HY} text="JDJS_HaYeon Lee" label="Backend" />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
