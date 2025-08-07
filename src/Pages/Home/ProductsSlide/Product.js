import "./products-slide.scss";

export const Product = (props) => {
  const { prdImg, name, price } = props;

  return (

    <div className="products-section col">
      {" "}
      <div className="embla__slide__number">
        <img src={prdImg} width="100%" alt="" />
      </div>
     
    </div>
    
  );
};
