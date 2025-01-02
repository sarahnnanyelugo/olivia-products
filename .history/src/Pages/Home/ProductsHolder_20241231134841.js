import React from "react";

export const ProductsHolder = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const visibleItems = 4;
  // Extend products array for seamless looping
  const extendedProducts = [
    ...allProductsData.slice(-visibleItems),
    ...allProductsData,
    ...allProductsData.slice(0, visibleItems),
  ];

  // Adjust the actual index to match the extended array
  const actualStartIndex = startIndex + visibleItems;

  const handleNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setStartIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setStartIndex((prevIndex) => prevIndex - 1);
    }
  };

  // Handle looping effect after the transition ends
  useEffect(() => {
    if (isTransitioning) {
      const timeout = setTimeout(() => {
        // Complete the transition smoothly before changing the startIndex
        setIsTransitioning(false);

        // Handle the case when startIndex goes out of bounds (looping)
        if (startIndex === -1) {
          setStartIndex(allProductsData.length - 1);
        } else if (startIndex === allProductsData.length) {
          setStartIndex(0);
        }
      }, 1000); // Match the transition duration (1s)
      return () => clearTimeout(timeout);
    }
  }, [isTransitioning, startIndex, allProductsData.length]);
  return (
    <div>
      <div>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <button className="btn btn-secondary" onClick={handlePrev}>
            Prev
          </button>
          <button className="btn btn-secondary" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>{" "}
      <div
        className="carousel"
        style={{
          display: "flex",
          transition: isTransitioning ? "transform 1s ease-in-out" : "none", // Slower transition
          transform: `translateX(-${(100 / visibleItems) * actualStartIndex}%)`,
          width: `${(extendedProducts.length / visibleItems) * 25}%`, // 4 items in a row
        }}
      >
        {extendedProducts.map((product, index) => (
          <div
            key={index}
            style={{
              flex: `0 0 ${100 / visibleItems}%`,
              boxSizing: "border-box",
              padding: "10px", // Add space between items
            }}
          >
            <MainProduct
              firstImg={product.firstImg}
              hoverImg={product.hoverImg}
              id={1}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
