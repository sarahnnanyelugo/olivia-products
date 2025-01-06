import React from "react";
import Video from "../../assets/images/home-video.mp4";

export const VideoSlide: React.FC = () => {
  declare module "*.mp4" {
    const src: string;
    export default src;
  }
  return <div>VideoSlide</div>;
};
