import React, { useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { FaSearch, FaShoppingBag } from "react-icons/fa";

import { products } from "../Data/data";
import "./Search.css";

const Search = () => {
  const [searchParams] = useSearchParams();
  const searchText = searchParams.get("q") || "";

  const filteredProducts = useMemo(() => {
    const query = searchText.toLowerCase().trim();

    if (!query) return [];

    return products.filter((product) => {
      const searchableText = [
        product.name,
        product.category,
        product.type,
        product.description,
        product.fragrance,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return searchableText.includes(query);
    });
  }, [searchText]);

  return (
    <div className="velmora-search-page">
      <div className="search-page-banner">
        <p>THE ART OF FRAGRANCE</p>
        <h1>Discover Your Scent</h1>
        <span>Find a fragrance that feels uniquely yours.</span>
      </div>

      <Container className="search-results-container">
        <div className="search-results-heading">
          <div>
            <p className="search-eyebrow">VELMORA COLLECTION</p>
            <h2>Search Results</h2>
            <p className="search-query">
              {searchText
                ? `Results for "${searchText}"`
                : "Search for your favourite fragrance"}
            </p>
          </div>

          <span className="search-result-count">
            {filteredProducts.length}{" "}
            {filteredProducts.length === 1 ? "PRODUCT" : "PRODUCTS"}
          </span>
        </div>

        {filteredProducts.length > 0 ? (
          <Row className="g-4">
            {filteredProducts.map((product) => (
              <Col key={product.id} xs={6} md={4} lg={3}>
                <div className="search-product-card">
                  <Link
                    to={`/product/${product.id}`}
                    className="search-product-image"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                    />
                    <span className="search-view-label">
                      VIEW DETAILS
                    </span>
                  </Link>

                  <div className="search-product-info">
                    {product.category && (
                      <p className="search-product-category">
                        {product.category}
                      </p>
                    )}

                    <h3>
                      <Link to={`/product/${product.id}`}>
                        {product.name}
                      </Link>
                    </h3>

                    <p className="search-product-price">
                      ₹{Number(product.price || 0).toLocaleString("en-IN")}
                    </p>

                    <Link
                      to={`/product/${product.id}`}
                      className="search-product-button"
                    >
                      <FaShoppingBag /> VIEW PRODUCT
                    </Link>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        ) : (
          <div className="search-no-results">
            <FaSearch className="no-results-icon" />

            <h3>
              {searchText ? "No Fragrances Found" : "Find Your Signature Scent"}
            </h3>

            <p>
              {searchText
                ? "We couldn't find a matching perfume. Try another name or explore our collections."
                : "Use the search icon in the navbar to search for your favourite perfume."}
            </p>

            <Link to="/collections" className="search-explore-button">
              EXPLORE COLLECTIONS
            </Link>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Search;