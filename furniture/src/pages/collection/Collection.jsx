import React, { useEffect } from "react";
import changeTitle from "../../utils/Change";
import CollectionCard from "../../components/CollectionCard";

function Collection() {
  useEffect(() => {
    changeTitle("Collection");
  }, []);
  return (
    <main>
      <CollectionCard />
    </main>
  );
}

export default Collection;
