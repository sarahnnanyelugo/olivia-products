import React from "react";
import Video from "../../assets/images/home-video.mp4";

declare module "*.mp4" {
  const src: string;
  export default src;
}
export const VideoSlide: React.FC = () => {
  return <div>VideoSlide</div>;
};
