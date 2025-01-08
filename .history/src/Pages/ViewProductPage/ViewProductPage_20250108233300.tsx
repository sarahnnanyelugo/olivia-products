import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { allProductsData } from "../../TestData/allProductsData";
import { useCart } from "../../CartContext";
import "./view-product.scss";

export const ViewProductPage: React.FC = () => {
  const { id } = useParams(); // Get the product id from the URL
  const [product, setProduct] = useState<any>(null);
  const [activeImage, setActiveImage] = useState(0);
  const [transitionDirection, setTransitionDirection] = useState<
    "left" | "right"
  >("right");
  const [quantity, setQuantity] = useState(1); // Add quantity state

  const { addToCart } = useCart(); // Use addToCart from CartContext

  useEffect(() => {
    const selectedProduct = allProductsData.find((p) => p.id === Number(id));
    setProduct(selectedProduct);
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const images = [
    product.firstImg,
    product.hoverImg,
    ...(product.additionalImgs || []),
  ];

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      productName: product.name,
      productPrice: product.price,
      firstImg: product.firstImg,
      quantity: quantity, // Pass the updated quantity
    });
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className="product-detail d-md-flex col-md-10 offset-md-1">
      {/* Image Carousel Section */}
      <div className="product-images col-md-6 d-md-flex">
        <div className="image-thumbnails col-2">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className={`thumbnail ${index === activeImage ? "active" : ""}`}
              onClick={() => {
                setTransitionDirection(index > activeImage ? "right" : "left");
                setActiveImage(index);
              }}
            />
          ))}
        </div>
        <div className="main-carousel col-10">
          <div
            className={`image-container ${transitionDirection}`}
            style={{ transform: `translateX(-${activeImage * 100}%)` }}
          >
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Image ${index + 1}`}
                className="main-image"
              />
            ))}
          </div>
          <button
            className="prev-arrow"
            style={{ height: "40px", width: "40px" }}
            onClick={() =>
              setActiveImage(
                (prev) => (prev - 1 + images.length) % images.length
              )
            }
          >
            &#10094;
          </button>
          <button
            className="next-arrow"
            onClick={() => setActiveImage((prev) => (prev + 1) % images.length)}
          >
            &#10095;
          </button>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="product-info col-md-5">
        <h1>{product.name}</h1>
        <div className="quantity-controls">
          <span onClick={handleDecrement} className="decrement-btn">
            -
          </span>
          <span>{quantity}</span>
          <span onClick={handleIncrement} className="increment-btn">
            +
          </span>
        </div>
        <p>{product.description}</p>

        <button className="add-to-cart2" onClick={handleAddToCart}>
          Add to Cart | ${(product.price * quantity).toFixed(2)}{" "}
          {/* Show total */}
        </button>
      </div>
    </div>
  );
};
