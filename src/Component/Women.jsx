import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

import womenPageData from "../Data/WomenData";
import "./Women.css";

const Women = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [sort, setSort] = useState("recommended");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const products = womenPageData.products;

  // ADD PRODUCT TO WISHLIST
  const addToWishlist = (product) => {
    try {
      const savedWishlist = JSON.parse(
        localStorage.getItem("velmoraWishlist") || "[]"
      );

      const alreadyExists = savedWishlist.some(
        (item) => item.id === product.id
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
      console.error("Wishlist error:", error);
      alert("Unable to save this perfume. Please try again.");
    }
  };

  // FILTER PRODUCTS
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) => product.fragrance === selectedCategory
        );

  // SORT PRODUCTS
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sort === "low") {
      return a.price - b.price;
    }

    if (sort === "high") {
      return b.price - a.price;
    }

    if (sort === "name") {
      return a.name.localeCompare(b.name);
    }

    return 0;
  });

  return (
    <div className="women-page">
      {/* BANNER */}
      <section
        className="women-banner"
        style={{
          backgroundImage: `url(${womenPageData.banner.image})`,
        }}
      >
        <div className="women-banner-content">
          <p>VELMORA COLLECTION</p>

          <h1>{womenPageData.banner.title}</h1>

          <span>{womenPageData.banner.subtitle}</span>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section className="women-products">
        <Container>
          {/* HEADING */}
          <div className="women-heading">
            <p>EXPLORE VELMORA</p>

            <h2>Women's Perfumes</h2>

            <span>
              Discover elegant fragrances crafted for unforgettable moments.
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
              <button
                type="button"
                className={selectedCategory === "All" ? "active-filter" : ""}
                onClick={() => setSelectedCategory("All")}
              >
                ALL
              </button>

              <button
                type="button"
                className={
                  selectedCategory === "Rose & Vanilla"
                    ? "active-filter"
                    : ""
                }
                onClick={() => setSelectedCategory("Rose & Vanilla")}
              >
                ROSE
              </button>

              <button
                type="button"
                className={
                  selectedCategory === "Jasmine & Musk"
                    ? "active-filter"
                    : ""
                }
                onClick={() => setSelectedCategory("Jasmine & Musk")}
              >
                JASMINE
              </button>

              <button
                type="button"
                className={
                  selectedCategory === "Peony & Amber"
                    ? "active-filter"
                    : ""
                }
                onClick={() => setSelectedCategory("Peony & Amber")}
              >
                PEONY
              </button>

              <button
                type="button"
                className={
                  selectedCategory === "Orchid & Vanilla"
                    ? "active-filter"
                    : ""
                }
                onClick={() => setSelectedCategory("Orchid & Vanilla")}
              >
                ORCHID
              </button>

              <button
                type="button"
                className={
                  selectedCategory === "Pear & Vanilla"
                    ? "active-filter"
                    : ""
                }
                onClick={() => setSelectedCategory("Pear & Vanilla")}
              >
                VANILLA
              </button>
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
                key={product.id}
                className="mb-4"
              >
                <div className="women-product-card">
                  {/* IMAGE */}
                  <div className="women-product-image">
                    <span className="women-discount">
                      {product.discount}
                    </span>

                    {/* WISHLIST HEART */}
                    <button
                      type="button"
                      className="women-heart"
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

                  {/* DETAILS */}
                  <div className="women-product-details">
                    <p className="women-category">
                      {product.category}
                    </p>

                    <h3>{product.name}</h3>

                    <p className="women-fragrance">
                      {product.fragrance}
                    </p>

                    <p className="women-size">{product.size}</p>

                    {/* PRICE */}
                    <div className="women-price">
                      <strong>₹{product.price}</strong>
                      <del>₹{product.oldPrice}</del>
                    </div>

                    {/* VIEW PRODUCT */}
                    <Link
                      to={`/product/${product.id}`}
                      className="women-view-btn"
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
              <p>Try selecting another category.</p>
            </div>
          )}
        </Container>
      </section>
    </div>
  );
};

export default Women;