import React from "react";
import "./wholesale-page.scss";
import Logo from "../../assets/images/logo.png";
import { Row, Col } from "react-bootstrap";

export const WholeSalePage = () => {
  return (
    <div className="wholesale-page col-md-6 offset-md-3">
      <form>
        <div className="col-md-2">
          {" "}
          <img src={Logo} width="70%" />
        </div>
        <h6>
          Name<span>*</span>
        </h6>
        <Row>
          <Col>
            <input placeholder="FIrst Name" type="text" />
          </Col>
          <Col>
            <input placeholder="Second Name" type="text" />
          </Col>
        </Row>{" "}
        <h6>
          Contact<span>*</span>
        </h6>
        <Row>
          <Col>
            <input placeholder="Email" type="text" />
          </Col>
          <Col>
            <input placeholder="Phone Num" type="tel" />
          </Col>
        </Row>
        <h6>
          Business Info <span>*</span>
        </h6>
        <input placeholder="Registered business name" type="text" />
        <h6>Type of business</h6>
        <div className="checkboxes">
          <label className="flipBox" aria-label="Checkbox 1">
            <input type="checkbox" />
            <span>Checkbox 1</span>
            <div className="flipBox_boxOuter">
              <div className="flipBox_box">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="flipBox_shadow"></div>
          </label>

          <label className="flipBox" aria-label="Checkbox 2">
            <input type="checkbox" />
            <span>Checkbox 2</span>
            <div className="flipBox_boxOuter">
              <div className="flipBox_box">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="flipBox_shadow"></div>
          </label>

          <label className="flipBox" aria-label="Checkbox 3">
            <input type="checkbox" />
            <span>Checkbox 3</span>
            <div className="flipBox_boxOuter">
              <div className="flipBox_box">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="flipBox_shadow"></div>
          </label>

          <label className="flipBox" aria-label="Checkbox 4">
            <input type="checkbox" disabled />
            <span>Disabled checkbox</span>
            <div className="flipBox_boxOuter">
              <div className="flipBox_box">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="flipBox_shadow"></div>
          </label>

          <label className="flipBox" aria-label="Checkbox 5">
            <input type="checkbox" />
            <span>Checkbox 4</span>
            <div className="flipBox_boxOuter">
              <div className="flipBox_box">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="flipBox_shadow"></div>
          </label>
        </div>
      </form>
    </div>
  );
};
