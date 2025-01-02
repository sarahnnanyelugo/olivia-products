import React from "react";
export interface BadgeProps {
  firstImg: string;
  hoverImg: string;
}
function Badge(props: BadgeProps) {
  const { firstImg, hoverImg } = props;
  return (
    <div className="recommended-badge">
      <img src={firstImg} />
    </div>
  );
}
