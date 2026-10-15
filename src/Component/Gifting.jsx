import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

import giftingProducts from "../Data/GiftingData";
import "./Gifting.css";

const Gifting = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [sort, setSort] = useState("recommended");
  const [selectedType, setSelectedType] = useState("All");

  // ADD TO WISHLIST
  const addToWishlist = (product) => {
    try {
      const savedWishlist = JSON.parse(
        localStorage.getItem("velmoraWishlist") || "[]"
      );

      const alreadyExists = savedWishlist.some(
        (item) => String(item.id) === String(product.id)
      );

      if (alreadyExists) {
        alert("This gift is already in your wishlist!");
        return;
      }

      const updatedWishlist = [...savedWishlist, product];

      localStorage.setItem(
        "velmoraWishlist",
        JSON.stringify(updatedWishlist)
      );

      alert("Gift added to your wishlist!");
    } catch (error) {
      console.error("Wishlist error:", error);
      alert("Unable to add this gift to your wishlist.");
    }
  };

  // FILTER
  const filteredProducts =
    selectedType === "All"
      ? giftingProducts
      : giftingProducts.filter(
          (product) => product.type === selectedType
        );

  // SORT
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sort === "low") return a.price - b.price;
    if (sort === "high") return b.price - a.price;
    if (sort === "name") return a.name.localeCompare(b.name);
    return 0;
  });

  return (
    <div className="gifting-page">
      {/* BANNER */}
      <section className="gifting-banner">
        <div className="gifting-banner-content">
          <p>VELMORA GIFTING</p>

          <h1>
            Gifts That Leave
            <br />
            A Lasting Impression
          </h1>

          <span>
            Beautiful fragrances for every special moment.
          </span>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="gifting-products">
        <Container>
          {/* HEADING */}
          <div className="gifting-heading">
            <p>GIFT SOMETHING SPECIAL</p>
            <h2>Fragrance Gifting</h2>

            <span>
              Discover thoughtfully curated fragrances
              made for unforgettable celebrations.
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

          {/* FILTER */}
          {showFilter && (
            <div className="filter-area">
              {[
                { label: "ALL GIFTS", value: "All" },
                { label: "GIFT SETS", value: "Gift Set" },
                { label: "COUPLE GIFTS", value: "Couple Gift" },
              ].map((filter) => (
                <button
                  type="button"
                  key={filter.value}
                  className={
                    selectedType === filter.value
                      ? "active-filter"
                      : ""
                  }
                  onClick={() => setSelectedType(filter.value)}
                >
                  {filter.label}
                </button>
              ))}
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
                <div className="gifting-product-card">
                  {/* IMAGE */}
                  <div className="gifting-product-image">
                    <span className="gifting-discount">
                      {product.discount}
                    </span>

                    {/* WISHLIST HEART */}
                    <button
                      type="button"
                      className="gifting-heart"
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

                    <img
                      src={product.image}
                      alt={product.name}
                    />
                  </div>

                  {/* DETAILS */}
                  <div className="gifting-product-details">
                    <p className="gifting-category">
                      {product.category}
                    </p>

                    <h3>{product.name}</h3>

                    <p className="gifting-fragrance">
                      {product.fragrance}
                    </p>

                    <p className="gifting-size">
                      {product.size}
                    </p>

                    <div className="gifting-price">
                      <strong>₹{product.price}</strong>
                      <del>₹{product.oldPrice}</del>
                    </div>

                    <Link
                      to={`/product/${product.id}`}
                      className="gifting-view-btn"
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
              <h4>No gifts found</h4>
              <p>Try selecting another category.</p>
            </div>
          )}
        </Container>
      </section>
    </div>
  );
};

export default Gifting;
