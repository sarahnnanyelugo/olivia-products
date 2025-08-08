import { useState } from 'react';
import { NavLink } from "react-router-dom";
import { Desktop, TabletAndBelow } from "../../Utils/mediaQueries";
import Dropdown from "react-bootstrap/Dropdown";
import { useCart } from "../../CartContext";
import ListGroup from 'react-bootstrap/ListGroup';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { GrCart } from "react-icons/gr";
import { IoMenu } from "react-icons/io5";
import './top-nav.scss'
export const TopNav = () => {
  const { setIsOffCanvasOpen, cart } = useCart();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
   <>
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
                <Dropdown.Toggle variant="">Our Products</Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    {" "}
                    <NavLink to={"/collections?category=*"}>
                      All Olivia Products
                    </NavLink>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-1">
                    {" "}
                    <NavLink to={"/collections?category=hand-soap"}>
                      Hand Wash
                    </NavLink>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    <NavLink to={"/collections?category=dish-wash"}>
                    Dish Wash
                    </NavLink>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    {" "}
                    <NavLink to={"/collections?category=air-freshener"}>
                      Air Freshener
                    </NavLink>
                    
                  </Dropdown.Item>{" "}
                  <Dropdown.Item href="#/action-3">
                    {" "}
                    <NavLink to={"/collections?category=shampoo"}>
                    Hair Care
                    </NavLink>
                    
                  </Dropdown.Item>{" "}
                  <Dropdown.Item href="#/action-3">
                    {" "}
                    <NavLink to={"/collections?category=car-wash"}>
                      Car Wash
                    </NavLink>
                  </Dropdown.Item>{" "}
                  <Dropdown.Item href="#/action-3">
                    {" "}
                    <NavLink to={"/collections?category=liquid-soap"}>
                     Liquid Soap
                    </NavLink>
                  </Dropdown.Item>{" "}
                  <Dropdown.Item href="#/action-3">
                    {" "}
                    <NavLink to={"/collections?category=toilet-Wash"}>
                      Toilet Wash
                    </NavLink>
                  </Dropdown.Item>{" "}
                 
                  <Dropdown.Item href="#/action-3">
                    {" "}
                    <NavLink to={"/collections?category=window-cleaner"}>
                   Window Cleaner
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



<TabletAndBelow>
<div className="mobile-nav d-flex">
  <div style={{flexGrow:1}}>Logo</div>
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

  <IoMenu onClick={handleShow} className="menu-icon text-dark" />

     
      </div>


      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          {/* <Offcanvas.Title>Offcanvas</Offcanvas.Title> */}
        </Offcanvas.Header>
        <Offcanvas.Body>
        <ListGroup>
      <ListGroup.Item>
        <NavLink to={"/"}>Home</NavLink>
      </ListGroup.Item>
      <ListGroup.Item>  
     <NavLink to={"/wholesale"}>Wholesale</NavLink>
     </ListGroup.Item>  <ListGroup.Item>  
     <NavLink to={"/wholesale"}>Distribution</NavLink>
     </ListGroup.Item>  
     <ListGroup.Item>  
     <NavLink to={"/wholesale"}>Retail</NavLink>
     </ListGroup.Item> 
     
     
      <ListGroup.Item>  
      
     <Dropdown>
                <Dropdown.Toggle variant="">Our Products</Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    {" "}
                    <NavLink to={"/collections?category=*"}>
                      All Olivia Products
                    </NavLink>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-1">
                    {" "}
                    <NavLink to={"/collections?category=hand-soap"}>
                      Hand Wash
                    </NavLink>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    <NavLink to={"/collections?category=dish-wash"}>
                    Dish Wash
                    </NavLink>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    {" "}
                    <NavLink to={"/collections?category=air-freshener"}>
                      Air Freshener
                    </NavLink>
                    
                  </Dropdown.Item>{" "}
                  <Dropdown.Item href="#/action-3">
                    {" "}
                    <NavLink to={"/collections?category=shampoo"}>
                    Hair Care
                    </NavLink>
                    
                  </Dropdown.Item>{" "}
                  <Dropdown.Item href="#/action-3">
                    {" "}
                    <NavLink to={"/collections?category=car-wash"}>
                      Car Wash
                    </NavLink>
                  </Dropdown.Item>{" "}
                  <Dropdown.Item href="#/action-3">
                    {" "}
                    <NavLink to={"/collections?category=liquid-soap"}>
                     Liquid Soap
                    </NavLink>
                  </Dropdown.Item>{" "}
                  <Dropdown.Item href="#/action-3">
                    {" "}
                    <NavLink to={"/collections?category=toilet-Wash"}>
                      Toilet Wash
                    </NavLink>
                  </Dropdown.Item>{" "}
                 
                  <Dropdown.Item href="#/action-3">
                    {" "}
                    <NavLink to={"/collections?category=window-cleaner"}>
                   Window Cleaner
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
     </ListGroup.Item>
     <ListGroup.Item>  
     <NavLink to={"/about-us"}>About Us</NavLink>
     </ListGroup.Item>  <ListGroup.Item>  
     <NavLink to={"/our-mission"}>Olivia Care</NavLink>
     </ListGroup.Item>  
     <ListGroup.Item>  
     <NavLink to={"/"}>Careers</NavLink>
     </ListGroup.Item> <ListGroup.Item>  
     <NavLink to={"/contact-us"}>Contact Us</NavLink>
     </ListGroup.Item> 
    </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>

</TabletAndBelow>
   
   </>
  );
};
