import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { NavLink } from "react-router-dom";

function SelectDrop() {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle id="dropdown-button-dark-example1">
          Product Category
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item>
            <NavLink to={"/collections?category=hand-soap"}>Hand Soap</NavLink>
          </Dropdown.Item>
          <Dropdown.Item>
            <NavLink to={"/collections?category=Laundry"}> Laundry</NavLink>
          </Dropdown.Item>
          <Dropdown.Item>
            <NavLink to={"/collections?category=spray-cleaners"}>
              Spray Cleaners
            </NavLink>
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>
            <NavLink to={"/collections?category=dish-wash"}>Dish Wash</NavLink>
          </Dropdown.Item>{" "}
          <Dropdown.Item>
            <NavLink to={"/collections?category=toilet"}>Toilet</NavLink>
          </Dropdown.Item>{" "}
          <Dropdown.Item>
            <NavLink to={"/collections?category=personal-care"}>
              Personal Care
            </NavLink>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default SelectDrop;