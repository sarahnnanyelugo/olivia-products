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
              <NavLink to={"/collections?category=hand-soap"}>
                Distribution
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item>
              <NavLink to={"/collections?category=Laundry"}> Wholesale</NavLink>
            </Dropdown.Item>
            <Dropdown.Item>
              <NavLink to={"/collections?category=spray-cleaners"}>
                DropShipping
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item>
              <NavLink to={"/collections?category=dish-wash"}>Retailer</NavLink>
            </Dropdown.Item>{" "}
            <Dropdown.Item>
              <NavLink to={"/collections?category=toilet"}>Consumer</NavLink>
            </Dropdown.Item>{" "}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </>
  );
}

export default PurchaseType;