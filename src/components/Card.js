import React from "react";
import CardItem from "./CardItem";
import "./Card.css";
import m1 from '../images/img-2.jpg'
import m2 from '../images/img-3.jpg'
import m3 from '../images/img-4.jpg'
import m4 from '../images/img-5.jpg'
function Card() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={m1}
              text="Expore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={m2}
              text="TRavel through the Islands of Bali in a Private Cruise "
              label="Luxury"
              path="/services"
            />
            <CardItem
              src={m3}
              text="Expore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={m4}
              text="TRavel through the Islands of Bali in a Private Cruise "
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={m2}
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;
