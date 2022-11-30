import React from "react";
import AcademyLayout from "../../../../components/layout/academyLayout";
import GoftLayout from "../../../../components/layout/goftLayout";
import GoftNews from "./GoftNews";

function Index(props) {
  return (
    <AcademyLayout>
      <GoftNews />
    </AcademyLayout>
  );
}

export default Index;
