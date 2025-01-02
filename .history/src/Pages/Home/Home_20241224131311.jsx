import React from "react";
import Video from "../../assets/images/home-video.webm";
import Power from "../../assets/images/power.png";
import Money from "../../assets/images/money.png";
import Flower from "../../assets/images/flower.png";
import Plastic from "../../assets/images/plastic.png";
import "./home.scss";
import CountUp from "react-countup";

export const Home = () => {
  return (
    <div className="home-div">
      {" "}
      <video
        className="viddeo "
        width="100%"
        autoplay="true"
        loop="true"
        muted="false"
        playsinline="true"
        src={Video}
      ></video>
      <div className="stats">
        <center>
          <div className="col-md-8">
            <h1>
              {" "}
              <CountUp
                start={0}
                end={1000000}
                duration={2}
                decimal=""
                prefix=" "
                suffix="+"
                enableScrollSpy={true}
              />
              Homes Have Made the Switch
            </h1>
            <div className="d-md-flex">
              <div className="col-md-3 stats-data">
                <img src={Power} width="100px" />
                <h6>Powerfully Effective</h6>
                <p>
                  {" "}
                  <CountUp
                    start={0}
                    end={90000}
                    duration={2}
                    decimal=""
                    prefix=" "
                    suffix="+"
                    enableScrollSpy={true}
                  />{" "}
                  5-star reviews
                </p>
              </div>{" "}
              <div className="col-md-3 stats-data">
                {" "}
                <img src={Plastic} width="100px" />
                <h6>Eco-friendly</h6>
                <p>Compostable paper-based packaging</p>
              </div>{" "}
              <div className="col-md-3 stats-data">
                <img src={Flower} width="100px" />
                <h6>Clean Ingredients</h6>
                <p>Safe for use around kids and pets</p>
              </div>{" "}
              <div className="col-md-3 stats-data">
                {" "}
                <img src={Money} width="100px" />
                <h6>Money-Saving</h6>
                <p>Never pay for water or plastic packaging</p>
              </div>
            </div>
          </div>
        </center>
      </div>
      <center>
        <div className="category-div">
          <h1>Shop By Category</h1>
          <p>
            Explore all of our reusable and sustainable household cleaning
            products
          </p>
        </div>
      </center>
    </div>
  );
};
