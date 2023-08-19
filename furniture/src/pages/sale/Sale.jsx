import React, { useEffect } from "react";
import changeTitle from "../../helpers/Change";
import Breadcrumbs from "../../components/Breadcrumbs";

function Sale() {
  useEffect(() => {
    changeTitle("Sale");
  }, []);
  return (
    <main>
      <Breadcrumbs />
    </main>
  );
}

export default Sale;
