import React, { useState, useEffect } from "react";
import changeTitle from "../../utils/Change";
import ProductService from "../../APIs/services/ProductService";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs";
import ProductCard from "../../components/ProductCard";
import CategoryService from "../../APIs/services/CategoryService";
import CollectionService from "../../APIs/services/CollectionService";
import ProductList from "../../components/ProductList";
import InputElement from "../../components/InputElement";
import Title from "../../components/Title";
import Head from "../../components/Head";
import { useSearchParams } from "react-router-dom";


function Product() {
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();

  let collectionId = searchParams.get("collectionsIds");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedCollections, setSelectedCollections] = useState([]);
  const queryParams = new URLSearchParams(window.location.search);

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [collections, setCollections] = useState([]);
  const [showTitle, setShowTitle] = useState(true);
  const [showHead, setShowHead] = useState("Products");

  const collection = collections.find(c=>c.id == collectionId);
  

  const GetAllCollections = async () => {
    setCollections(await CollectionService.GetAll());
  };

  const GetAllProduct = async () => {
    setProducts(await ProductService.GetAll());
  };

  let filteredProducts = [...products];

  if (selectedCategories.length > 0 || selectedCollections.length > 0) {
    filteredProducts = products.filter((product) => {
      const categoryMatch =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.categoryId);
      const collectionMatch =
        selectedCollections.length === 0 ||
        selectedCollections.includes(product.collectionId);

      return categoryMatch && collectionMatch;
    });
  }

  const mainStyle = {
    display: "flex",
    flexWrap: "wrap",
  };

  const asideStyle = {
    maxWidth: "32rem",
    width: "100%",
  };

  const GetAllCategories = async () => {
    setCategories(await CategoryService.GetAll());
  };

  useEffect(() => {
    changeTitle("Product");
    GetAllCategories();
    GetAllCollections();
    GetAllProduct();

    const categoriesIds = queryParams.getAll("categoriesIds")[0]
      ? queryParams
          .getAll("categoriesIds")[0]
          .split(",")
          .map((categoryId) => Number(categoryId))
      : [];
    if (categoriesIds.length > 0) {
      setSelectedCategories(categoriesIds);
    }

    const collectionsIds = queryParams.getAll("collectionsIds")[0]
      ? queryParams
          .getAll("collectionsIds")[0]
          .split(",")
          .map((collectionId) => Number(collectionId))
      : [];
    if (collectionsIds.length > 0) {
      setSelectedCollections(collectionsIds);
    }
  }, []);
  const onFilterClick = (filterId, filterType) => {
    if (
      (filterType === "category" && !selectedCategories.includes(filterId)) ||
      (filterType === "collections" && !selectedCollections.includes(filterId))
    ) {
      let updatedCategories = [...selectedCategories];
      let updatedCollections = [...selectedCollections];
      if (filterType === "category") {
        updatedCategories = [...selectedCategories, filterId];
      } else if (filterType === "collections") {
        updatedCollections = [...selectedCollections, filterId];
      }

      setSelectedCategories(updatedCategories);
      setSelectedCollections(updatedCollections);
      const updatedCategoryIds = updatedCategories.join(",");
      const updatedCollectionsIds = updatedCollections.join(",");

      navigate(
        `/products?categoriesIds=${updatedCategoryIds}&collectionsIds=${updatedCollectionsIds}`
      );
    }
  };

  const removeFilterClick = (filterId, filterType) => {
    let removedCategories = [];
    let removedCollections = [];
    let updatedCategoryIds = selectedCategories;
    let updatedCollectionsIds = selectedCollections;

    if (filterType === "category") {
      removedCategories = selectedCategories.filter(
        (category) => category !== filterId
      );
      setSelectedCategories(removedCategories);
      updatedCategoryIds = removedCategories.join(",");
    } else if (filterType === "collections") {
      removedCollections = selectedCollections.filter(
        (collection) => collection !== filterId
      );
      setSelectedCollections(removedCollections);
      updatedCollectionsIds = removedCollections.join(",");
    }

    navigate(
      `/products?categoriesIds=${updatedCategoryIds}&collectionsIds=${updatedCollectionsIds}`
    );
  };

  const HandleSort = (e) => {
    const value = e.target.getAttribute("data-value");
    if (value === "popular") {
      setProducts(
        filteredProducts.sort((a, b) => {
          return b.isPopular - a.isPopular;
        })
      );
    } else if (value === "cheapest") {
      setProducts(
        filteredProducts.sort((a, b) => {
          return a.price - b.price;
        })
      );
    } else if (value === "expensive") {
      setProducts(
        filteredProducts.sort((a, b) => {
          return b.price - a.price;
        })
      );
    }
  };

  useEffect(() => {}, [products]);
useEffect(()=>{
  if (collection) {
    setShowHead(collection.name);
  }
  else{
    setShowHead("Products");
  }
})

  return (
    <main>
      <Breadcrumbs />
      {showTitle ? (
        <Title>
          <h3 className="title__head container">{showHead}</h3>
        </Title>
      ) : null}
      <Head>
        <p className="header--text">
          Et harum quidem rerum facilis est et expedita distinctio. Nam libero
          tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
          minus id quod maxime.
        </p>
        <div class="dropdown">
          <button class="dropbtn btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M4 16L13 16"
                stroke="#B8926A"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M6 11H13"
                stroke="#B8926A"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M8 6L13 6"
                stroke="#B8926A"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M17 4L17 20L20 16"
                stroke="#B8926A"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            SORT BY
          </button>
          <div class="dropdown-content">
            <a href="#" data-value="popular" onClick={HandleSort}>
              POPULAR FIRST
            </a>
            <a href="#" data-value="cheapest" onClick={HandleSort}>
              CHEAPEST FIRST
            </a>
            <a href="#" data-value="expensive" onClick={HandleSort}>
              EXPENSIVE FIRST
            </a>
          </div>
        </div>
      </Head>
      <div className="main">
        <div className="container" style={mainStyle}>
          <aside style={asideStyle}>
            <InputElement
              header="CATEGORIES"
              filterType="category"
              setFilters={setSelectedCategories}
              removeFilterClick={removeFilterClick}
              onFilterClick={onFilterClick}
              filterItems={selectedCategories}
              options={categories}
            />
            <InputElement
              header="COLLECTIONS"
              filterType="collections"
              setFilters={setSelectedCollections}
              removeFilterClick={removeFilterClick}
              onFilterClick={onFilterClick}
              filterItems={selectedCollections}
              options={collections}
            />
          </aside>
          {filteredProducts && (
            <ProductList showTitle={true} products={filteredProducts} />
          )}
        </div>
      </div>

      <ProductCard />
      
    </main>
  );
}

export default Product;
