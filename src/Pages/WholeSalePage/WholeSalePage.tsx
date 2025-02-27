import React, { useState, ChangeEvent } from "react";
import "./wholesale-page.scss";
import Logo from "../../assets/images/logo.png";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
interface Option {
  id: string;
  label: string;
}
export const WholeSalePage: React.FC = () => {
  const [selectedCount, setSelectedCount] = useState<number>(0);
  const options: Option[] = [
    { id: "1", label: "Retailer" },
    { id: "2", label: "E-Commerce" },
    { id: "3", label: "Corporate Gifti" },
    { id: "4", label: "Hospitality" },
    { id: "5", label: "Distributor" },
    { id: "6", label: "Janitorial/Cleaning Services" },
    { id: "7", label: "Non-Profit" },
    { id: "8", label: "Government" },
    { id: "9", label: "Approved Broker" },
  ];

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setSelectedCount((prevCount) => (checked ? prevCount + 1 : prevCount - 1));
  };

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
        <div className="chec-body col-md-12">
          <div className="check-group">
            {options.map((option) => (
              <label key={option.id} htmlFor={option.id} className="checkbox">
                <input
                  className="checkbox__input"
                  type="checkbox"
                  id={option.id}
                  onChange={handleCheckboxChange}
                />
                <svg
                  className="checkbox__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 22 22"
                >
                  <rect
                    width="21"
                    height="21"
                    x=".5"
                    y=".5"
                    fill="#FFF"
                    stroke="#006F94"
                    rx="3"
                  />
                  <path
                    className="tick"
                    stroke="#6EA340"
                    fill="none"
                    strokeLinecap="round"
                    strokeWidth="4"
                    d="M4 10l5 5 9-9"
                  />
                </svg>
                <small className="checkbox__label">{option.label}</small>
              </label>
            ))}

            <div className="check-group__result">
              <p>
                {" "}
                Options chosen: {selectedCount} of {options.length}
              </p>
            </div>
          </div>
        </div>
        <Row>
          <Col>
            <h6>Website (If any)</h6>
            <input placeholder="Online representation" type="text" />{" "}
          </Col>
          <Col>
            <h6>
              City <span>*</span>
            </h6>
            <input placeholder="Your base city" type="text" />
          </Col>
        </Row>
        <Row>
          <Col>
            {" "}
            <h6>
              State <span>*</span>
            </h6>
            <input placeholder="Your State" type="text" />{" "}
          </Col>
          <Col>
            {" "}
            <h6>
              Country <span>*</span>
            </h6>
            <input placeholder="Your Country" type="text" />{" "}
          </Col>
        </Row>
        <h6>
          About the Business <span>*</span>
        </h6>
        <textarea placeholder="Briefly describe the nature of your business" />
        <p>
          By submitting this form, I agree to the terms and conditions noted in
          Olivia Product's homepage found at{" "}
          <Link to={"/"}>
            https://www.olivia-products.com/terms-and-conditions .
          </Link>{" "}
        </p>
        <p>
          Thank you for your interest in Olivia Products. If partnership is
          approved someone will reach out shortly to discuss next steps.
        </p>
        <center>
          {" "}
          <button>Submit</button>
        </center>
      </form>
    </div>
  );
};
