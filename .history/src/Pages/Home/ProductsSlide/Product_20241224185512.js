export const Product = ({ id, level }, ref) => {
  //   const className = `item level${level}`;
  return (
    <div className={""} ref={ref}>
      <img src={id} alt={`Product ${level}`} width="100%" />
    </div>
  );
};
