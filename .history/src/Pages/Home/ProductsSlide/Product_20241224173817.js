export const Product = ({ id, level }, ref) => {
  const className = `item level${level}`;
  return (
    <div className={className}>
      <img src={id} alt={`Product ${level}`} width="100%" />
    </div>
  );
};
