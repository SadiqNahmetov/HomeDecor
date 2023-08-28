import React, { useEffect } from "react";
import changeTitle from "../../utils/Change";
import Breadcrumbs from "../../components/Breadcrumbs";
import CollectionCard from "../../components/CollectionCard";

function Collection() {
  useEffect(() => {
    changeTitle("Collection");
  }, []);
  return (
    <main>
      <Breadcrumbs />
      <CollectionCard />
    </main>
  );
}

export default Collection;
