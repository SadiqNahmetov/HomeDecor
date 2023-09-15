import React, { useEffect, useState } from "react";
import classes from "./collectionCard.module.scss";
import CollectionService from "../../APIs/services/CollectionService";
import PageHead from "../PageHead";

function CollectionCard() {
  const [collections, setCollections] = useState([]);

  const GetAllCollection = async () => {
    setCollections(await CollectionService.GetAll());
  };

  useEffect(() => {
    GetAllCollection();
  }, []);
  return (
    <section id={classes.collection}>
      <div className="container">
        <div className={classes["collection__main"]}
         >


          <PageHead title="Collections" />

          <div
            className={classes["collection__main--content"]}
         
          >
            {collections.map((collections) => {
              return (
                <div className={classes["collection__main--content__item"]} key={collections.id}>
                  <img src={collections.image} alt="collection" />
                  <h3
                    className={classes["collection__main--content__item--name"]}
                  >
                    {collections.name}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CollectionCard;
