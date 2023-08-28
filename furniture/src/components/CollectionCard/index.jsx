import React from "react";
import classes from './collectionCard.module.scss'
import Title from "../Title";

function CollectionCard() {
  return (
    <section id={classes.collection}>
    <div className="container">
    <div className={classes["collection__main"]}>
        <div className={classes["collection__main--header"]}>
          <Title className="collection__main--header--title" title="Collections" />
          <p>
            Et harum quidem rerum facilis est et expedita distinctio. Nam libero
            tempore, cum soluta nobis est eligendi optio cumque nihil impedit
            quo minus id quod maxime.
          </p>
        </div>

        <div className={classes["collection__main--content"]}>
          <div className={classes["collection__main--content__item"]}>
            <img
              src="https://s3-alpha-sig.figma.com/img/d9b6/8e11/548ad23561f72bb7ac58ee9002bb63a0?Expires=1694390400&Signature=JqZphq0tF1WREHGd~AcAMcGYTNjDV2LrF6PCNwqMayrw-Dnur~Lg9zezMIvh8-R9vmfZMaqRtc90E1AwuqyrrQRXgpIiu6MezmGVQZZRGUsLun6hRBCBJs4dRUc~CHvHKmXpGFkXFXHOhDg~IAKrtoh2vL~IpHNBvFHHCwOPXY8x7PsxCcL8DQkUVfLQwkuuOa~Nu9OhjsHvsPrkl4hVjMuL6wIq17lbV6SQt9Epr9KSdjx6YVWOYWmR3y1BrqBC3z5k0F9LZ1AnmHX-fiwKBgf16nXKyl03cd291zaQysFn9epPpaseO79J8ls5cayBQFSL09TqwAp~j4Hp9vS1fQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="collection"
            />
            <h3>BEDROOM</h3>
          </div>
          <div className={classes["collection__main--content__item"]}>
            <img
              src="https://s3-alpha-sig.figma.com/img/3ba3/1bc7/0c97e2e915a1be341e2c41b5bb3e1d55?Expires=1694390400&Signature=KPrweOujYXUJzZtwzP6yyWweiCNx5OzAETCLwuEOyV~zVqjKuI-QR3GF8kLMK4dWFgaMjFK34iWF32hHK05GJDdTECIgBeQAlFSntmmbGGlTZCh6jNxQ7v50QpwNcmA-KTm7zwKHX7QzxU3reP7jLCvIzElONnHzBClJgu4uz7x3Bx6uWLjdmnMljQD-lYlFj5JTbaz2bEZQ9grHaMylkUETvgBJQ8j0zkYwEQnCoh0n~valRRkluVw1~vHvYZLo0-SzpRM7mf2kVtMd2v8bhqSJ6hRcWqTUOqzrxuVHKBGbW6~qSk5x~zr5fJaCEFQh43WLTFKF7iPZE8~oll4ZSA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="collection"
            />
            <h3>LIVING ROOM</h3>
          </div>
          <div className={classes["collection__main--content__item"]}>
            <img
              src="https://s3-alpha-sig.figma.com/img/0e0e/dc15/2dea892ac4e3f99eecb4e8bd39effc60?Expires=1694390400&Signature=CRTBe-uyQlEqA8e3f8kT5I0I00IDbuEUyD2m1pJo~fE~yUHAbOhUYjvyLXLYSMm5Iipv2gHlvUevtnVFnfTIkSZh6gVCoScPJ9dv5p-UJDqJfAzVLLzyJUrRmMEiljj6dtzUgkaHRHLYbA1kp6l-8AFrIpsjCiYfLgpP41KevH3BlNGwK5ndIx8sofBbQDy39M1Mnd10mmgzlBTtDyZDJ-5EPa-GN1QgXn4HkoxZdbMvdxC942c~rj-6D~dy1PETSLQQ24IfeVa-F5AAMsJzKkG-dIWZSwjU8s0QwRpzZVQolUEuD52jj~ls2tpMbMHTczTQwtFY7-lVar-MA9jhAQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="collection"
            />
            <h3>KITHCEN</h3>
          </div>
          <div className={classes["collection__main--content__item"]}>
            <img
              src="https://s3-alpha-sig.figma.com/img/67aa/ba98/663a4ddd65289276a0bf7f802fcd6e9a?Expires=1694390400&Signature=Lit-kUIy7BRWCbyspbUBAzMMUOAty6FsKwue28zRdhebrdvmYmoJsl7~kmSVab8abZqWs7n0j~kRyURp3MsaMZAt8MFqCnacNaBgPeI6PGlF6iTOZc1AHvtrk2VZrTJJJ0txySWLQ-Mo8ZTADFLvuBooziXeDIhPk2skJBjv~f8sA5KFxNnrOr0UGVuItdCD3trWgbC8xZuUlq3QRm4JWJGE5Rkom~x2T2BnhAX0QnVwxVIiW4BqVpRWMJ~UmRBSYQX24S-9TPzhOQGa8BESI1qc3GFVNhfGF1rKBTqw9uKTKwt0-641U6EmfQY-TJLALvPSV4ihufMgXnKFb0CVRQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="collection"
            />
            <h3>LIBRARY</h3>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default CollectionCard;
