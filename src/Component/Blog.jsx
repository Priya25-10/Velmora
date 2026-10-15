import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import blogData from "../Data/BlogData";

import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog-page">

      {/* ================= BLOG BANNER ================= */}

      <section
        className="blog-banner"
        style={{
          backgroundImage: `linear-gradient(
            rgba(0, 0, 0, 0.35),
            rgba(0, 0, 0, 0.35)
          ), url(${blogData.banner.image})`
        }}
      >

        <div className="blog-banner-content">

          <p>THE VELMORA JOURNAL</p>

          <h1>
            {blogData.banner.title}
          </h1>

          <span>
            {blogData.banner.subtitle}
          </span>

        </div>

      </section>


      {/* ================= BLOG SECTION ================= */}

      <section className="blog-section">

        <Container>

          {/* ================= HEADING ================= */}

          <div className="blog-heading">

            <p>EXPLORE VELMORA</p>

            <h2>
              Stories Behind The Scent
            </h2>

            <span>
              Discover fragrance tips, inspiration,
              gifting ideas and the art of perfume.
            </span>

          </div>


          {/* ================= BLOG CARDS ================= */}

          <Row>

            {blogData.posts.map((post) => (

              <Col
                lg={4}
                md={6}
                sm={6}
                xs={12}
                key={post.id}
                className="mb-4"
              >

                <article className="blog-card">

                  {/* BLOG IMAGE */}

                  <div className="blog-image">

                    <img
                      src={post.image}
                      alt={post.title}
                    />

                  </div>


                  {/* BLOG CONTENT */}

                  <div className="blog-card-content">

                    <p className="blog-category">
                      {post.category}
                    </p>

                    <h3>
                      {post.title}
                    </h3>

                    <p className="blog-description">
                      {post.description}
                    </p>


                    <div className="blog-card-footer">

                      <span>
                        {post.readTime}
                      </span>

                      <Link
                        to={`/blog/${post.id}`}
                        className="read-more"
                      >
                        READ MORE →
                      </Link>

                    </div>

                  </div>

                </article>

              </Col>

            ))}

          </Row>

        </Container>

      </section>

    </div>
  );
};

export default Blog;