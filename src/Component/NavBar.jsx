import React from "react";
import {
  Navbar as BsNavbar,
  Nav,
  Container,
} from "react-bootstrap";

import { Link } from "react-router-dom";
import "./NavBar.css";

export const Navbar = () => {
  return (
    <BsNavbar expand="lg" className="velmora-navbar">
      <Container fluid>

        {/* LOGO */}
        <Link to="/" className="velmora-logo">
          VELMORA
        </Link>

        {/* MOBILE TOGGLE */}
        <BsNavbar.Toggle aria-controls="velmora-nav" />

        {/* NAVBAR CONTENT */}
        <BsNavbar.Collapse id="velmora-nav">

          {/* NAVIGATION LINKS */}
          <Nav className="mx-auto velmora-links">

            <Link to="/">HOME</Link>

            <Link to="/men">MEN</Link>

            <Link to="/women">WOMEN</Link>

            <Link to="/collections">COLLECTIONS</Link>

            <Link to="/gifting">GIFTING</Link>

            <Link to="/blog">VELMORA BLOG</Link>

            <Link to="/sale">SALE</Link>

          </Nav>

          {/* NAVBAR ICONS */}
          <div className="velmora-icons">

            {/* SEARCH */}
            {/* <Link to="/search" aria-label="Search">
              <i className="bi bi-search"></i>
            </Link> */}

            {/* WISHLIST */}
            <Link to="/wishlist" aria-label="Wishlist">
              <i className="bi bi-heart"></i>
            </Link>

            {/* LOGIN */}
            <Link to="/login" aria-label="Login">
              <i className="bi bi-person"></i>
            </Link>

            {/* CART */}
            <Link to="/cart" aria-label="Shopping Cart">
              <i className="bi bi-bag"></i>
            </Link>

          </div>

        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
};

export default Navbar;
