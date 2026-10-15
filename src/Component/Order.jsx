
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaLock,
  FaMapMarkerAlt,
  FaCreditCard,
  FaShoppingBag,
  FaCheckCircle,
} from "react-icons/fa";

import "./Order.css";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [products] = useState(() => {
    if (location.state?.products?.length) {
      return location.state.products;
    }

    try {
      const savedOrder = JSON.parse(
        localStorage.getItem("velmoraOrder") || "[]"
      );

      if (savedOrder.length) return savedOrder;

      return JSON.parse(localStorage.getItem("velmoraCart") || "[]");
    } catch {
      return [];
    }
  });

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pinCode: "",
    payment: "cod",
  });

  const [error, setError] = useState("");

  const total = products.reduce(
    (sum, item) =>
      sum + (Number(item.price) || 0) * (Number(item.quantity) || 1),
    0
  );

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!products.length) {
      setError("Your order is empty. Please select a perfume first.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      setError("Please enter a valid 10-digit Indian mobile number.");
      return;
    }

    if (!/^\d{6}$/.test(formData.pinCode)) {
      setError("Please enter a valid 6-digit PIN code.");
      return;
    }

    const order = {
      orderId: "VEL" + Date.now().toString().slice(-8),
      customer: formData,
      products,
      total,
      orderDate: new Date().toLocaleDateString("en-IN"),
      status: "Order Placed",
    };

    try {
      localStorage.setItem("velmoraLastOrder", JSON.stringify(order));

      // Remove only the ordered products from the cart.
      const cart = JSON.parse(localStorage.getItem("velmoraCart") || "[]");

      if (location.state?.products?.length) {
        const remainingCart = [...cart];

        products.forEach((orderedProduct) => {
          const index = remainingCart.findIndex(
            (item) => String(item.id) === String(orderedProduct.id)
          );

          if (index !== -1) {
            remainingCart.splice(index, 1);
          }
        });

        localStorage.setItem("velmoraCart", JSON.stringify(remainingCart));
      } else {
        localStorage.setItem("velmoraCart", "[]");
      }

      navigate("/order-success", { state: { order } });
    } catch (err) {
      console.error("Unable to save order:", err);
      setError("Unable to save your order. Please try again.");
    }
  };

  if (!products.length) {
    return (
      <div className="checkout-empty">
        <FaShoppingBag />
        <h2>Your order is empty</h2>
        <p>Please select a fragrance before proceeding to checkout.</p>
        <Link to="/men" className="checkout-back-btn">
          EXPLORE FRAGRANCES
        </Link>
      </div>
    );
  }

  return (
    <div className="velmora-checkout">
      <Container>
        <div className="checkout-heading">
          <p className="checkout-eyebrow">VELMORA · YOUR ORDER</p>
          <h1>Secure Checkout</h1>
          <p>One final step towards your signature fragrance.</p>
          <span><FaLock /> Your details are used for this demo order.</span>
        </div>

        <form onSubmit={handleSubmit}>
          <Row className="g-4">
            <Col lg={7}>
              <div className="checkout-card">
                <div className="checkout-section-title">
                  <span>01</span>
                  <div>
                    <h2>Contact Information</h2>
                    <p>Where can we reach you?</p>
                  </div>
                </div>

                <Row className="g-3">
                  <Col md={12}>
                    <label htmlFor="fullName">Full Name *</label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </Col>

                  <Col md={6}>
                    <label htmlFor="email">Email Address *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Col>

                  <Col md={6}>
                    <label htmlFor="phone">Mobile Number *</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      inputMode="numeric"
                      maxLength={10}
                      placeholder="10-digit mobile number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </Col>
                </Row>

                <div className="checkout-divider" />

                <div className="checkout-section-title">
                  <span>02</span>
                  <div>
                    <h2>Delivery Address</h2>
                    <p>Where should we deliver your order?</p>
                  </div>
                </div>

                <Row className="g-3">
                  <Col md={12}>
                    <label htmlFor="address">House No. / Street Address *</label>
                    <textarea
                      id="address"
                      name="address"
                      rows="3"
                      placeholder="Enter your complete delivery address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                    />
                  </Col>

                  <Col md={6}>
                    <label htmlFor="city">City *</label>
                    <input
                      id="city"
                      name="city"
                      type="text"
                      placeholder="Enter city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    />
                  </Col>

                  <Col md={6}>
                    <label htmlFor="state">State *</label>
                    <input
                      id="state"
                      name="state"
                      type="text"
                      placeholder="Enter state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                    />
                  </Col>

                  <Col md={6}>
                    <label htmlFor="pinCode">PIN Code *</label>
                    <input
                      id="pinCode"
                      name="pinCode"
                      type="text"
                      inputMode="numeric"
                      maxLength={6}
                      placeholder="6-digit PIN code"
                      value={formData.pinCode}
                      onChange={handleChange}
                      required
                    />
                  </Col>
                </Row>

                <div className="checkout-divider" />

                <div className="checkout-section-title">
                  <span>03</span>
                  <div>
                    <h2>Payment Method</h2>
                    <p>Choose how you would like to pay.</p>
                  </div>
                </div>

                <label className={`payment-option ${formData.payment === "cod" ? "selected" : ""}`}>
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={formData.payment === "cod"}
                    onChange={handleChange}
                  />
                  <FaMapMarkerAlt className="payment-icon" />
                  <div>
                    <strong>Cash on Delivery</strong>
                    <p>Pay when your order arrives.</p>
                  </div>
                  <FaCheckCircle className="payment-check" />
                </label>

                <label className={`payment-option ${formData.payment === "online" ? "selected" : ""}`}>
                  <input
                    type="radio"
                    name="payment"
                    value="online"
                    checked={formData.payment === "online"}
                    onChange={handleChange}
                  />
                  <FaCreditCard className="payment-icon" />
                  <div>
                    <strong>Online Payment</strong>
                    <p>Demo option — no real payment is processed.</p>
                  </div>
                  <FaCheckCircle className="payment-check" />
                </label>

                {error && <p className="checkout-error">{error}</p>}

                <button type="submit" className="place-order-btn">
                  PLACE ORDER · ₹{total.toLocaleString("en-IN")}
                </button>

                <p className="checkout-terms">
                  <FaLock /> Demo checkout for your Velmora React project.
                </p>
              </div>
            </Col>

            {/* <Col lg={5}>
              <div className="checkout-summary">
                <p className="summary-eyebrow">YOUR SELECTION</p>
                <h2>Order Summary</h2>

                {products.map((item, index) => (
                  <div className="checkout-product" key={`${item.id}-${index}`}>
                    <div className="checkout-product-image">
                      <img src={item.image} alt={item.name} />
                    </div>

                    <div className="checkout-product-info">
                      <h3>{item.name}</h3>
                      <p>Qty: {item.quantity || 1}</p>
                      <strong>
                        ₹{(
                          (Number(item.price) || 0) *
                          (Number(item.quantity) || 1)
                        ).toLocaleString("en-IN")}
                      </strong>
                    </div>
                  </div>
                ))} */}

                {/* <div className="summary-line">
                  <span>Subtotal</span>
                  <span>₹{total.toLocaleString("en-IN")}</span>
                </div>

                <div className="summary-line">
                  <span>Delivery</span>
                  <span className="free-delivery">FREE</span>
                </div>

                <div className="summary-total">
                  <span>Total Amount</span>
                  <strong>₹{total.toLocaleString("en-IN")}</strong>
                </div>

                <div className="summary-note">
                  <FaShoppingBag />
                  <p>A fragrance for every unforgettable moment.</p>
                </div> */}
              {/* </div>
            </Col> */}
          </Row>
        </form>
      </Container>
    </div>
  );
};

export default Checkout;
