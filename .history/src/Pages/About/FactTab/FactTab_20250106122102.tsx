import React, { useState } from "react";
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

  return (
    <div style={{ width: "100%" }}>
      {/* Tab Headers */}
      <div style={{ display: "flex", borderBottom: "2px solid #ccc" }}>
        {tabs.map((tab, index) => (
          <button
            className="offset-md-4"
            key={index}
            onClick={() => setActiveIndex(index)}
            style={{
              padding: "10px 20px",
              margin: "0 5px",
              border: "none",
              borderBottom:
                activeIndex === index ? "3px solid #007bff" : "none",
              backgroundColor: "transparent",
              cursor: "pointer",
              fontWeight: activeIndex === index ? "bold" : "normal",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="col-md-4 offset-md-4">
        <img
          src={tabs[activeIndex].content.image}
          alt={tabs[activeIndex].content.heading}
          style={{ width: "100%", height: "auto", marginBottom: "15px" }}
        />
        <h3>{tabs[activeIndex].content.heading}</h3>
        <p>{tabs[activeIndex].content.description}</p>
      </div>
    </div>
  );
};

export default FactTab;