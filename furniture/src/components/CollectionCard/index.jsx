import React, { useEffect, useState } from "react";
import classes from "./collectionCard.module.scss";
import Title from "../Title";
import axios from "axios";

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
          <div className={classes["collection__main--header"]}>
            <Title
              className="collection__main--header--title"
              title="Collections"
            />
            <p>
              Et harum quidem rerum facilis est et expedita distinctio. Nam
              libero tempore, cum soluta nobis est eligendi optio cumque nihil
              impedit quo minus id quod maxime.
            </p>
          </div>

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
