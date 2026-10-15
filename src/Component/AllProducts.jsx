import React, { useMemo, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaSearch, FaHeart } from "react-icons/fa";

import allProductsData from "../Data/Products";
import "./AllProducts.css";

const AllProducts = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("default");
  const [wishlist, setWishlist] = useState(() => {
    try {
      return JSON.parse(
        localStorage.getItem("velmoraWishlist") || "[]"
      );
    } catch {
      return [];
    }
  });

  const productList = Array.isArray(allProductsData)
    ? allProductsData
    : [];

  const filteredProducts = useMemo(() => {
    let result = productList.filter((product) => {
      const name = (product.name || "").toLowerCase();
      const productCategory = (
        product.category ||
        product.type ||
        ""
      ).toLowerCase();
      const fragrance = (
        product.fragrance ||
        product.description ||
        ""
      ).toLowerCase();

      const query = search.toLowerCase();

      const matchesSearch =
        name.includes(query) ||
        productCategory.includes(query) ||
        fragrance.includes(query);

      let normalizedCategory = productCategory;

      if (productCategory.includes("unisex")) {
        normalizedCategory = "unisex";
      } else if (productCategory.includes("women")) {
        normalizedCategory = "women";
      } else if (productCategory.includes("men")) {
        normalizedCategory = "men";
      }

      const matchesCategory =
        category === "All" ||
        normalizedCategory === category.toLowerCase();

      return matchesSearch && matchesCategory;
    });

    if (sort === "low") {
      result.sort(
        (a, b) => Number(a.price || 0) - Number(b.price || 0)
      );
    } else if (sort === "high") {
      result.sort(
        (a, b) => Number(b.price || 0) - Number(a.price || 0)
      );
    } else if (sort === "name") {
      result.sort((a, b) =>
        (a.name || "").localeCompare(b.name || "")
      );
    }

    return result;
  }, [productList, search, category, sort]);

  const toggleWishlist = (product) => {
    const exists = wishlist.some(
      (item) => String(item.id) === String(product.id)
    );

    const updatedWishlist = exists
      ? wishlist.filter(
          (item) => String(item.id) !== String(product.id)
        )
      : [...wishlist, product];

    setWishlist(updatedWishlist);
    localStorage.setItem(
      "velmoraWishlist",
      JSON.stringify(updatedWishlist)
    );
  };

  return (
    <div className="velmora-all-products">

      {/* BANNER */}
      <section className="all-products-banner">
        <div className="all-products-banner-content">
          <p>THE ART OF FRAGRANCE</p>
          <h1>All Fragrances</h1>
          <span>
            Discover a scent for every mood, moment and memory.
          </span>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section className="all-products-section">
        <Container fluid className="all-products-container">

          {/* HEADING */}
          <div className="all-products-heading">
            <p className="all-products-eyebrow">
              EXPLORE VELMORA
            </p>

            <h2>Our Fragrance Collection</h2>

            <p className="all-products-subtitle">
              Find your next signature fragrance.
            </p>

            <span className="all-products-count">
              {filteredProducts.length} PRODUCTS
            </span>
          </div>

          {/* SEARCH AND FILTER */}
          <div className="all-products-toolbar">
            <div className="all-products-search">
              <FaSearch />

              <input
                type="search"
                placeholder="Search perfumes..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                aria-label="Search perfumes"
              />
            </div>

            <div className="all-products-controls">
              <select
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                aria-label="Filter by category"
              >
                <option value="All">All Fragrances</option>
                <option value="Men">Men</option>
                <option value="Women">Women</option>
                <option value="Unisex">Unisex</option>
              </select>

              <div className="all-products-sort">
                <label htmlFor="all-products-sort">
                  SORT BY
                </label>

                <select
                  id="all-products-sort"
                  value={sort}
                  onChange={(event) => setSort(event.target.value)}
                >
                  <option value="default">Recommended</option>
                  <option value="low">Price: Low to High</option>
                  <option value="high">Price: High to Low</option>
                  <option value="name">Name: A to Z</option>
                </select>
              </div>
            </div>
          </div>

          {/* PRODUCT GRID */}
          {filteredProducts.length > 0 ? (
            <Row className="all-products-grid">
              {filteredProducts.map((product) => {
                const image =
                  product.image ||
                  product.img ||
                  product.imageUrl ||
                  "";

                const fragrance =
                  product.fragrance ||
                  product.description ||
                  "";

                const size =
                  product.size ||
                  product.quantity ||
                  product.volume ||
                  "100 ML";

                const isFavorite = wishlist.some(
                  (item) =>
                    String(item.id) === String(product.id)
                );

                return (
                  <Col
                    xs={6}
                    md={4}
                    lg={3}
                    key={product.id}
                    className="all-products-column"
                  >
                    <div className="all-product-card">

                      {/* PRODUCT IMAGE */}
                      <Link
                        to={`/product/${product.id}`}
                        className="all-product-image"
                      >
                        {image ? (
                          <img
                            src={image}
                            alt={product.name || "Velmora fragrance"}
                            loading="lazy"
                          />
                        ) : (
                          <div className="all-product-no-image">
                            <span>VELMORA</span>
                            <p>FRAGRANCE</p>
                          </div>
                        )}

                        {product.discount && (
                          <span className="all-product-badge">
                            {typeof product.discount === "number"
                              ? `${product.discount}% OFF`
                              : product.discount}
                          </span>
                        )}

                        <span className="all-product-overlay">
                          VIEW PRODUCT
                        </span>
                      </Link>

                      {/* HEART BUTTON */}
                      <button
                        type="button"
                        className={`all-product-heart ${
                          isFavorite ? "is-favorite" : ""
                        }`}
                        aria-label={
                          isFavorite
                            ? `Remove ${product.name} from wishlist`
                            : `Add ${product.name} to wishlist`
                        }
                        aria-pressed={isFavorite}
                        onClick={() => toggleWishlist(product)}
                      >
                        <FaHeart />
                      </button>

                      {/* PRODUCT DETAILS */}
                      <div className="all-product-info">
                        <p className="all-product-category">
                          {product.type || product.category || "FRAGRANCE"}
                        </p>

                        <h3>
                          <Link to={`/product/${product.id}`}>
                            {product.name}
                          </Link>
                        </h3>

                        <p className="all-product-fragrance">
                          {fragrance}
                        </p>

                        <p className="all-product-size">
                          {size}
                        </p>

                        {/* PRICE */}
                        <div className="all-product-price">
                          <strong>
                            ₹{Number(product.price || 0).toLocaleString("en-IN")}
                          </strong>

                          {product.oldPrice && (
                            <del>
                              ₹{Number(product.oldPrice).toLocaleString("en-IN")}
                            </del>
                          )}
                        </div>

                        {/* VIEW PRODUCT BUTTON */}
                        <Link
                          to={`/product/${product.id}`}
                          className="all-product-button"
                        >
                          VIEW PRODUCT
                        </Link>
                      </div>
                    </div>
                  </Col>
                );
              })}
            </Row>
          ) : (
            <div className="all-products-empty">
              <h3>No Fragrances Found</h3>

              <p>
                Try another search or select a different category.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setCategory("All");
                  setSort("default");
                }}
              >
                SHOW ALL PRODUCTS
              </button>
            </div>
          )}
        </Container>
      </section>
    </div>
  );
};

export default AllProducts;