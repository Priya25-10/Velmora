import React from "react";
import { Link, useParams } from "react-router-dom";

import blogData from "../Data/BlogData";

import "./BlogDetails.css";

const BlogDetails = () => {

  const { id } = useParams();

  const blog = blogData.posts.find(
    (post) => post.id === Number(id)
  );


  /* ================= BLOG NOT FOUND ================= */

  if (!blog) {
    return (
      <div className="blog-not-found">

        <h2>
          Blog Not Found
        </h2>

        <p>
          Sorry, the blog you are looking for does not exist.
        </p>

        <Link to="/blog">
          BACK TO BLOG
        </Link>

      </div>
    );
  }


  return (
    <div className="blog-details">


      {/* ================= HEADER ================= */}

      <section className="blog-details-header">

        <div className="blog-details-header-content">

          <p className="blog-details-category">
            {blog.category}
          </p>

          <h1>
            {blog.title}
          </h1>

          <span>
            {blog.readTime}
          </span>

        </div>

      </section>


      {/* ================= MAIN CONTENT ================= */}

      <section className="blog-details-section">

        <div className="blog-details-container">


          {/* ================= IMAGE ================= */}

          <div className="blog-details-image">

            <img
              src={blog.image}
              alt={blog.title}
            />

          </div>


          {/* ================= ARTICLE ================= */}

          <article className="blog-article">


            {/* INTRO */}

            <p className="blog-intro">
              {blog.content.intro}
            </p>


            {/* HEADING 1 */}

            <h2>
              {blog.content.heading1}
            </h2>

            <p>
              {blog.content.text1}
            </p>


            {/* HEADING 2 */}

            <h2>
              {blog.content.heading2}
            </h2>

            <p>
              {blog.content.text2}
            </p>


            {/* HEADING 3 */}

            {blog.content.heading3 && (
              <>
                <h2>
                  {blog.content.heading3}
                </h2>

                <p>
                  {blog.content.text3}
                </p>
              </>
            )}

          </article>


          {/* ================= BACK BUTTON ================= */}

          <div className="back-to-blog">

            <Link to="/blog">
              ← BACK TO BLOG
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
};

export default BlogDetails;