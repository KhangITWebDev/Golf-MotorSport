import React from "react";
import AcademyLayout from "../../components/layout/academyLayout";
import GoftLayout from "../../components/layout/goftLayout";
import Home from "./home/home";

function index(props) {
  return (
    <AcademyLayout>
      <Home />
    </AcademyLayout>
  );
}

export default index;
