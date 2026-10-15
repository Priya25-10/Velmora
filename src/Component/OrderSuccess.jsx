
// // import React from "react";
// // import { Container } from "react-bootstrap";
// // import { Link, useLocation } from "react-router-dom";
// // import { FaCheckCircle, FaShoppingBag } from "react-icons/fa";

// // import "./OrderSuccess.css";

// // const OrderSuccess = () => {
// //   const location = useLocation();

// //   const order = (() => {
// //     if (location.state?.order) return location.state.order;

// //     try {
// //       return JSON.parse(localStorage.getItem("velmoraLastOrder") || "null");
// //     } catch {
// //       return null;
// //     }
// //   })();

// //   if (!order) {
// //     return (
// //       <div className="success-page">
// //         <Container>
// //           <h2>No order details found.</h2>
// //           <Link to="/" className="success-home-btn">
// //             BACK TO HOME
// //           </Link>
// //         </Container>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="success-page">
// //       <Container>
// //         <div className="success-card">
// //           <FaCheckCircle className="success-icon" />

// //           <p className="success-eyebrow">THANK YOU FOR CHOOSING VELMORA</p>

// //           <h1>Your Order Is Confirmed!</h1>

// //           <p className="success-message">
// //             Thank you, {order.customer.fullName}. Your fragrance selection
// //             has been recorded successfully.
// //           </p>

// //           <div className="success-order-number">
// //             <span>ORDER NUMBER</span>
// //             <strong>{order.orderId}</strong>
// //           </div>

// //           <div className="success-details">
// //             <div>
// //               <span>Order Date</span>
// //               <strong>{order.orderDate}</strong>
// //             </div>

// //             <div>
// //               <span>Payment Method</span>
// //               <strong>
// //                 {order.customer.payment === "cod"
// //                   ? "Cash on Delivery"
// //                   : "Online Payment (Demo)"}
// //               </strong>
// //             </div>

// //             <div>
// //               <span>Order Total</span>
// //               <strong>₹{Number(order.total).toLocaleString("en-IN")}</strong>
// //             </div>
// //           </div>

// //           <div className="success-products">
// //             <h2>Order Summary</h2>

// //             {order.products.map((item, index) => (
// //               <div className="success-product" key={`${item.id}-${index}`}>
// //                 <img src={item.image} alt={item.name} />

// //                 <div>
// //                   <h3>{item.name}</h3>
// //                   <p>Quantity: {item.quantity || 1}</p>
// //                 </div>

// //                 <strong>
// //                   ₹{(
// //                     (Number(item.price) || 0) *
// //                     (Number(item.quantity) || 1)
// //                   ).toLocaleString("en-IN")}
// //                 </strong>
// //               </div>
// //             ))}
// //           </div>

// //           <p className="success-footer">
// //             A fragrance for every unforgettable moment.
// //           </p>

// //           <Link to="/" className="success-home-btn">
// //             <FaShoppingBag /> CONTINUE SHOPPING
// //           </Link>
// //         </div>
// //       </Container>
// //     </div>
// //   );
// // };

// // export default OrderSuccess;

// import React, { useState } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import { useNavigate, useParams } from "react-router-dom";
// import { FaShoppingBag, FaArrowLeft } from "react-icons/fa";

// import { menPageData } from "../Data/MensData";
// import { womenPageData } from "../Data/WomenData";
// import collectionData from "../Data/CollectionData";
// import giftingProducts from "../Data/GiftingData";
// import saleData from "../Data/Sale";

// import "./ProductDetails.css";

// const ProductDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [quantity, setQuantity] = useState(1);

//   // Combine products from all existing pages
//   const allProducts = [
//     ...(menPageData.products || []),
//     ...(womenPageData.products || []),
//     ...(collectionData.products || []),
//     ...(giftingProducts || []),
//     ...(saleData.products || []),
//   ];

//   // Find selected product
//   const product = allProducts.find(
//     (item) => String(item.id) === String(id)
//   );

//   // Add product to cart
//   const addToCart = () => {
//     if (!product) {
//       alert("Product not found!");
//       return;
//     }

//     try {
//       const savedCart = JSON.parse(
//         localStorage.getItem("velmoraCart") || "[]"
//       );

//       const existingIndex = savedCart.findIndex(
//         (item) => String(item.id) === String(product.id)
//       );

//       let updatedCart;

//       if (existingIndex !== -1) {
//         updatedCart = savedCart.map((item, index) =>
//           index === existingIndex
//             ? {
//                 ...item,
//                 quantity:
//                   (Number(item.quantity) || 1) + quantity,
//               }
//             : item
//         );
//       } else {
//         updatedCart = [
//           ...savedCart,
//           {
//             ...product,
//             quantity: quantity,
//           },
//         ];
//       }

//       localStorage.setItem(
//         "velmoraCart",
//         JSON.stringify(updatedCart)
//       );

//       alert("Perfume added to cart successfully!");
//     } catch (error) {
//       console.error("Cart error:", error);
//       alert("Unable to add perfume to cart.");
//     }
//   };

//   // Order selected product and open checkout
//   const orderNow = () => {
//     if (!product) {
//       alert("Product not found!");
//       return;
//     }

//     try {
//       const orderItem = {
//         ...product,
//         quantity: quantity,
//       };

//       // Save selected product for checkout
//       localStorage.setItem(
//         "velmoraOrder",
//         JSON.stringify([orderItem])
//       );

//       // Navigate to checkout page
//       navigate("/checkout", {
//         state: {
//           products: [orderItem],
//         },
//       });
//     } catch (error) {
//       console.error("Order error:", error);
//       alert("Unable to continue with your order.");
//     }
//   };

//   // Product not found
//   if (!product) {
//     return (
//       <div className="product-not-found">
//         <h2>Product Not Found</h2>
//         <p>This perfume is currently unavailable.</p>

//         <button
//           type="button"
//           onClick={() => navigate(-1)}
//         >
//           <FaArrowLeft /> GO BACK
//         </button>
//       </div>
//     );
//   }

//   const price = Number(product.price) || 0;

//   const oldPrice =
//     Number(product.oldPrice ?? product.oldprice) || 0;

//   const discount =
//     product.discount ||
//     (oldPrice > price
//       ? `${Math.round(
//           ((oldPrice - price) / oldPrice) * 100
//         )}% OFF`
//       : "");

//   return (
//     <div className="product-details-page">
//       <Container>
//         {/* Breadcrumb */}
//         <div className="product-breadcrumb">
//           <span onClick={() => navigate("/")}>Home</span>
//           <span>/</span>
//           <span>Product Details</span>
//           <span>/</span>
//           <span className="breadcrumb-current">
//             {product.name}
//           </span>
//         </div>

//         {/* Product Details */}
//         <Row className="product-details-row align-items-center">
//           {/* Product Image */}
//           <Col lg={6} md={6} className="mb-4 mb-md-0">
//             <div className="product-details-image">
//               {discount && (
//                 <span className="details-discount">
//                   {discount}
//                 </span>
//               )}

//               <img
//                 src={product.image}
//                 alt={product.name}
//               />
//             </div>
//           </Col>

//           {/* Product Information */}
//           <Col lg={6} md={6}>
//             <div className="product-details-info">
//               <h1>{product.name}</h1>

//               <p className="details-category">
//                 {product.category ||
//                   product.type ||
//                   "Luxury Fragrance"}
//               </p>

//               <div className="details-price">
//                 <strong>
//                   ₹{price.toLocaleString("en-IN")}
//                 </strong>

//                 {oldPrice > price && (
//                   <del>
//                     ₹{oldPrice.toLocaleString("en-IN")}
//                   </del>
//                 )}
//               </div>

//               {discount && (
//                 <p className="details-offer">
//                   {discount}
//                 </p>
//               )}

//               <div className="details-divider"></div>

//               {/* Fragrance Details */}
//               <div className="details-feature">
//                 <span>FRAGRANCE</span>
//                 <p>
//                   {product.fragrance ||
//                     product.notes ||
//                     "Elegant and long-lasting fragrance"}
//                 </p>
//               </div>

//               <div className="details-feature">
//                 <span>SIZE</span>
//                 <p>{product.size || "100 ml"}</p>
//               </div>

//               {/* Quantity */}
//               <div className="details-quantity">
//                 <span>QUANTITY</span>

//                 <div className="quantity-control">
//                   <button
//                     type="button"
//                     onClick={() =>
//                       setQuantity((previous) =>
//                         Math.max(1, previous - 1)
//                       )
//                     }
//                     aria-label="Decrease quantity"
//                   >
//                     −
//                   </button>

//                   <span>{quantity}</span>

//                   <button
//                     type="button"
//                     onClick={() =>
//                       setQuantity((previous) => previous + 1)
//                     }
//                     aria-label="Increase quantity"
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>

//               {/* Add to Cart */}
//               <button
//                 type="button"
//                 className="details-cart-btn"
//                 onClick={addToCart}
//               >
//                 <FaShoppingBag />
//                 ADD TO CART
//               </button>

//               {/* Order Now */}
//               <button
//                 type="button"
//                 className="details-order-btn"
//                 onClick={orderNow}
//               >
//                 ORDER NOW
//               </button>

//               <p className="details-footer-note">
//                 A fragrance for every unforgettable moment.
//               </p>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default ProductDetails;
import React from "react";
import { Link, useLocation, Navigate } from "react-router-dom";
import { FaCheckCircle, FaShoppingBag } from "react-icons/fa";
import "./OrderSuccess.css";

const OrderSuccess = () => {
  const location = useLocation();

  const order =
    location.state?.order ||
    JSON.parse(localStorage.getItem("velmoraLastOrder") || "null");

  if (!order) {
    return <Navigate to="/men" replace />;
  }

  return (
    <div className="order-success-page">
      <div className="order-success-card">
        <FaCheckCircle className="success-icon" />

        <p className="success-eyebrow">VELMORA · ORDER CONFIRMATION</p>

        <h1>Thank You for Your Order!</h1>

        <p className="success-message">
          Your fragrance journey begins here. Your order has been placed
          successfully.
        </p>

        <div className="success-order-id">
          <span>YOUR ORDER NUMBER</span>
          <h2>{order.orderId}</h2>
        </div>

        <div className="success-details">
          <div>
            <span>Order Status</span>
            <strong>{order.status}</strong>
          </div>

          <div>
            <span>Payment Method</span>
            <strong>
              {order.customer?.payment === "cod"
                ? "Cash on Delivery"
                : "Online Payment"}
            </strong>
          </div>

          <div>
            <span>Total Amount</span>
            <strong>₹{Number(order.total || 0).toLocaleString("en-IN")}</strong>
          </div>
        </div>

        <p className="success-delivery">
          Thank you for choosing Velmora. Keep your order number for reference.
        </p>

        <Link to="/men" className="success-shop-btn">
          <FaShoppingBag /> CONTINUE SHOPPING
        </Link>

        <Link to="/" className="success-home-link">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccess;