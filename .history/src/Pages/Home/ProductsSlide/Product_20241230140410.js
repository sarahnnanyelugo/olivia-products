export const Product = ({ id, level, ref }) => {
  const className = `item level${level}`;
  console.log(id);
  return (
    <div className={className} ref={ref} id="products-section">
      <img src={id} alt={`Product ${level}`} width="100%" />
    </div>
  );
};
