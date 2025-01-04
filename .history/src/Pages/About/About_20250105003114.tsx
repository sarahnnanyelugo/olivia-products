import React, { useState, useEffect, useRef } from "react";
import "./about.scss";
import Abt1 from "../../assets/images/abt1.avif";
import Abt2 from "../../assets/images/abt2.avif";
import Abt3 from "../../assets/images/abt3.avif";

export const About: React.FC = () => {
  const images: string[] = [Abt3, Abt2, Abt1];
  const [currentImage, setCurrentImage] = useState<string>(images[0]);
  const [scrollIndex, setScrollIndex] = useState<number>(0);
  const [visibleParagraphs, setVisibleParagraphs] = useState<boolean[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const paragraphsRef = useRef<(HTMLParagraphElement | null)[]>([]);

  const handleScroll = (): void => {
    if (containerRef.current) {
      const { top, height } = containerRef.current.getBoundingClientRect();
      const scrollPosition = -top;

      // Handle image transition
      if (scrollPosition >= 0 && scrollPosition <= height) {
        const newIndex = Math.floor(scrollPosition / 200) % images.length;
        if (newIndex !== scrollIndex) {
          setScrollIndex(newIndex);
          setCurrentImage(images[newIndex]);
        }
      }

      // Check visibility of paragraphs
      const updatedVisibility = paragraphsRef.current.map((paragraph) => {
        if (!paragraph) return false;
        const rect = paragraph.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
      });

      setVisibleParagraphs(updatedVisibility);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollIndex]);

  return (
    <div>
      <div className="banner">
        <center>
          <div className="col-md-5">
            {" "}
            <h5>About Us</h5>
            <p> Making a difference by doing things differently</p>
          </div>
        </center>
      </div>
      <center>
        <div className="col-md-6 problem-div">
          <h4>THE PROBLEM</h4>
          <p>
            Plastic was meant to last forever, but most of it is only used once.
          </p>
        </div>
      </center>
      <div className="scroll-container" ref={containerRef}>
        <div className="content">
          <div className="sticky-image col-md-6">
            <img
              src={currentImage}
              alt="Scroll Transition"
              className="col-md-11"
            />
          </div>
          <div className="writeup col-md-3">
            {[
              "The average person eats credit card’s worth of plastic each week - amounting to 74,000 microplastics each year.",
              "Every year nearly 18 billion pounds of plastic enters the ocean - that's one garbage truck full every minute.",
              "We generate enough plastic waste each year to circle the earth four times. And we can't recycle our way out of this plastic problem. Only 5% of plastic waste actually gets recycled!",
              "Paragraph 4 content...",
            ].map((text, index) => (
              <p
                key={index}
                ref={(el) => (paragraphsRef.current[index] = el)}
                className={visibleParagraphs[index] ? "visible" : "hidden"}
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
