import React from "react";
import Footer from "../footer/footer";
import HeaderMain from "../HeaderMain/HeaderMain";

function MainLayout({ children }) {
  return (
    <>
      <div className="wrapper-project">
        <HeaderMain />
        {children}
        <Footer />
      </div>
    </>
  );
}

export default MainLayout;
