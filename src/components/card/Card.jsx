import "./Card.scss";
import React from "react";
import { Link } from "react-router-dom";
import pin from "../../assets/pin.png";
import bed from "../../assets/bed.png";
import bath from "../../assets/bath.png";
import save from "../../assets/save.png";
import chat from "../../assets/chat.png";
const Card = ({ item }) => {
  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.img} alt={item.img} />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <img src={pin} alt={pin} />
          <span>{item.address}</span>
        </p>
        <p className="price">$ {item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src={bed} alt={bed} />
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className="feature">
              <img src={bath} alt={bath} />
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src={save} alt={save} />
            </div>
            <div className="icon">
              <img src={chat} alt={chat} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
