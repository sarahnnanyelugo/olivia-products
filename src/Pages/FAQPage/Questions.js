import { useState } from "react";

export default function Questions(props) {
  const { bg1, bg2 } = props;
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front" style={{ backgroundColor: bg1 }}>
          <h3>{props.question}</h3>
        </div>
        <div className="flip-card-back">
          <p>{props.answer}</p>
        </div>
      </div>
    </div>
  );
}
