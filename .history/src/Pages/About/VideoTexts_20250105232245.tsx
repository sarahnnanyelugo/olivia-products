import React, { useEffect, useState, useRef } from 'react';
import './SlideUpText.css';

type SlideUpTextProps = {
  texts: string[];
};

const SlideUpText: React.FC<SlideUpTextProps> = ({ texts }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [visibleIndices, setVisibleIndices] = useState<number[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const containerTop = container.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      texts.forEach((_, index) => {
        const element = document.getElementById(`slide-${index}`);
        if (element) {
          const elementTop = element.getBoundingClientRect().top;

          // Trigger animation when the element is in view
          if (elementTop < windowHeight && elementTop > containerTop) {
            setVisibleIndices((prev) =>
              prev.includes(index) ? prev : [...prev, index]
            );
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [texts]);

  return (
    <div className="slide-up-container" ref={containerRef}>
      {texts.map((text, index) => (
        <div
          key={index}
          id={`slide-${index}`}
          className={`slide-up-text ${visibleIndices.includes(index) ? 'visible' : ''}`}
        >
          {text}
        </div>
      ))}
    </div>
  );
};

export default SlideUpText;
