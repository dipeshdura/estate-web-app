import "./singlePage.scss";
import Slider from "../../components/slider/Slider";
import Map from "../../components/map/Map";
import React from "react";
import { singlePostData, userData } from "../../lib/dummydata";
import pin from "../../assets/pin.png";
import chat from "../../assets/chat.png";
import save from "../../assets/save.png";
import utility from "../../assets/utility.png";
import pet from "../../assets/pet.png";
import fee from "../../assets/fee.png";
import size from "../../assets/size.png";
import bed from "../../assets/bed.png";
import bath from "../../assets/bath.png";
import school from "../../assets/school.png";
import restaurant from "../../assets/restaurant.png";



const SinglePage = () => {
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>

                <div className="address">
                  <img src={pin} alt={pin} />

                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">$ {singlePostData.price}</div>
              </div>

              <div className="user">
                <img src={userData.img} alt={userData.img} />
                <span>{userData.name}</span>
              </div>
            </div>

            <div className="bottom">{singlePostData.description}</div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">

          <p className="title">General</p>
          <div className="listVertical">

            <div className="feature">
              <img src={utility} alt={utility} />
              <div className="featureText">
                <span>Utilities</span>
                <p>Renter is responsible</p>
              </div>
            </div>
            <div className="feature">
              <img src={pet} alt={pet} />
              <div className="featureText">
                <span>Pet Policy</span>
                <p>Pets Allowed</p>
              </div>
            </div>
            <div className="feature">
              <img src={fee} alt={fee} />
              <div className="featureText">
                <span>Property Fee</span>
                <p>Must have 3x the rent in total household income</p>
              </div>
            </div>

          </div>

          <p className="title">Room Sizes</p>

          <div className="sizes">
            <div className="size">
              <img src={size} alt={size}/>
              <span>80 sqft</span>
            </div>
            <div className="size">
              <img src={bed} alt={bed}/>
              <span>2 beds</span>
            </div>
            <div className="size">
              <img src={bath} alt={bath}/>
              <span>1 bathroom</span>
            </div>
          </div>

          <p className="title">Nearby Places</p>
          <div className="listHorizontal">

            <div className="feature">
              <img src={school} alt={school} />
              <div className="featureText">
                <span>School</span>
                <p>250m away</p>
              </div>
            </div>
            <div className="feature">
              <img src={pet} alt={pet} />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>100m away</p>
              </div>
            </div>
            <div className="feature">
              <img src={restaurant} alt={restaurant} />
              <div className="featureText">
                <span>Restaurant</span>
                <p>200m away</p>
              </div>
            </div>

          </div>

          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={[singlePostData]} />
          </div>

          <div className="buttons">
            <button>
              <img src={chat} alt={chat} />
              Send a Message
              </button>
            <button>
              <img src={save} alt={save} />
              Save the Place
              </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SinglePage;
