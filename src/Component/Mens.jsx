import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { menPageData } from "../Data/MensData";
import { FaHeart } from "react-icons/fa";
import "./Mens.css";

export const Men = () => {
  const [sort, setSort] = useState("recommended");

  const [selectedCategory, setSelectedCategory] = useState("All");

  const [showFilter, setShowFilter] = useState(false);

  // Add product to wishlist
  const addToWishlist = (product) => {
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
  };

  // Filter products
  let filteredProducts =
    selectedCategory === "All"
      ? menPageData.products
      : menPageData.products.filter(
          (product) => product.fragrance === selectedCategory
        );

  // Sort products
  if (sort === "low") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => a.price - b.price
    );
  }

  if (sort === "high") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => b.price - a.price
    );
  }

  
  return (
    <div className="men-page">
      {/* BANNER */}
      <section
        className="men-banner"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(0,0,0,0.35),
              rgba(0,0,0,0.35)
            ),
            url(${menPageData.banner.image})
          `,
        }}
      >
        <div className="men-banner-content">
          <p>VELMORA</p>

          <h1>{menPageData.banner.title}</h1>

          <span>{menPageData.banner.subtitle}</span>
        </div>
      </section>

      {/* PAGE TITLE */}
      <section className="men-products">
        <Container>
          <div className="men-heading">
            <p>VELMORA FOR HIM</p>

            <h2>Men's Perfumes</h2>

            <span>
              Discover fragrances designed for confidence, style and
              unforgettable moments.
            </span>
          </div>

          {/* TOOLBAR */}
          <div className="products-toolbar">
            <button
              className="filter-btn"
              onClick={() => setShowFilter(!showFilter)}
            >
              ☰ FILTER
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
              </select>
            </div>
          </div>

          {/* FILTERS */}
          {showFilter && (
            <div className="filter-area">
              <button
                className={selectedCategory === "All" ? "active-filter" : ""}
                onClick={() => setSelectedCategory("All")}
              >
                ALL
              </button>

              <button
                className={
                  selectedCategory === "Woody & Amber"
                    ? "active-filter"
                    : ""
                }
                onClick={() => setSelectedCategory("Woody & Amber")}
              >
                WOODY & AMBER
              </button>

              <button
                className={
                  selectedCategory === "Fresh & Woody"
                    ? "active-filter"
                    : ""
                }
                onClick={() => setSelectedCategory("Fresh & Woody")}
              >
                FRESH & WOODY
              </button>

              <button
                className={
                  selectedCategory === "Aquatic & Fresh"
                    ? "active-filter"
                    : ""
                }
                onClick={() => setSelectedCategory("Aquatic & Fresh")}
              >
                AQUATIC
              </button>
            </div>
          )}

          {/* PRODUCT GRID */}
          <Row>
            {filteredProducts.map((product) => (
              <Col
                lg={3}
                md={4}
                sm={6}
                xs={12}
                key={product.id}
                className="mb-4"
              >
                <div className="men-product-card">
                  {/* IMAGE */}
                  <div className="men-product-image">
                    <span className="men-discount">
                      {product.discount}
                    </span>

                    <button
                      type="button"
                      className="men-heart"
                      onClick={() => addToWishlist(product)}
                      aria-label={`Add ${product.name} to wishlist`}
                      title="Add to Wishlist"
                    >
                      <FaHeart />
                    </button>

                    <img src={product.image} alt={product.name} />
                  </div>

                  {/* DETAILS */}
                  <div className="men-product-details">
                    <p className="men-category">{product.category}</p>

                    <h3>{product.name}</h3>

                    <p className="men-fragrance">{product.fragrance}</p>

                    <p className="men-size">{product.size}</p>

                    <div className="men-price">
                      <strong>₹{product.price}</strong>

                      <del>₹{product.oldPrice}</del>
                    </div>

                    <Link
                      to={`/product/${product.id}`}
                      className="men-view-btn"
                    >
                      VIEW PRODUCT
                    </Link>
                  </div>
                </div>
              </Col>
            ))}
          </Row>

          {filteredProducts.length === 0 && (
            <p className="text-center py-5">
              No perfumes found in this category.
            </p>
          )}
        </Container>
      </section>
    </div>
  );
};

export default Men;