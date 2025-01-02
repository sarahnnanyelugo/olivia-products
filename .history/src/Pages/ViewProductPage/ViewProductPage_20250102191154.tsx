// ProductDetail.tsx

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { allProductsData } from "../../TestData/allProductsData";
import "./view-product.scss";

export const ViewProductPage: React.FC = () => {
  const { id } = useParams(); // Get the product id from the URL
  const [product, setProduct] = useState<any>(null);
  const [activeImage, setActiveImage] = useState(0); // Track the current active image

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
  ]; // Include additional images if available

  return (
    <div className="product-detail d-md-flex">
      {/* Image Carousel Section */}
      <div className="product-images col-md-6">
        <div className="main-carousel">
          <img
            src={images[activeImage]}
            alt={`Image ${activeImage + 1}`}
            className="main-image"
          />
        </div>
        <div className="image-thumbnails">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className={`thumbnail ${index === activeImage ? "active" : ""}`}
              onClick={() => setActiveImage(index)}
            />
          ))}
        </div>
      </div>

      {/* Product Details Section */}
      <div
        className="product-info col-md-6 mt-5"
        style={{ marginTop: "100px" }}
      >
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p className="price">Price: ${product.price.toFixed(2)}</p>
        <button className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  );
};
