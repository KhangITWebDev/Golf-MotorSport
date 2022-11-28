import React from "react";
import Footer from "../footer/footer";
import HeaderGoft from "../HeaderGoft/HeaderGoft";

function GoftLayout({ children }) {
  return (
    <>
      <div className="wrapper-project">
        <HeaderGoft />
        {children}
        <Footer />
      </div>
    </>
  );
}

export default GoftLayout;
