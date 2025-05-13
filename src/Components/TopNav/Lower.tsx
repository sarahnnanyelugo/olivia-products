import React from "react";
import { NavLink } from "react-router-dom";
import { Desktop } from "../../Utils/mediaQueries";
import Dropdown from "react-bootstrap/Dropdown";
import { useCart } from "../../CartContext";
import { GrCart } from "react-icons/gr";
export const Lower = () => {
  const { setIsOffCanvasOpen, cart } = useCart();

  return (
    <Desktop>
      {" "}
      <div className="lower-nav-div">
        <center>
          <ul className="list-inline list-unstyled">
            <li className="list-inline-item">
              <NavLink to={"/"} style={{ fontFamily: "sailecBold" }}>
                Home
              </NavLink>
            </li>{" "}
            <li className="list-inline-item">
              <NavLink
                to={"/wholesale-page"}
                style={{ color: "green", fontFamily: "sailecBold" }}
              >
                Wholesale
              </NavLink>
            </li>{" "}
            <li className="list-inline-item">
              <NavLink
                to={"/wholesale-page"}
                style={{ color: "green", fontFamily: "sailecBold" }}
              >
                Distribution
              </NavLink>
            </li>{" "}
            <li className="list-inline-item">
              <NavLink
                to={"/wholesale-page"}
                style={{ color: "green", fontFamily: "sailecBold" }}
              >
                Retail
              </NavLink>
            </li>{" "}
            <span>||</span>
            <li className="list-inline-item">
              {" "}
              <Dropdown>
                <Dropdown.Toggle variant="light">Our Products</Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    {" "}
                    <NavLink to={"/collections?category=hand-soap"}>
                      Hand Soap
                    </NavLink>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    <NavLink to={"/collections?category=hand-soap"}>
                      Hand Soap
                    </NavLink>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    {" "}
                    <NavLink to={"/collections?category=dish-wash"}>
                      Dish
                    </NavLink>
                  </Dropdown.Item>{" "}
                  <Dropdown.Item href="#/action-3">
                    {" "}
                    <NavLink to={"/collections?category=hand-soap"}>
                      Hand Soap
                    </NavLink>
                  </Dropdown.Item>{" "}
                  <Dropdown.Item href="#/action-3">
                    {" "}
                    <NavLink to={"/collections?category=Laundry"}>
                      Laundry
                    </NavLink>
                  </Dropdown.Item>{" "}
                  <Dropdown.Item href="#/action-3">
                    {" "}
                    <NavLink to={"/collections?category=toilet-Wash"}>
                      Toilet
                    </NavLink>
                  </Dropdown.Item>{" "}
                  <Dropdown.Item href="#/action-3">
                    {" "}
                    <NavLink to={"/collections?category=Shampoo"}>
                      Shampoo
                    </NavLink>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    {" "}
                    <NavLink to={"/collections?category=personal-care"}>
                      Personal Care
                    </NavLink>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="list-inline-item">
              <NavLink to={"/about-us"}>About us</NavLink>
            </li>{" "}
            <li className="list-inline-item">
              <NavLink to={"/our-mission"}>OliviaCare</NavLink>
            </li>{" "}<li className="list-inline-item">
              <NavLink to={"/our-mission"}>Careers</NavLink>
            </li>{" "}
            <li className="list-inline-item">
              <NavLink to={"/contact-us"}>Contact us</NavLink>
            </li>
            <li className="list-inline-item">
              {" "}
              <div style={{ position: "relative", cursor: "pointer" }}>
                <GrCart size={30} onClick={() => setIsOffCanvasOpen(true)} />
                {cart.length > 0 && (
                  <span
                    style={{
                      position: "absolute",
                      top: "-8px",
                      right: "-8px",
                      backgroundColor: "red",
                      color: "white",
                      borderRadius: "50%",
                      padding: "2px 6px",
                      fontSize: "12px",
                      fontWeight: "bold",
                    }}
                  >
                    {cart.length}
                  </span>
                )}
              </div>
            </li>
          </ul>
        </center>
      </div>
    </Desktop>
  );
};
