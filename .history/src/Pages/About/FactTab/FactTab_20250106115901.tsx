import React, { useState } from "react";

interface Tab {
  label: string;
  content: React.ReactNode;
}

const FactTab: React.FC<{ tabs: Tab[] }> = ({ tabs }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div style={{ width: "100%" }}>
      {/* Tab Headers */}
      <div style={{ display: "flex", borderBottom: "2px solid #ccc" }}>
        {tabs.map((tab, index) => (
          <button
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
      <div style={{ padding: "20px" }}>{tabs[activeIndex].content}</div>
    </div>
  );
};

export default HorizontalTabs;
