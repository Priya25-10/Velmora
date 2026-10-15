import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="velmora-footer">

      <div className="footer-container">

        {/* BRAND */}

        <div className="footer-box">

          <h2>VELMORA</h2>

          <h6>THE ART OF FRAGRANCE</h6>

          <p>
            Discover fragrances created to express
            your personality, mood and unforgettable
            moments.
          </p>

          <div className="social-icons">

            <a href="#">
              <i className="bi bi-instagram"></i>
            </a>

            <a href="#">
              <i className="bi bi-facebook"></i>
            </a>

            <a href="#">
              <i className="bi bi-pinterest"></i>
            </a>

          </div>

        </div>


        {/* SHOP */}

        <div className="footer-box">

          <h5>SHOP</h5>

          <a href="/">Home</a>

          <a href="/products">All Perfumes</a>

          <a href="/men">For Him</a>

          <a href="/women">For Her</a>

          <a href="/collections">Collections</a>

        </div>


        {/* INFORMATION */}

        <div className="footer-box">

          <h5>INFORMATION</h5>

          <a href="/about">About Us</a>

          <a href="/contact">Contact Us</a>

          <a href="/faq">FAQs</a>

          <a href="/shipping">Shipping</a>

          <a href="/returns">Returns</a>

        </div>


        {/* NEWSLETTER */}

        <div className="footer-box newsletter">

          <h5>STAY CONNECTED</h5>

          <p>
            Subscribe to our newsletter for new
            fragrances and exclusive offers.
          </p>

          <div className="email-box">

            <input
              type="email"
              placeholder="Enter your email"
            />

            <button>
              SUBSCRIBE
            </button>

          </div>

        </div>

      </div>


      {/* BOTTOM */}

      <div className="footer-bottom">

        <p>
          © 2026 Velmora. All Rights Reserved.
        </p>

        <div>

          <a href="/privacy">
            Privacy Policy
          </a>

          <a href="/terms">
            Terms & Conditions
          </a>

        </div>

      </div>

    </footer>
  );
};

export default Footer;