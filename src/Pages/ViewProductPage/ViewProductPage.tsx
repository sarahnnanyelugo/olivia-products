// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { allProductsData } from "../../TestData/allProductsData";
// import { useCart } from "../../CartContext";
// import "./view-product.scss";

// export const ViewProductPage: React.FC = () => {
//   const { id } = useParams(); // Get the product id from the URL
//   const [product, setProduct] = useState<any>(null);
//   const [activeImage, setActiveImage] = useState(0);
//   const [transitionDirection, setTransitionDirection] = useState<
//     "left" | "right"
//   >("right");
//   const [quantity, setQuantity] = useState(1); // Add quantity state

//   const { addToCart } = useCart(); // Use addToCart from CartContext

//   useEffect(() => {
//     const selectedProduct = allProductsData.find((p) => p.id === Number(id));
//     setProduct(selectedProduct);
//   }, [id]);

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   const images = [
//     product.firstImg,
//     product.hoverImg,
//     ...(product.additionalImgs || []),
//   ];

//   const handleAddToCart = () => {
//     addToCart({
//       id: product.id,
//       productName: product.name,
//       productPrice: product.price,
//       firstImg: product.firstImg,
     
//       quantity: quantity, // Pass the updated quantity
//     });
//   };

//   const handleIncrement = () => {
//     setQuantity((prevQuantity) => prevQuantity + 1);
//   };

//   const handleDecrement = () => {
//     if (quantity > 1) {
//       setQuantity((prevQuantity) => prevQuantity - 1);
//     }
//   };

//   return (
//     <>
//       <div className="product-detail d-md-flex col-md-10 offset-md-1">
//         <div className="product-images col-md-6 d-md-flex">
//           <div className="image-thumbnails col-2">
//             {images.map((img, index) => (
//               <img
//                 key={index}
//                 src={img}
//                 alt={`Thumbnail ${index + 1}`}
//                 className={`thumbnail ${index === activeImage ? "active" : ""}`}
//                 onClick={() => {
//                   setTransitionDirection(
//                     index > activeImage ? "right" : "left"
//                   );
//                   setActiveImage(index);
//                 }}
//               />
//             ))}
//           </div>
//           <div className="main-carousel col-10">
//             <div
//               className={`image-container ${transitionDirection}`}
//               style={{ transform: `translateX(-${activeImage * 100}%)` }}
//             >
//               {images.map((img, index) => (
//                 <img
//                   key={index}
//                   src={img}
//                   alt=""
//                   className="main-image"
//                   width="100%"
//                 />
//               ))}
//             </div>
//             <button
//               className="prev-arrow"
//               style={{ height: "40px", width: "40px", fontSize: "14px" }}
//               onClick={() =>
//                 setActiveImage(
//                   (prev) => (prev - 1 + images.length) % images.length
//                 )
//               }
//             >
//               &#10094;
//             </button>
//             <button
//               style={{ height: "40px", width: "40px", fontSize: "14px" }}
//               className="next-arrow"
//               onClick={() =>
//                 setActiveImage((prev) => (prev + 1) % images.length)
//               }
//             >
//               &#10095;
//             </button>
//           </div>
//         </div>

//         {/* Product Details Section */}
//         <div className="product-info col-md-5 offset-3 offset-md-0">
//           <h1>Olivia <span style={{color:product.color}}>{product.name}</span>{product.sufix}</h1>
//           <p>{product.tagline}</p>
//           <h5>Product Details :</h5>
//           <p>{product.moreDetail}</p>

//           <h5>Fruity Ingredients:</h5>

        
     
//         <ul className="list-unstyled">
//   {(product.flavours ?? []).map((item: any) => (
//     <li key={item.id}>{item.name}</li>
//   ))}
// </ul>

    
 
//           <div className="quantity-controls">
//             <span
//               onClick={handleDecrement}
//               className="decrement-btn"
//               style={{ cursor: "pointer" }}
//             >
//               -
//             </span>
//             <span>{quantity}</span>
//             <span
//               onClick={handleIncrement}
//               className="increment-btn"
//               style={{ cursor: "pointer" }}
//             >
//               +
//             </span>
//           </div>
         

//           <button className="add-to-cart2" onClick={handleAddToCart}>
//             Add to Cart | ${(product.price * quantity).toFixed(2)}{" "}
//             {/* Show total */}
//           </button>
//           <h5>Other Varieties</h5>
//         </div>
//       </div>{" "}
//     </>
//   );
// };



// Pages/ViewProductPage/ViewProductPage.tsx
import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { allProductsData } from "../../TestData/allProductsData";
import { useCart } from "../../CartContext";
import "./view-product.scss";

const PRODUCT_DETAIL_BASE = "/product";

export const ViewProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [activeImage, setActiveImage] = useState(0);
  const [transitionDirection, setTransitionDirection] = useState<"left" | "right">("right");
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  // Always call hooks before any early returns
  const product = useMemo(() => {
    const pid = Number(id);
    if (Number.isNaN(pid)) return undefined;
    return allProductsData.find((p) => p.id === pid);
  }, [id]);

  const images = useMemo(() => {
    if (!product) return [];
    return [product.firstImg, product.hoverImg, ...(product.additionalImgs || [])].filter(Boolean);
  }, [product]);

  // Clean categories (ignore empty strings)
  const cleanCats = useMemo<string[]>(() => {
    const cats = (product?.category || []).filter(Boolean);
    return cats.map((c) => c.toLowerCase());
  }, [product]);

  const related = useMemo(() => {
    if (!product || cleanCats.length === 0) return [];
    const set = new Set(cleanCats);
    return allProductsData
      .filter((p) => p.id !== product.id)
      .filter((p) =>
        (p.category || [])
          .filter(Boolean)
          .map((c) => c.toLowerCase())
          .some((c) => set.has(c))
      )
      .slice(0, 8);
  }, [product, cleanCats]);

  useEffect(() => {
    setActiveImage(0);
    setQuantity(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  const primaryCategory = cleanCats[0] || "";

  // EARLY RETURN — make sure we return JSX or null
  if (!product) {
    return (
      <div className="container py-5">
        <p>That product wasn’t found.</p>
        <button className="btn btn-outline-secondary" onClick={() => navigate(-1)}>
          Go back
        </button>
      </div>
    );
  }

  const handleAddToCart = () =>
    addToCart({
      id: product.id,
      productName: product.name,
      productPrice: product.price,
      firstImg: product.firstImg,
      quantity,
    });

  const dec = () => setQuantity((q) => (q > 1 ? q - 1 : q));
  const inc = () => setQuantity((q) => q + 1);

  return (
    <>
      <div className="product-detail d-md-flex col-md-10 offset-md-1">
        {/* Images */}
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
              {images.map((img, idx) => (
                <img key={idx} src={img} alt="" className="main-image" width="100%" />
              ))}
            </div>

            <button
              className="prev-arrow"
              style={{ height: 40, width: 40, fontSize: 14 }}
              onClick={() => setActiveImage((prev) => (prev - 1 + images.length) % images.length)}
              aria-label="Previous image"
            >
              &#10094;
            </button>

            <button
              className="next-arrow"
              style={{ height: 40, width: 40, fontSize: 14 }}
              onClick={() => setActiveImage((prev) => (prev + 1) % images.length)}
              aria-label="Next image"
            >
              &#10095;
            </button>
          </div>
        </div>

        {/* Details */}
        <div className="product-info col-md-5 offset-3 offset-md-0">
          <h1>
            Olivia <span style={{ color: product.color }}>{product.name}</span>
            {product.sufix}
          </h1>

          {product.tagline && <p>{product.tagline}</p>}

          <h5>Product Details :</h5>
          {product.moreDetail && <p>{product.moreDetail}</p>}

          <h5>Fruity Ingredients:</h5>
          <ul className="list-unstyled">
            {(product.flavours ?? []).map((item: any) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>

          <div className="quantity-controls" aria-label="Quantity selector">
            <span onClick={dec} className="decrement-btn" style={{ cursor: "pointer" }}>
              –
            </span>
            <span>{quantity}</span>
            <span onClick={inc} className="increment-btn" style={{ cursor: "pointer" }}>
              +
            </span>
          </div>

          <button className="add-to-cart2" onClick={handleAddToCart}>
            Add to Cart | ₦{(Number(product.price) * quantity).toLocaleString()}
          </button>

          {primaryCategory && (
            <div className="mt-3">
              <Link to={`/collections?category=${encodeURIComponent(primaryCategory)}`}>
                ← Back to all in “{primaryCategory}”
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* More in this category */}
      {related.length > 0 ? (
        <div className="col-md-10 offset-md-1 mt-4">
          <h5 className="mb-3">
            More in {primaryCategory ? `“${primaryCategory}”` : "this category"}
          </h5>
          <div className="row g-3">
            {related.map((rp) => (
              <div className="col-6 col-md-3" key={rp.id}>
                <Link
                  to={`${PRODUCT_DETAIL_BASE}/${rp.id}`}
                  className="d-block text-decoration-none border rounded p-2 h-100 related-card"
                  onClick={() => setActiveImage(0)}
                >
                  <img src={rp.firstImg} alt={rp.name} className="img-fluid mb-2" />
                  <div className="small fw-semibold">{rp.name}</div>
                  {rp.price !== undefined && (
                    <div className="small text-muted">
                      ₦{Number(rp.price).toLocaleString()}
                    </div>
                  )}
                </Link>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
};
