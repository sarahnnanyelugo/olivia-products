import React, { useRef, useState } from "react";
import "./our-mission.scss";
import Img1 from "../../assets/images/many-prod.avif";
import Img2 from "../../assets/images/butterfly.avif";
import Img3 from "../../assets/images/foam.avif";
import Img4 from "../../assets/images/people.avif";
import Img5 from "../../assets/images/policy.avif";
import { NavLink } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import Product1 from "../../assets/images/product1.avif";
import Product2 from "../../assets/images/product2.avif";
import Product3 from "../../assets/images/product3.avif";
import Product4 from "../../assets/images/product4.avif";
import Product5 from "../../assets/images/product5.avif";
import Product6 from "../../assets/images/product6.avif";
import Product7 from "../../assets/images/product7.avif";

import Abt1 from "../../assets/images/abt1.avif";
import Abt2 from "../../assets/images/abt2.avif";
import Abt3 from "../../assets/images/abt3.avif";
import { VideoSlide } from "../About/VideoSlide";
import FactTab from "../../Components/FactTab/FactTab";

const tabs = [
  {
    label: "Tab 1",
    content: {
      image: Abt1,
      heading: "DID YOU KNOW?",
      heading2: "OUR SOLUTION",
      description: "Only 5% of plastic actually gets recycled.",
      description2:
        "We made sure our bottles would be the last ones you'd ever need - made to be reused and refilled forever with plastic-free tablets.",
    },
  },
  {
    label: "Tab 2",
    content: {
      image: Abt2,
      heading: "DID YOU KNOW?",
      heading2: "OUR SOLUTION",
      description: "Only 5% of plastic actually gets recycled.",
      description2:
        "We made sure our bottles would be the last ones you'd ever need - made to be reused and refilled forever with plastic-free tablets.",
    },
  },
  {
    label: "Tab 3",
    content: {
      image: Abt3,
      heading: "DID YOU KNOW?",
      heading2: "OUR SOLUTION",
      description: "Only 5% of plastic actually gets recycled.",
      description2:
        "We made sure our bottles would be the last ones you'd ever need - made to be reused and refilled forever with plastic-free tablets.",
    },
  },
];

export const OurMission = () => {
  const [activeSection, setActiveSection] = useState("people");

  const images = [Abt3, Abt2, Abt1];
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [scrollIndex, setScrollIndex] = useState(0);
  const [visibleParagraphs, setVisibleParagraphs] = useState([]);
  const containerRef = useRef[null];
  const paragraphsRef = useRef([]);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const sections = document.querySelectorAll("section");
  //     const scrollY = window.scrollY;

  //     sections.forEach((section) => {
  //       const top = section.offsetTop - 100; // Offset for better accuracy
  //       const height = section.offsetHeight;
  //       const sectionId = section.getAttribute("id");

  //       if (scrollY >= top && scrollY < top + height) {
  //         setActiveSection(sectionId || "");
  //       }
  //     });
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);
  return (
    <div className="home-div">
      {/* Video Section */}
      <div className="mission-landing">
        <center>
          <h1>For the Love of the Planet</h1>
          <p>It's always been about more than cleaning</p>
        </center>
      </div>
      <center>
        <div className="mission-statement">
          <h1>Our Mission</h1>
          <p>Make it easy for everyone to make sustainable choices</p>
        </div>
      </center>

      <div className="change-div">
        <div className="change-div-inner col-md-7 offset-md-2 d-md-flex">
          <div className="col-md-7">
            <img src={Img1} width="100%" />
          </div>

          <div className="col-md-4 offset-md-1 mission-statement2">
            <h1>Built for Change</h1>

            <p>
              We set out to create a business that acts as a force for good –
              showing that sustainable business practices and products can be
              the "norm," not the exception //{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="mission-navlinks">
        <ul className="list-inline list-unstyled col-md-6 offset-md-3 d-flex">
          <li className="list-inline-item">
            <a
              href="#planet"
              className={activeSection === "planet" ? "active" : ""}
            >
              Planet
            </a>
          </li>{" "}
          <li className="list-inline-item">
            <a
              href="#product"
              className={activeSection === "product" ? "active" : ""}
            >
              Product
            </a>
          </li>{" "}
          <li className="list-inline-item">
            <a
              href="#people"
              className={activeSection === "people" ? "active" : ""}
            >
              People
            </a>
          </li>{" "}
          <li className="list-inline-item">
            <a
              href="#policy"
              className={activeSection === "policy" ? "active" : ""}
            >
              Policy
            </a>
          </li>
        </ul>
      </div>
      <div style={{ height: "70px" }} id="planet" />
      <div id="planet" className="section col-md-7 offset-md-3 d-md-flex">
        <div className="col-md-5">
          <img src={Img2} width="100%" />
        </div>
        <div className="col-md-6 offset-md-1">
          <h2>Planet</h2>
          <p>Putting the planet first</p>
          <Accordion defaultActiveKey="">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <h6>Climate Neutral</h6>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  We track our emissions from raw material extraction to
                  delivery, minimizing our footprint, and procuring offsets when
                  needed by supporting conservation and restoration projects
                  including Rimba Raya and renewables energy projects Crow Lakes
                  Wind and our own tablet/powder manufacturing. To achieve
                  carbon neutrality, Blueland works with The Change Climate
                  Project to audit our company’s entire operations as well as
                  the embedded carbon in all of our products’ input materials.
                  This includes auditing energy used to manufacture our
                  products, the corrugate our products are shipped in, the
                  directional insert included in our kits, storage and
                  fulfillment of our products and shipping product components
                  between our manufacturers, warehouses and ultimately to
                  customers’ homes. The audit also includes company travel, team
                  members’ daily commutes, office furniture and technology we’ve
                  purchased and the energy used to power our headquarters.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <h6>Material Health</h6>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  We ensure our products are made without chemicals that could
                  be harmful to people or the environment. This means our
                  products do not use any chemicals that can be found on the
                  Cradle to Cradle banned chemicals list.
                </p>
              </Accordion.Body>
            </Accordion.Item>{" "}
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <h6>Material Reutilization</h6>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  All of our products must be created in the cycle of reuse,
                  meaning they should be reusable, recyclable, compostable or
                  biodegradable.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                <h6>Renewable Energy + Carbon Management</h6>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  We work hard to engage all of our stakeholders in our mission,
                  including incentivizing key partners to reduce emissions as a
                  part of our continued commitment to them as a partner. In only
                  three short years, we managed to work with our key
                  manufacturing partner to transition the entire facility to
                  100% renewable energy via Renewable Energy Certificates
                  (RECs).
                </p>
              </Accordion.Body>
            </Accordion.Item>{" "}
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                <h6>Water Stewardship</h6>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  We recognize water as a finite resource and are committed to
                  keeping clean water accessible by requiring all manufacturers
                  of our tablets, powders and vessels to complete a Water
                  Discharge Audit and sign a Water Discharge Compliance
                  agreement.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
      <div style={{ height: "70px" }} id="product" />
      <div id="product" className="section d-md-flex col-md-7 offset-md-3">
        {" "}
        <div className="col-md-6 ">
          <h2>Product</h2>
          <p>Creating space for everyone</p>
          <Accordion defaultActiveKey="">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <h6>Olivia Team</h6>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  We track our emissions from raw material extraction to
                  delivery, minimizing our footprint, and procuring offsets when
                  needed by supporting conservation and restoration projects
                  including Rimba Raya and renewables energy projects Crow Lakes
                  Wind and our own tablet/powder manufacturing. To achieve
                  carbon neutrality, Blueland works with The Change Climate
                  Project to audit our company’s entire operations as well as
                  the embedded carbon in all of our products’ input materials.
                  This includes auditing energy used to manufacture our
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <h6>Social Fairness</h6>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  We ensure our products are made without chemicals that could
                  be harmful to people or the environment. This means our
                  products do not use any chemicals that can be found on the
                  Cradle to Cradle banned chemicals list.
                </p>
              </Accordion.Body>
            </Accordion.Item>{" "}
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <h6>Community</h6>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  All of our products must be created in the cycle of reuse,
                  meaning they should be reusable, recyclable, compostable or
                  biodegradable.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="col-md-5 offset-md-1">
          <img src={Img3} width="100%" />
        </div>
      </div>
      <div style={{ height: "70px" }} id="people" />
      <div id="people" className="section col-md-7 offset-md-3 d-md-flex">
        <div className="col-md-5">
          <img src={Img2} width="100%" />
        </div>
        <div className="col-md-6 offset-md-1">
          <h2>People</h2>
          <p>Putting the planet first</p>
          <Accordion defaultActiveKey="">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <h6>Climate Neutral</h6>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  We track our emissions from raw material extraction to
                  delivery, minimizing our footprint, and procuring offsets when
                  needed by supporting conservation and restoration projects
                  including Rimba Raya and renewables energy projects Crow Lakes
                  Wind and our own tablet/powder manufacturing. To achieve
                  carbon neutrality, Blueland works with The Change Climate
                  Project to audit our company’s entire operations as well as
                  the embedded carbon in all of our products’ input materials.
                  This includes auditing energy used to manufacture our
                  products, the corrugate our products are shipped in, the
                  directional insert included in our kits, storage and
                  fulfillment of our products and shipping product components
                  between our manufacturers, warehouses and ultimately to
                  customers’ homes. The audit also includes company travel, team
                  members’ daily commutes, office furniture and technology we’ve
                  purchased and the energy used to power our headquarters.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <h6>Material Health</h6>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  We ensure our products are made without chemicals that could
                  be harmful to people or the environment. This means our
                  products do not use any chemicals that can be found on the
                  Cradle to Cradle banned chemicals list.
                </p>
              </Accordion.Body>
            </Accordion.Item>{" "}
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <h6>Material Reutilization</h6>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  All of our products must be created in the cycle of reuse,
                  meaning they should be reusable, recyclable, compostable or
                  biodegradable.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                <h6>Renewable Energy + Carbon Management</h6>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  We work hard to engage all of our stakeholders in our mission,
                  including incentivizing key partners to reduce emissions as a
                  part of our continued commitment to them as a partner. In only
                  three short years, we managed to work with our key
                  manufacturing partner to transition the entire facility to
                  100% renewable energy via Renewable Energy Certificates
                  (RECs).
                </p>
              </Accordion.Body>
            </Accordion.Item>{" "}
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                <h6>Water Stewardship</h6>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  We recognize water as a finite resource and are committed to
                  keeping clean water accessible by requiring all manufacturers
                  of our tablets, powders and vessels to complete a Water
                  Discharge Audit and sign a Water Discharge Compliance
                  agreement.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
      <div style={{ height: "70px" }} id="policy" />
      <div className="section d-md-flex col-md-7 offset-md-3">
        <div className="col-md-6 ">
          <h2>Policy</h2>
          <p>Creating space for everyone</p>
          <Accordion defaultActiveKey="">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <h6>Olivia Team</h6>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  We track our emissions from raw material extraction to
                  delivery, minimizing our footprint, and procuring offsets when
                  needed by supporting conservation and restoration projects
                  including Rimba Raya and renewables energy projects Crow Lakes
                  Wind and our own tablet/powder manufacturing. To achieve
                  carbon neutrality, Blueland works with The Change Climate
                  Project to audit our company’s entire operations as well as
                  the embedded carbon in all of our products’ input materials.
                  This includes auditing energy used to manufacture our
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <h6>Social Fairness</h6>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  We ensure our products are made without chemicals that could
                  be harmful to people or the environment. This means our
                  products do not use any chemicals that can be found on the
                  Cradle to Cradle banned chemicals list.
                </p>
              </Accordion.Body>
            </Accordion.Item>{" "}
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <h6>Community</h6>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  All of our products must be created in the cycle of reuse,
                  meaning they should be reusable, recyclable, compostable or
                  biodegradable.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="col-md-5 offset-md-1">
          <img src={Img5} width="100%" />
        </div>
      </div>
    </div>
  );
};
