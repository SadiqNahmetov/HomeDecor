import React, { useEffect, useState } from "react";
import classes from "./collectionCard.module.scss";
import axios from "axios";
import PageHead from "../PagaHead";

function CollectionCard() {
  const url = "http://localhost:3000";

  const [collection, setCollection] = useState([]);

  const getCollection = async () => {
    await axios.get(`${url}/collections`).then((res) => {
      setCollection(res.data);
    });
  };

  useEffect(() => {
    getCollection();
  }, []);

  return (
    <section id={classes.collection}>
      <div className="container">
        <div className={classes["collection__main"]}>


          <PageHead title="Collections" />

          <div
            className={classes["collection__main--content"]}
            key={collection.id}
          >
            {collection.map((collection) => {
              return (
                <div className={classes["collection__main--content__item"]}>
                  <img src={collection.image} alt="collection" />
                  <h3
                    className={classes["collection__main--content__item--name"]}
                  >
                    {collection.name}
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
