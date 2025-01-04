import React from "react";
import "./wholesale-page.scss";
import Logo from "../../assets/images/logo.jpg";

export const WholeSalePage = () => {
  return (
    <div className="wholesale-page col-md-6 offset-md-3">
      <form>
        <div className="col-md-2">
          {" "}
          <img src={Logo} width="100%" />
        </div>
      </form>
    </div>
  );
};
