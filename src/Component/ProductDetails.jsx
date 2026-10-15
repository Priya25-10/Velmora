
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { FaShoppingBag, FaArrowLeft } from "react-icons/fa";

import { menPageData } from "../Data/MensData";
import { womenPageData } from "../Data/WomenData";
import collectionData from "../Data/CollectionData";
import giftingProducts from "../Data/GiftingData";
import saleData from "../Data/Sale";

import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);

  // Combine products from all existing pages
  const allProducts = [
    ...(menPageData.products || []),
    ...(womenPageData.products || []),
    ...(collectionData.products || []),
    ...(giftingProducts || []),
    ...(saleData.products || []),
  ];

  // Find the selected product by its URL ID
  const product = allProducts.find(
    (item) => String(item.id) === String(id)
  );

  // Add product to cart
  const addToCart = () => {
    try {
      const savedCart = JSON.parse(
        localStorage.getItem("velmoraCart") || "[]"
      );

      const existingIndex = savedCart.findIndex(
        (item) => String(item.id) === String(product.id)
      );

      let updatedCart;

      if (existingIndex !== -1) {
        updatedCart = savedCart.map((item, index) =>
          index === existingIndex
            ? {
                ...item,
                quantity: (Number(item.quantity) || 1) + quantity,
              }
            : item
        );
      } else {
        updatedCart = [
          ...savedCart,
          { ...product, quantity },
        ];
      }

      localStorage.setItem(
        "velmoraCart",
        JSON.stringify(updatedCart)
      );

      alert("Perfume added to cart successfully!");
    } catch (error) {
      console.error("Cart error:", error);
      alert("Unable to add perfume to cart.");
    }
  };

  // Order selected product
  const orderNow = () => {
    try {
      const orderItem = {
        ...product,
        quantity,
      };

      localStorage.setItem(
        "velmoraOrder",
        JSON.stringify([orderItem])
      );

      navigate("/checkout", {
        state: { products: [orderItem] },
      });
    } catch (error) {
      console.error("Order error:", error);
      alert("Unable to continue with your order.");
    }
  };

  // Product not found
  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product Not Found</h2>
        <p>This perfume is currently unavailable.</p>

        <button onClick={() => navigate(-1)}>
          <FaArrowLeft /> GO BACK
        </button>
      </div>
    );
  }

  const price = Number(product.price) || 0;
  const oldPrice = Number(product.oldPrice ?? product.oldprice) || 0;

  const discount =
    product.discount ||
    (oldPrice > price
      ? `${Math.round(((oldPrice - price) / oldPrice) * 100)}% OFF`
      : "");

  return (
    <div className="product-details-page">
      <Container>

        {/* Breadcrumb */}
        <div className="product-breadcrumb">
          <span onClick={() => navigate("/")}>Home</span>
          <span>/</span>
          <span>Product Details</span>
          <span>/</span>
          <span className="breadcrumb-current">{product.name}</span>
        </div>

        {/* Product Details */}
        <Row className="product-details-row align-items-center">

          {/* Product Image */}
          <Col lg={6} md={6} className="mb-4 mb-md-0">
            <div className="product-details-image">

              {discount && (
                <span className="details-discount">
                  {discount}
                </span>
              )}

              <img
                src={product.image}
                alt={product.name}
              />

            </div>
          </Col>

          {/* Product Information */}
          <Col lg={6} md={6}>
            <div className="product-details-info">

              {/* <p className="details-eyebrow">
                VELMORA · SIGNATURE COLLECTION
              </p> */}

              <h1>{product.name}</h1>

              <p className="details-category">
                {product.category || product.type || "Luxury Fragrance"}
              </p>

              <div className="details-price">
                <strong>₹{price.toLocaleString("en-IN")}</strong>

                {oldPrice > price && (
                  <del>
                    ₹{oldPrice.toLocaleString("en-IN")}
                  </del>
                )}
              </div>

              {discount && (
                <p className="details-offer">
                  {discount}
                </p>
              )}

              <div className="details-divider"></div>

              {/* <p className="details-description">
                {product.description ||
                  `Discover ${product.name}, a luxury fragrance crafted to leave a memorable impression. Perfect for everyday wear and special occasions.`}
              </p> */}

              <div className="details-feature">
                <span>FRAGRANCE</span>
                <p>
                  {product.fragrance ||
                    product.notes ||
                    "Elegant and long-lasting fragrance"}
                </p>
              </div>

              <div className="details-feature">
                <span>SIZE</span>
                <p>{product.size || "100 ml"}</p>
              </div>

              {/* Quantity */}
              <div className="details-quantity">
                <span>QUANTITY</span>

                <div className="quantity-control">
                  <button
                    type="button"
                    onClick={() =>
                      setQuantity((previous) =>
                        Math.max(1, previous - 1)
                      )
                    }
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>

                  <span>{quantity}</span>

                  <button
                    type="button"
                    onClick={() =>
                      setQuantity((previous) => previous + 1)
                    }
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <button
                type="button"
                className="details-cart-btn"
                onClick={addToCart}
              >
                <FaShoppingBag />
                ADD TO CART
              </button>

              {/* Order Now */}
              <button
                type="button"
                className="details-order-btn"
                onClick={orderNow}
              >
                ORDER NOW
              </button>

              <p className="details-footer-note">
                A fragrance for every unforgettable moment.
              </p>

            </div>
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default ProductDetails;
