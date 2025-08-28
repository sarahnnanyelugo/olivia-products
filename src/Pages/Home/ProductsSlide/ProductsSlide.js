import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Product1 from "../../../assets/images/group2-cli.png";
import Product2 from "../../../assets/images/hand-wash-clip.png";
import Product3 from "../../../assets/images/tile-group.png";
import Product4 from "../../../assets/images/group2-clip.png";
import Bg from "../../../assets/images/flower5.jpg";
import Bg2 from "../../../assets/images/flower2.jpeg";
import Bg3 from "../../../assets/images/flower4.webp";
import Bg4 from "../../../assets/images/flower-bg.jpg";
import "./products-slide.scss";
const backgrounds = [Bg, Bg2, Bg3, Bg4];
const images = [Product1, Product2, Product3, Product4];

const ProductsSlide = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  useEffect(() => {
    const interval = setInterval(next, 3000);
    return () => clearInterval(interval); // cleanup on unmount
  }, []);
  return (
    <div style={styles.container}>
      <button onClick={prev} style={styles.button}>
        ◀
      </button>

      <div style={styles.slider}>
        {images.map((color, index) => {
          // Position relative to current
          const offset = (index - current + images.length) % images.length;

          // Normalize offset to [-2, -1, 0, 1, 2]
          let position = offset;
          if (offset > Math.floor(images.length / 2)) {
            position = offset - images.length;
          }

          return (
            <motion.div
              key={index}
              initial={false}
              animate={{
                x: position * 400, // horizontal spacing
                scale: position === 0 ? 1.3 : 0.7, // middle bigger
                opacity: Math.abs(position) > 1 ? 0 : 1, // hide distant ones
                zIndex: position === 0 ? 2 : 1, // middle on top
              }}
              transition={{ duration: 0.5 }}
              style={{
                ...styles.box,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundImage: `url(${
                  backgrounds[index % backgrounds.length]
                })`,
              }}
            >
              <img
                width="100%"
                src={images[index % images.length]} // pair images with colors
                alt="products"
                style={styles.image}
              />
            </motion.div>
          );
        })}
      </div>

      <button onClick={next} style={styles.button}>
        ▶
      </button>
      <div style={styles.dots} className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrent(index)}
            style={{
              ...styles.dot,
              background: current === index ? "#333" : "#bbb",
              transform: current === index ? "scale(1.2)" : "scale(1)",
            }}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    // background: "#310303ff",
    gap: "1rem",
  },
  slider: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    height: "1000px",
    position: "relative",
    overflow: "hidden",
  },
  box: {
    position: "absolute",
    width: "600px",
    height: "500px",
    borderRadius: "12px",
    boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
    padding: "40px",
  },

  button: {
    fontSize: "2rem",
    background: "none",
    border: "none",
    cursor: "pointer",
  },

  dots: {
    display: "flex",
    gap: "8px",
    marginTop: "10px",
  },
  dot: {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    background: "#bbb",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
};

export default ProductsSlide;
