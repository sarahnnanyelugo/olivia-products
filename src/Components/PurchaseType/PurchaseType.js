import Dropdown from "react-bootstrap/Dropdown";
import { NavLink } from "react-router-dom";
import "./purchase-type.scss";
function PurchaseType() {
  return (
    <>
      <div className="select-div">
        {" "}
        <Dropdown>
          <Dropdown.Toggle id="dropdown-button-dark-example1">
            Purchase Type
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item>
              <NavLink to={"/wholesale-page"}>Distribution</NavLink>
            </Dropdown.Item>
            <Dropdown.Item>
              <NavLink to={"/wholesale-page"}> Wholesale</NavLink>
            </Dropdown.Item>
            <Dropdown.Item>
              <NavLink to={"/collections?category=*"}>DropShipping</NavLink>
            </Dropdown.Item>
            <Dropdown.Item>
              <NavLink to={"/wholesale-page"}>Retailer</NavLink>
            </Dropdown.Item>{" "}
            <Dropdown.Item>
              <NavLink to={"/collections?category=*"}>Consumer</NavLink>
            </Dropdown.Item>{" "}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </>
  );
}

export default PurchaseType;
