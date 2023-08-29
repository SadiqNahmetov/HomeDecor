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
          <p >
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
            <h3 className={classes["collection__main--content__item--name"]}>BEDROOM</h3>
          </div>
          <div className={classes["collection__main--content__item"]}>
            <img
              src="https://s3-alpha-sig.figma.com/img/3ba3/1bc7/0c97e2e915a1be341e2c41b5bb3e1d55?Expires=1694390400&Signature=KPrweOujYXUJzZtwzP6yyWweiCNx5OzAETCLwuEOyV~zVqjKuI-QR3GF8kLMK4dWFgaMjFK34iWF32hHK05GJDdTECIgBeQAlFSntmmbGGlTZCh6jNxQ7v50QpwNcmA-KTm7zwKHX7QzxU3reP7jLCvIzElONnHzBClJgu4uz7x3Bx6uWLjdmnMljQD-lYlFj5JTbaz2bEZQ9grHaMylkUETvgBJQ8j0zkYwEQnCoh0n~valRRkluVw1~vHvYZLo0-SzpRM7mf2kVtMd2v8bhqSJ6hRcWqTUOqzrxuVHKBGbW6~qSk5x~zr5fJaCEFQh43WLTFKF7iPZE8~oll4ZSA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="collection"
            />
            <h3 className={classes["collection__main--content__item--name"]}>LIVING ROOM</h3>
          </div>
          <div className={classes["collection__main--content__item"]}>
            <img
              src="https://s3-alpha-sig.figma.com/img/0e0e/dc15/2dea892ac4e3f99eecb4e8bd39effc60?Expires=1694390400&Signature=CRTBe-uyQlEqA8e3f8kT5I0I00IDbuEUyD2m1pJo~fE~yUHAbOhUYjvyLXLYSMm5Iipv2gHlvUevtnVFnfTIkSZh6gVCoScPJ9dv5p-UJDqJfAzVLLzyJUrRmMEiljj6dtzUgkaHRHLYbA1kp6l-8AFrIpsjCiYfLgpP41KevH3BlNGwK5ndIx8sofBbQDy39M1Mnd10mmgzlBTtDyZDJ-5EPa-GN1QgXn4HkoxZdbMvdxC942c~rj-6D~dy1PETSLQQ24IfeVa-F5AAMsJzKkG-dIWZSwjU8s0QwRpzZVQolUEuD52jj~ls2tpMbMHTczTQwtFY7-lVar-MA9jhAQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="collection"
            />
            <h3 className={classes["collection__main--content__item--name"]}>KITHCEN</h3>
          </div>
          <div className={classes["collection__main--content__item"]}>
            <img
              src="https://s3-alpha-sig.figma.com/img/67aa/ba98/663a4ddd65289276a0bf7f802fcd6e9a?Expires=1694390400&Signature=Lit-kUIy7BRWCbyspbUBAzMMUOAty6FsKwue28zRdhebrdvmYmoJsl7~kmSVab8abZqWs7n0j~kRyURp3MsaMZAt8MFqCnacNaBgPeI6PGlF6iTOZc1AHvtrk2VZrTJJJ0txySWLQ-Mo8ZTADFLvuBooziXeDIhPk2skJBjv~f8sA5KFxNnrOr0UGVuItdCD3trWgbC8xZuUlq3QRm4JWJGE5Rkom~x2T2BnhAX0QnVwxVIiW4BqVpRWMJ~UmRBSYQX24S-9TPzhOQGa8BESI1qc3GFVNhfGF1rKBTqw9uKTKwt0-641U6EmfQY-TJLALvPSV4ihufMgXnKFb0CVRQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="collection"
            />
            <h3 className={classes["collection__main--content__item--name"]}>LIBRARY</h3>
          </div>
          <div className={classes["collection__main--content__item"]}>
            <img
              src="https://s3-alpha-sig.figma.com/img/ae99/2450/c20c2eedb6f1aa6418b80e76ab3d08cc?Expires=1694390400&Signature=na2x97u4t9ApiFFJVg98s-6r5Q7V5mBz9SDkvmJUkKqaI7Ykm2wfG9m0bSgB21GyK85MOGlIgzBiUNM0tvBnsSMzkAEVrbc88PgXDz6sH2jidsF5M8QdPv1HpfMm6lSv6BHpqv21hSsq336tdfHhme-uhF8BhaBB0ZAxeduVZkisbYnEC9j8WB4RpChWXjGrSNnaAYjFGDqdj0LFO35mx7wEOyCyOtV~Cz-B-DrdyZNvp7-Cc-16N3CTisYsHQDiQCe7vmHQ6gL3HzpyaJiMhw3RkCS6HujHYbLJ2C15V2x-tcW7crGXjDxedauqNzQp-OB53kOTTcPbzOctlOaQVw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="collection"
            />
            <h3 className={classes["collection__main--content__item--name"]}>OFFICE</h3>
          </div>
          <div className={classes["collection__main--content__item"]}>
            <img
              src="https://s3-alpha-sig.figma.com/img/ded8/9ed8/15cdf81ef8d45e035ef1af8dd15d77d7?Expires=1694390400&Signature=Q9e9F1cTU~jQqsPV1qECOnC7IcoeoOk5n~8ZPZ2BqytzXK08EeurQ81C8lPz86V5-gUxexdaC~cCJ0kcCKvLP3GVoEOXHGItiGNmMFBH~je40p4QeOF~YYKAteYz2pVYf9GINKsvCJt8kbTn0w-lad6M7DHiuCoLRpdR68tn~6sYhBr-nq4Q59Te5NCeU96b2HxOb9hD8AZWGww4QURXzqYkKBiWJgTJhQztDxtpJUs8Eafgj2t36RI7W4IIPRYNEwSVWyZx0qi5IU4MMiNhlWdb3s4z2OrFAKe9yVHRwZAhOYfQflnfJUWpW1mWtuG7jUUcXAAv-odrvOf5~Eyagg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="collection"
            />
            <h3 className={classes["collection__main--content__item--name"]}>LAUNDRY ROOM</h3>
          </div>
          <div className={classes["collection__main--content__item"]}>
            <img
              src="https://s3-alpha-sig.figma.com/img/2fec/f199/3d32458cd54ecbd8d8e6747ae1db96c4?Expires=1694390400&Signature=qO6S~xn~mcAuVOM8iLe-Qo6fPfMsU2DVSocsIIb40TSEWA1c-FOk3pUWyRCWh287U~bSzy~58aAALJEF7u~a9GrFOVKLx3EzZ~JUqP368tSBjvHTKg4zvwQlDgUHqQ7~G~dAxkoJMVTkvPsO9qCKKjAJueVuZTApFTlcjaDlp3MMtMi5h4xTh9B4c5t0zc0n6Qt4pffPEDlUi6yF0E8uNTa-pl-2jKf4X37v2g-UFkvJ3WVFrU-xHPZBSzShvA6Y3B8F-H2EHACF7fYWH~r2l5a62yrkxsN2ZuPoF3a4x6q-eo6FAYZRuANylOcjiwOr7xfDKpxddLAjas356gmG0g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="collection"
            />
            <h3 className={classes["collection__main--content__item--name"]}>GUEST ROOM</h3>
          </div>
          <div className={classes["collection__main--content__item"]}>
            <img
              src="https://s3-alpha-sig.figma.com/img/2625/da33/3ac66c54d2bf5a3481d2e4e0c2bd9158?Expires=1694390400&Signature=p7-27sVmxt~O6hjUwnxZYGtfzixiCZioVrE-BmOz5hrK-UdeV0dxyHcyhbVLZrsG6CRKaReE8OiMSvhD-yn2gYBt56uNUHU-tig56g4Redn8~22sTfHU4R6TVKXoxDFGDKrwlIblitU3r2FF1~clev1ZIK2jioY5tXs254DE~2xYl1qD3p4v2x5P7qYBTGri6IG15JxJXq1NX~WZFlaOz8J6vMNtLOr-LHtA3JV0NvKMU52-uOw~DoPerVyeCMqmm0Bm-HRYRqvF6HTIZQTSYNFLHNuFw6xJ~GB3dWWwb8IkMGMEhL-cHI3udtgAe2Bzg1bOouq3AvNWiIm0bu82tw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="collection"
            />
            <h3 className={classes["collection__main--content__item--name"]}>FAMILY ROOM</h3>
          </div>
          <div className={classes["collection__main--content__item"]}>
            <img
              src="https://s3-alpha-sig.figma.com/img/629a/424a/ccdfc649c7aeee6a63e580d48c745949?Expires=1694390400&Signature=odRXyEjkzrZk2Sp3347QJPoAw1pHTaAfxDKn1~cAAujqG8BNOObbQXhMBjg9MV30ixDhm-FITt8nIyRexisQOOFL2WMuyHat4o5U9M309M-OYVTSg5B1XakHs2NwwcCN1wzV~HNbqZmhn7B7WYPv1SDuvVBT1VeP7iPMe~OM37f-p3OLNwP22fJhqOnT-KDUiGLZ9Cw-Q1szr1ZjvgE4z6T7sae7kW59CTpFBsBo0dkvR4jpKJN2ffFPdjSJJERRIlE0QIxmn-sYdI9OBMTdAbrOdkNw~ojPoJnmj23-zezC7ynRySHYyk-MurMOFG8ZS7Hbxa5cvaaMW23-zaPXJg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="collection"
            />
            <h3 className={classes["collection__main--content__item--name"]}>BATHROOM</h3>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default CollectionCard;
