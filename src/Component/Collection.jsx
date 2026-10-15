import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

import collectionData from "../Data/CollectionData";
import "./Collection.css";

export const Collections = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [sort, setSort] = useState("recommended");
  const [selectedType, setSelectedType] = useState("All");

  const products = collectionData.products;

  // ADD PRODUCT TO WISHLIST
  const addToWishlist = (product) => {
    try {
      const savedWishlist = JSON.parse(
        localStorage.getItem("velmoraWishlist") || "[]"
      );

      const alreadyExists = savedWishlist.some(
        (item) => item.id === product.id && item.name === product.name
      );

      if (alreadyExists) {
        alert("This perfume is already in your wishlist!");
        return;
      }

      const updatedWishlist = [...savedWishlist, product];

      localStorage.setItem(
        "velmoraWishlist",
        JSON.stringify(updatedWishlist)
      );

      alert("Perfume added to your wishlist!");
    } catch (error) {
      console.error("Unable to update wishlist:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  // FILTER PRODUCTS
  const filteredProducts =
    selectedType === "All"
      ? products
      : products.filter((product) => product.type === selectedType);

  // SORT PRODUCTS
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sort === "low") return a.price - b.price;
    if (sort === "high") return b.price - a.price;
    if (sort === "name") return a.name.localeCompare(b.name);
    return 0;
  });

  return (
    <div className="collections-page">
      {/* BANNER */}
      <section
        className="collections-banner"
        style={{
          backgroundImage: `url(${collectionData.banner.image})`,
        }}
      >
        <div className="collections-banner-content">
          <p>VELMORA FRAGRANCES</p>
          <h1>{collectionData.banner.title}</h1>
          <span>{collectionData.banner.subtitle}</span>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section className="collections-products">
        <Container>
          {/* HEADING */}
          <div className="collections-heading">
            <p>EXPLORE VELMORA</p>
            <h2>Our Collections</h2>
            <span>
              Discover fragrances curated for every personality and occasion.
            </span>
          </div>

          {/* TOOLBAR */}
          <div className="products-toolbar">
            <button
              type="button"
              className="filter-btn"
              onClick={() => setShowFilter(!showFilter)}
            >
              FILTER
            </button>

            <div className="sort-box">
              <label>SORT BY</label>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="recommended">Recommended</option>
                <option value="low">Price Low To High</option>
                <option value="high">Price High To Low</option>
                <option value="name">Name</option>
              </select>
            </div>
          </div>

          {/* FILTER AREA */}
          {showFilter && (
            <div className="filter-area">
              {["All", "Men", "Women", "Couple Combo", "Unisex", "Gift Set"].map(
                (type) => (
                  <button
                    type="button"
                    key={type}
                    className={selectedType === type ? "active-filter" : ""}
                    onClick={() => setSelectedType(type)}
                  >
                    {type === "All" ? "ALL" : type.toUpperCase()}
                  </button>
                )
              )}
            </div>
          )}

          {/* PRODUCT GRID */}
          <Row>
            {sortedProducts.map((product) => (
              <Col
                lg={3}
                md={4}
                sm={6}
                xs={12}
                key={`${product.id}-${product.name}`}
                className="mb-4"
              >
                <div className="collections-product-card">
                  {/* IMAGE */}
                  <div className="collections-product-image">
                    <span className="collections-discount">
                      {product.discount}
                    </span>

                    {/* WISHLIST HEART */}
                    <button
                      type="button"
                      className="collections-heart"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        addToWishlist(product);
                      }}
                      aria-label={`Add ${product.name} to wishlist`}
                      title="Add to Wishlist"
                    >
                      <FaHeart />
                    </button>

                    <img src={product.image} alt={product.name} />
                  </div>

                  {/* PRODUCT DETAILS */}
                  <div className="collections-product-details">
                    <p className="collections-category">
                      {product.category}
                    </p>

                    <h3>{product.name}</h3>

                    <p className="collections-fragrance">
                      {product.fragrance}
                    </p>

                    <p className="collections-size">{product.size}</p>

                    {/* PRICE */}
                    <div className="collections-price">
                      <strong>₹{product.price}</strong>
                      <del>₹{product.oldPrice}</del>
                    </div>

                    {/* VIEW PRODUCT */}
                    <Link
                      to={`/product/${product.id}`}
                      className="collections-view-btn"
                    >
                      VIEW PRODUCT
                    </Link>
                  </div>
                </div>
              </Col>
            ))}
          </Row>

          {/* NO PRODUCTS */}
          {sortedProducts.length === 0 && (
            <div className="no-products">
              <h4>No fragrances found</h4>
              <p>Try selecting another collection.</p>
            </div>
          )}
        </Container>
      </section>
    </div>
  );
};

export default Collections;