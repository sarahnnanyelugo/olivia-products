import React, { useState, ChangeEvent } from "react";
import "./wholesale-page.scss";
import Logo from "../../assets/images/logo.png";
import { Row, Col } from "react-bootstrap";
interface Option {
  id: string;
  label: string;
}
export const WholeSalePage: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
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
      </form>
    </div>
  );
};
