import "./products-slide.scss";

export const Product = (props) => {
  const { prdImg, name, price } = props;

  return (
    <div className="products-section col">
      <img src={prdImg} width="100%" />
      <div className="d-flex details">
        <h4 style={{ flexGrow: 1 }}>{name}</h4>
        <h4>{price}</h4>
      </div>
    </div>
  );
};
