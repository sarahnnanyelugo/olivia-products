import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { allProductsData } from "../../TestData/allProductsData";
import { useCart } from "../../CartContext";
import "./view-product.scss";

interface Media {
  type: "image" | "video"; // Specify the allowed media types
  src: string;
}

export const ViewProductPage: React.FC = () => {
  const { id } = useParams(); // Get the product id from the URL
  const [product, setProduct] = useState<any>(null);
  const [activeImage, setActiveImage] = useState(0);
  const [transitionDirection, setTransitionDirection] = useState<
    "left" | "right"
  >("right");

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
    ...(product.additionalMedia
      ?.filter((media: Media) => media.type === "image")
      .map((media) => media.src) || []),
  ];

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      productName: product.name,
      productPrice: product.price,
      firstImg: product.firstImg,
      quantity: 1, // Default quantity to 1 when adding to the cart
    });
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
      <div className="product-info col-md-6">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p className="price">Price: ${product.price.toFixed(2)}</p>
        <button className="btn btn-primary" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};
