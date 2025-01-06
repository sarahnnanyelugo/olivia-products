import React, { useState } from "react";
import Abt1 from "../../assets/images/abt1.avif";
import Abt2 from "../../assets/images/abt2.avif";
import Abt3 from "../../assets/images/abt3.avif";
import "./fact-tab.scss";

interface TabContent {
  image: string;
  heading: string;
  description: string;
  heading2: string;
  description2: string;
}

interface Tab {
  label: string;
  content: TabContent;
}

const FactTab: React.FC<{ tabs: Tab[] }> = ({ tabs }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [fade, setFade] = useState<boolean>(false);

  const handleTabClick = (index: number) => {
    if (index !== activeIndex) {
      setFade(true); // Trigger fade out
      setTimeout(() => {
        setActiveIndex(index);
        setFade(false); // Trigger fade in after content switches
      }, 500);
    }
  };

  return (
    <div style={{ width: "100%" }}>
      {/* Tab Headers */}
      <div
        className="col-md-4 offset-md-4 d-md-flex"
        style={{ display: "flex" }}
      >
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            style={{
              padding: "10px 20px",
              fontFamily: "sailecBold",
              border: "none",
              borderBottom:
                activeIndex === index ? "3px solid #007bff" : "none",
              backgroundColor: "transparent",
              cursor: "pointer",
              transition: "all 0.7s ease",
              fontWeight: activeIndex === index ? "bold" : "normal",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div style={{ borderBottom: "2px solid #ccc" }} />
      <div
        className="col-md-4 offset-md-4 tab-content d-md-flex"
        style={{
          opacity: fade ? 0 : 1,
          transform: fade ? "scale(0.95)" : "scale(1)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <div className="left-content">
          <img
            src={tabs[activeIndex].content.image}
            alt={tabs[activeIndex].content.heading}
            style={{ width: "100%", height: "auto", marginBottom: "15px" }}
          />
        </div>
        <div className="right-content" style={{ flex: 1 }}>
          <h6>{tabs[activeIndex].content.heading}</h6>
          <p>{tabs[activeIndex].content.description}</p>{" "}
          <h5>{tabs[activeIndex].content.heading2}</h5>
          <p>{tabs[activeIndex].content.description2}</p>
        </div>
      </div>
    </div>
  );
};

export default FactTab;
