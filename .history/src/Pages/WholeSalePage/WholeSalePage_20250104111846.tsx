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
        <div className="chec-body">
          <div class="check-group">
  <label for="myCheckbox05" class="checkbox">
    <input class="checkbox__input" type="checkbox" id="myCheckbox05">
    <svg class="checkbox__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
      <rect width="21" height="21" x=".5" y=".5" fill="#FFF" stroke="#006F94" rx="3" />
      <path class="tick" stroke="#6EA340" fill="none" stroke-linecap="round" stroke-width="4" d="M4 10l5 5 9-9" />
    </svg>
    <span class="checkbox__label">Cesar Salad</span>
  </label>
  <label for="myCheckbox06" class="checkbox">
    <input class="checkbox__input" type="checkbox" id="myCheckbox06">
    <svg class="checkbox__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
      <rect width="21" height="21" x=".5" y=".5" fill="#FFF" stroke="#006F94" rx="3" />
      <path class="tick" stroke="#6EA340" fill="none" stroke-linecap="round" stroke-width="4" d="M4 10l5 5 9-9" />
    </svg>
    <span class="checkbox__label">Coc Au Vine</span>
  </label>
  <label for="myCheckbox07" class="checkbox">
    <input class="checkbox__input" type="checkbox" id="myCheckbox07">
    <svg class="checkbox__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
      <rect width="21" height="21" x=".5" y=".5" fill="#FFF" stroke="#006F94" rx="3" />
      <path class="tick" stroke="#6EA340" fill="none" stroke-linecap="round" stroke-width="4" d="M4 10l5 5 9-9" />
    </svg>
    <span class="checkbox__label">Cevapcici</span>
  </label>
  <label for="myCheckbox08" class="checkbox">
    <input class="checkbox__input" type="checkbox" id="myCheckbox08" />
    <svg class="checkbox__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
      <rect width="21" height="21" x=".5" y=".5" fill="#FFF" stroke="#006F94" rx="3" />
      <path class="tick" stroke="#6EA340" fill="none" stroke-linecap="round" stroke-width="4" d="M4 10l5 5 9-9" />
    </svg>
    <span class="checkbox__label">Pizza</span>
  </label>
  <label for="myCheckbox09" class="checkbox">
    <input class="checkbox__input" type="checkbox" id="myCheckbox09" />
    <svg class="checkbox__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
      <rect width="21" height="21" x=".5" y=".5" fill="#FFF" stroke="#006F94" rx="3" />
      <path class="tick" stroke="#6EA340" fill="none" stroke-linecap="round" stroke-width="4" d="M4 10l5 5 9-9" />
    </svg>
    <span class="checkbox__label">Mac and cheese</span>
  </label>
  
  <div class="check-group__result">Options chosen:</div>
</div>
        </div>
      </form>
    </div>
  );
};
