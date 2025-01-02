// ProductDetail.tsx

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams to access the URL params
import { allProductsData } from "../../TestData/allProductsData";

export const ViewProductPage: React.FC = () => {
  const { id } = useParams(); // Get the product id from the URL
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    // Find the product by id in allProductsData
    const selectedProduct = allProductsData.find((p) => p.id === Number(id));
    setProduct(selectedProduct);
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-detail">
      <div className="product-images">
        <img src={product.firstImg} alt={product.name} />
        <img src={product.hoverImg} alt={product.name} />
      </div>
      <p>{product.description}</p>{" "}
      {/* Assuming description is available in your data */}
      <p>Price: ${product.price.toFixed(2)}</p>
      <h2>{product.name}</h2>
      {/* Add more product details here */}
    </div>
  );
};
