import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { allProductsData } from "../../TestData/allProductsData";
import { useCart } from "../../CartContext";
import "./view-product.scss";

export const ViewProductPage: React.FC = () => {
  const { id } = useParams(); // Get the product id from the URL
  const [product, setProduct] = useState<any>(null);
  const [activeMedia, setActiveMedia] = useState(0);
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

  const media = [
    { type: "image", src: product.firstImg },
    { type: "image", src: product.hoverImg },
    ...(product.additionalImgs || []), // Additional images
    ...(product.additionalMedia || []), // Additional videos
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
      {/* Image/Video Carousel Section */}
      <div className="product-images col-md-6 d-md-flex">
        <div className="image-thumbnails col-2">
          {media.map((item, index) => (
            <img
              key={index}
              src={
                item.type === "image" ? item.src : "/images/video-thumbnail.jpg"
              } // Use a video thumbnail if it's a video
              alt={`Thumbnail ${index + 1}`}
              className={`thumbnail ${index === activeMedia ? "active" : ""}`}
              onClick={() => {
                setTransitionDirection(index > activeMedia ? "right" : "left");
                setActiveMedia(index);
              }}
            />
          ))}
        </div>
        <div className="main-carousel col-10">
          <div
            className={`media-container ${transitionDirection}`}
            style={{ transform: `translateX(-${activeMedia * 100}%)` }}
          >
            {media.map((item, index) => (
              <div key={index} className="media-item">
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={`Media ${index + 1}`}
                    className="main-image"
                  />
                ) : (
                  <video
                    src={item.src}
                    controls
                    autoPlay={index === activeMedia} // Auto-play if this is the active media
                    className="main-video"
                    width="100%"
                  />
                )}
              </div>
            ))}
          </div>
          <button
            className="prev-arrow"
            onClick={() =>
              setActiveMedia((prev) => (prev - 1 + media.length) % media.length)
            }
          >
            &#10094;
          </button>
          <button
            className="next-arrow"
            onClick={() => setActiveMedia((prev) => (prev + 1) % media.length)}
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
