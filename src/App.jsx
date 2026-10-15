
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./Component/NavBar";
import Home from "./Component/Home";
import Footer from "./Component/Footer";
import Men from "./Component/Mens";
import Women from "./Component/Women";
import Collections from "./Component/Collection";
import Gifting from "./Component/Gifting";
import Blog from "./Component/Blog";
import BlogDetails from "./Component/BlogDetails";
import Sale from "./Component/Sale";
import Wishlist from "./Component/Wishlist";
import ProductDetails from "./Component/ProductDetails";
import Cart from "./Component/Cart";
import Checkout from "./Component/Order";
import OrderSuccess from "./Component/OrderSuccess";
import About from "./Component/About";
import Search from "./Component/Search";
import AllProducts from "./Component/AllProducts";
import Login from "./Component/Login";
import Register from "./Component/Register";

const App = () => {
  const location = useLocation();

  const showFooter =
    location.pathname === "/" ||
    location.pathname === "/about";

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />

        <Route
          path="/collections"
          element={<Collections />}
        />

        <Route path="/gifting" element={<Gifting />} />

        <Route path="/blog" element={<Blog />} />
        <Route
          path="/blog/:id"
          element={<BlogDetails />}
        />

        <Route path="/sale" element={<Sale />} />
        <Route path="/wishlist" element={<Wishlist />} />

        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />
        <Route path="/register" element={<Register />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />

        <Route
          path="/order-success"
          element={<OrderSuccess />}
        />

        <Route path="/about" element={<About />} />
        <Route path="/search" element={<Search />} />
        <Route
          path="/products"
          element={<AllProducts />}
        />

        <Route path="/login" element={<Login />} />
      </Routes>

      {showFooter && <Footer />}
    </>
  );
};

export default App;