// SmoothScroll.jsx
import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const SmoothScroll = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      smoothMobile: true, // ✅ Make it smooth on mobile too
      multiplier: 4, // 🚀 Moves faster
      lerp: 0.05,
      smartphone: {
        smooth: true, // ✅ Make sure smartphone smoothing is ON
      },
      tablet: {
        smooth: true, // ✅ Make sure tablet smoothing is ON
      },
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <div data-scroll-container ref={scrollRef} style={{ overflow: "hidden" }}>
      {children} {/* This shows all your routes and content inside! */}
    </div>
  );
};

export default SmoothScroll;
