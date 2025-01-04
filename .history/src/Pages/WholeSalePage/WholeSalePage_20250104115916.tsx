import React, { useState, ChangeEvent } from "react";
import "./wholesale-page.scss";
import Logo from "../../assets/images/logo.png";
import { Row, Col } from "react-bootstrap";
interface Option {
  id: string;
  label: string;
}
export const WholeSalePage: React.FC = () => {
  const [selectedCount, setSelectedCount] = useState<number>(0);
  const options: Option[] = [
    { id: "myCheckbox05", label: "Cesar Salad" },
    { id: "myCheckbox06", label: "Coc Au Vine" },
    { id: "myCheckbox07", label: "Cevapcici" },
    { id: "myCheckbox08", label: "Pizza" },
    { id: "myCheckbox09", label: "Mac and cheese" },
  ];

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;
    setSelectedOptions((prev) =>
      checked ? [...prev, id] : prev.filter((option) => option !== id)
    );
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
              <p>Options chosen: {selectedOptions.join(", ") || "None"}</p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
