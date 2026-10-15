
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaTrashAlt, FaShoppingBag } from "react-icons/fa";

import "./Cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = JSON.parse(
      localStorage.getItem("velmoraCart") || "[]"
    );

    setCartItems(savedCart);
  }, []);

  const saveCart = (updatedCart) => {
    setCartItems(updatedCart);
    localStorage.setItem("velmoraCart", JSON.stringify(updatedCart));
  };

  const increaseQuantity = (id) => {
    const updatedCart = cartItems.map((item) =>
      String(item.id) === String(id)
        ? { ...item, quantity: (Number(item.quantity) || 1) + 1 }
        : item
    );

    saveCart(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cartItems.map((item) =>
      String(item.id) === String(id)
        ? { ...item, quantity: Math.max(1, (Number(item.quantity) || 1) - 1) }
        : item
    );

    saveCart(updatedCart);
  };

  const removeItem = (id) => {
    const updatedCart = cartItems.filter(
      (item) => String(item.id) !== String(id)
    );

    saveCart(updatedCart);
  };

  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + (Number(item.price) || 0) * (Number(item.quantity) || 1),
    0
  );

  const handleCheckout = () => {
    localStorage.setItem("velmoraOrder", JSON.stringify(cartItems));
    navigate("/checkout", { state: { products: cartItems } });
  };

  return (
    <div className="velmora-cart-page">
      <Container>
        <div className="cart-heading">
          <p>VELMORA · YOUR SELECTION</p>
          <h1>Shopping Bag</h1>
          {/* <span>
            {cartItems.length} {cartItems.length === 1 ? "item" : "items"} in your bag
          </span> */}
        </div>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <FaShoppingBag className="empty-cart-icon" />
            <h2>Your bag is waiting</h2>
            <p>Discover a fragrance that feels uniquely yours.</p>

            <Link to="/" className="continue-shopping-btn">
              CONTINUE SHOPPING
            </Link>
          </div>
        ) : (
          <Row className="cart-layout">
            <Col lg={8}>
              <div className="cart-items-list">
                {cartItems.map((item) => (
                  <div className="cart-product" key={item.id}>
                    <div className="cart-product-image">
                      <img src={item.image} alt={item.name} />
                    </div>

                    <div className="cart-product-info">
                      <p className="cart-product-category">
                        {item.category || item.type || "LUXURY FRAGRANCE"}
                      </p>

                      <h3>{item.name}</h3>

                      <p className="cart-product-price">
                        ₹{(Number(item.price) || 0).toLocaleString("en-IN")}
                      </p>

                      <div className="cart-product-actions">
                        <div className="cart-quantity">
                          <button
                            type="button"
                            onClick={() => decreaseQuantity(item.id)}
                          >
                            −
                          </button>

                          <span>{item.quantity || 1}</span>

                          <button
                            type="button"
                            onClick={() => increaseQuantity(item.id)}
                          >
                            +
                          </button>
                        </div>

                        <button
                          type="button"
                          className="cart-remove-btn"
                          onClick={() => removeItem(item.id)}
                        >
                          <FaTrashAlt /> REMOVE
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Col>

            <Col lg={4}>
              <div className="cart-summary">
                <p className="summary-label">YOUR ORDER</p>
                <h2>Order Summary</h2>

                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>₹{totalPrice.toLocaleString("en-IN")}</span>
                </div>

                <div className="summary-row">
                  <span>Delivery</span>
                  <span>Free</span>
                </div>

                <div className="summary-divider"></div>

                <div className="summary-row summary-total">
                  <span>Total</span>
                  <span>₹{totalPrice.toLocaleString("en-IN")}</span>
                </div>

                <button
                  type="button"
                  className="cart-checkout-btn"
                  onClick={handleCheckout}
                >
                  PROCEED TO CHECKOUT
                </button>

                <Link to="/" className="cart-continue-link">
                  Continue Shopping
                </Link>

                <p className="cart-trust-note">
                  Crafted for your unforgettable moments.
                </p>
              </div>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
};

export default Cart;