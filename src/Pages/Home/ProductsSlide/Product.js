import "./products-slide.scss";

export const Product = (props) => {
  const { prdImg, name, price } = props;

  return (
    // <div className="embla__slide__number">

    <div className="products-section col">
      {" "}
      <div className="embla__slide__number">
        <img src={prdImg} width="100%" alt="" />
      </div>
      {/* <div className="d-flex details">
        <h4 style={{ flexGrow: 1 }}>{name}</h4>
        <h4>{price}</h4>
      </div> */}
    </div>
    // </div>
  );
};
