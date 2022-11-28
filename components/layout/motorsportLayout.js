import React from "react";
import Footer from "../footer/footer";
import HeaderGoft from "../HeaderGoft/HeaderGoft";
import HeaderMoto from "../HeaderMoto/HeaderMoto";

function MotorSportLayout({ children }) {
  return (
    <>
      <div className="wrapper-project">
        <HeaderMoto />
        {children}
        <Footer />
      </div>
    </>
  );
}

export default MotorSportLayout;
