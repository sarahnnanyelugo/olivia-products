import Dropdown from "react-bootstrap/Dropdown";
import { NavLink } from "react-router-dom";
import "./select-drop.scss";
function SelectDrop() {
  return (
    <>
      <div className="select-div">
        {" "}
        <Dropdown>
          <Dropdown.Toggle id="dropdown-button-dark-example1">
            Product Category
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item>
              <NavLink to={"/collections?category=*"}>All Products</NavLink>
            </Dropdown.Item>{" "}
            <Dropdown.Item>
              <NavLink to={"/collections?category=hand-soap"}>
                Hand Soap
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item>
              <NavLink to={"/collections?category=dish-wash"}>
                {" "}
                Dish Wash
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item>
              <NavLink to={"/collections?category=air-fresheners"}>
                Air Fresheners
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item>
              <NavLink to={"/collections?category=shampoo"}>Hair Care</NavLink>
            </Dropdown.Item>{" "}
            <Dropdown.Item>
              <NavLink to={"/collections?category=car-wash"}>Car Washs</NavLink>
            </Dropdown.Item>{" "}
            <Dropdown.Item>
              <NavLink to={"/collections?category=liquid-soap"}>
                Liquid Soap
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item>
              <NavLink to={"/collections?category=toilet-wash"}>
                Toilet Wash
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item>
              <NavLink to={"/collections?category=window-cleaner"}>
                Window Cleaner
              </NavLink>
            </Dropdown.Item>{" "}
            <Dropdown.Item>
              <NavLink to={"/collections?category=personal-care"}>
                Personal Care
              </NavLink>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </>
  );
}

export default SelectDrop;
