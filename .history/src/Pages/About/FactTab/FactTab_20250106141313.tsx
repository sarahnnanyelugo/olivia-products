import React, { useState } from "react";
import Abt1 from "../../assets/images/abt1.avif";
import Abt2 from "../../assets/images/abt2.avif";
import Abt3 from "../../assets/images/abt3.avif";
import "./fact-tab.scss";
interface TabContent {
  image: string;
  heading: string;
  description: string;
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
      }, 300);
    }
  };
  return (
    <div style={{ width: "100%" }}>
      {/* Tab Headers */}
      <div
        style={{ display: "flex" }}
        className="col-md-4 offset-md-4 d-md-flex"
      >
        {tabs.map((tab, index) => (
          <button
            className=""
            key={index}
            onClick={() => setActiveIndex(index)}
            style={{
              padding: "10px 20px",
              fontFamily: "sailecBold",
              border: "none",
              borderBottom:
                activeIndex === index ? "3px solid #007bff" : "none",
              backgroundColor: "transparent",
              cursor: "pointer",
              transition: "all 0.3s ease",
              fontWeight: activeIndex === index ? "bold" : "normal",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div style={{ borderBottom: "2px solid #ccc" }} />
      <div className="col-md-4 offset-md-4 d-md-flex tab-content">
        <div className="col-md-6 left-content">
          {" "}
          <img
            src={tabs[activeIndex].content.image}
            alt={tabs[activeIndex].content.heading}
            style={{ width: "100%", height: "auto", marginBottom: "15px" }}
          />
        </div>
        <div className="col-md-6 right-content">
          <h3>{tabs[activeIndex].content.heading}</h3>
          <p>{tabs[activeIndex].content.description}</p>
        </div>
      </div>
    </div>
  );
};

export default FactTab;
