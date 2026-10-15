import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { products, homeData } from "../Data/data";

import "./Home.css";

export const Home = () => {
  return (
    <div className="home">

      {/* ================= HERO ================= */}

      <section
        className="hero-section"
        style={{
          backgroundImage: `url(${homeData.hero.image})`
        }}
      >

        <div className="hero-content">

          <p className="hero-small-title">
            THE ART OF FRAGRANCE
          </p>

          <h1>
            {homeData.hero.title}
          </h1>

          <p className="hero-description">
            {homeData.hero.text}
          </p>

          <Link
            to="/products"
            className="hero-btn"
          >
            {homeData.hero.button}
          </Link>

        </div>

      </section>


      {/* ================= CATEGORIES ================= */}

      <section className="category-section">

        <Container>

          <div className="section-title">

            <p>EXPLORE VELMORA</p>

            <h2>
              Find Your Perfect Fragrance
            </h2>

          </div>


          <Row>

            {homeData.categories.map((category) => (

              <Col
                lg={4}
                md={4}
                sm={12}
                key={category.id}
              >

                <div
                  className="category-card"
                  style={{
                    backgroundImage:
                      `url(${category.image})`
                  }}
                >

                  <div className="category-overlay">

                    <h3>
                      {category.title}
                    </h3>

                    <Link
                      to={category.link}
                    >
                      {category.button}
                    </Link>

                  </div>

                </div>

              </Col>

            ))}

          </Row>

        </Container>

      </section>


      {/* ================= PRODUCTS ================= */}

      <section className="products-section">

        <Container>

          <div className="section-title">

            <p>OUR FAVOURITES</p>

            <h2>
              Trending Fragrances
            </h2>

          </div>


          <Row>

            {products.slice(0, 4).map((product) => (

              <Col
                lg={3}
                md={6}
                sm={6}
                xs={12}
                key={product.id}
                className="mb-4"
              >

                <div className="product-card">

                  {/* Image */}

                  <div className="product-image">

                    <span className="discount">
                      {product.discount}
                    </span>

                    <button className="heart-button">
                      ♡
                    </button>

                    <img
                      src={product.image}
                      alt={product.name}
                    />

                  </div>


                  {/* Details */}

                  <div className="product-details">

                    <p className="product-category">
                      {product.category}
                    </p>

                    <h4>
                      {product.name}
                    </h4>

                    <div className="product-price">

                      <span>
                        ₹{product.price}
                      </span>

                      <del>
                        ₹{product.oldPrice}
                      </del>

                    </div>


                    <Link
                      to={`/product/${product.id}`}
                      className="product-btn"
                    >
                      VIEW PRODUCT
                    </Link>

                  </div>

                </div>

              </Col>

            ))}

          </Row>


          <div className="view-all">

            <Link to="/products">
              VIEW ALL PERFUMES
            </Link>

          </div>

        </Container>

      </section>


      {/* ================= COLLECTION ================= */}

      <section
        className="collection-section"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(0, 0, 0, 0.45),
              rgba(0, 0, 0, 0.45)
            ),
            url(${homeData.collection.image})
          `
        }}
      >

        <div className="collection-content">

          <p>
            {homeData.collection.text}
          </p>

          <h2>
            {homeData.collection.title}
          </h2>

          <Link
            to={homeData.collection.link}
          >
            {homeData.collection.button}
          </Link>

        </div>

      </section>


      {/* ================= ABOUT ================= */}

      <section className="about-section">

        <Container>

          <Row className="align-items-center">

            <Col lg={6}>

              <div className="about-image">

                <img
                  src={homeData.hero.image}
                  alt="Velmora Perfume"
                />

              </div>

            </Col>


            <Col lg={6}>

              <div className="about-content">

                <p className="about-small-title">
                  THE VELMORA STORY
                </p>

                <h2>
                  The Art of Perfume
                </h2>

                <p>
                  Velmora is created for those who
                  believe fragrance is more than just
                  a scent.
                </p>

                <p>
                  Every fragrance is carefully selected
                  to express personality, memories and
                  unforgettable moments.
                </p>

                <Link to="/about">
                  KNOW MORE
                </Link>

              </div>

            </Col>

          </Row>

        </Container>

      </section>


      {/* ================= FEATURES ================= */}

      <section className="features-section">

        <Container>

          <Row>

            {homeData.features.map((feature) => (

              <Col
                lg={4}
                md={4}
                sm={12}
                key={feature.id}
              >

                <div className="feature-box">

                  <i
                    className={`bi ${feature.icon}`}
                  ></i>

                  <h5>
                    {feature.title}
                  </h5>

                  <p>
                    {feature.text}
                  </p>

                </div>

              </Col>

            ))}

          </Row>

        </Container>

      </section>

    </div>
  );
};

export default Home;