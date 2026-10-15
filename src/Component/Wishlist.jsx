// import React, { useEffect, useState } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { products } from "../Data/data";
// import { FaHeart, FaTrashAlt, FaShoppingBag } from "react-icons/fa";
// import "./Wishlist.css";

// const Wishlist = () => {
//   const [wishlist, setWishlist] = useState([]);

//   useEffect(() => {
//     const savedWishlist = JSON.parse(
//       localStorage.getItem("velmoraWishlist") || "[]"
//     );

//     setWishlist(savedWishlist);
//   }, []);

//   const removeFromWishlist = (id) => {
//     const updatedWishlist = wishlist.filter(
//       (product) => product.id !== id
//     );

//     setWishlist(updatedWishlist);
//     localStorage.setItem(
//       "velmoraWishlist",
//       JSON.stringify(updatedWishlist)
//     );
//   };

//   const addToWishlist = (product) => {
//     const updatedWishlist = [...wishlist, product];

//     setWishlist(updatedWishlist);
//     localStorage.setItem(
//       "velmoraWishlist",
//       JSON.stringify(updatedWishlist)
//     );
//   };

//   return (
//     <div className="wishlist-page">
//       <section className="wishlist-banner">
//         <div className="wishlist-banner-content">
//           <span>YOUR PERSONAL COLLECTION</span>
//           <h1>My Wishlist</h1>
//           <p>Keep the fragrances you love close to your heart.</p>
//         </div>
//       </section>

//       <Container className="wishlist-container">
//         <div className="wishlist-heading">
//           <div>
//             <h2>Your Favourite Fragrances</h2>
//             <p>
//               {wishlist.length}{" "}
//               {wishlist.length === 1 ? "product" : "products"} saved
//             </p>
//           </div>

//           <FaHeart className="wishlist-heading-icon" />
//         </div>

//         {wishlist.length > 0 ? (
//           <Row className="g-4">
//             {wishlist.map((product) => (
//               <Col key={product.id} xs={12} sm={6} lg={3}>
//                 <div className="wishlist-card">
//                   <div className="wishlist-image-box">
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className="wishlist-product-image"
//                     />

//                     {product.discount && (
//                       <span className="wishlist-discount">
//                         {product.discount}
//                       </span>
//                     )}

//                     <button
//                       className="wishlist-remove-icon"
//                       onClick={() => removeFromWishlist(product.id)}
//                       aria-label={`Remove ${product.name}`}
//                     >
//                       <FaHeart />
//                     </button>
//                   </div>

//                   <div className="wishlist-product-info">
//                     <span className="wishlist-category">
//                       {product.type || product.category || "Fragrance"}
//                     </span>

//                     <h3>{product.name}</h3>

//                     {product.fragrance && (
//                       <p className="wishlist-fragrance">
//                         {product.fragrance}
//                       </p>
//                     )}

//                     <div className="wishlist-price">
//                       <strong>
//                         ₹{Number(product.price).toLocaleString("en-IN")}
//                       </strong>

//                       {product.oldPrice && (
//                         <del>
//                           ₹{Number(product.oldPrice).toLocaleString("en-IN")}
//                         </del>
//                       )}
//                     </div>

//                     <div className="wishlist-actions">
//                       <Link
//                         to={`/product/${product.id}`}
//                         className="wishlist-view-btn"
//                       >
//                         View Product
//                       </Link>

//                       <button
//                         className="wishlist-delete-btn"
//                         onClick={() => removeFromWishlist(product.id)}
//                         aria-label="Remove from wishlist"
//                       >
//                         <FaTrashAlt />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </Col>
//             ))}
//           </Row>
//         ) : (
//           <div className="wishlist-empty">
//             <FaHeart className="empty-heart" />
//             <h3>Your wishlist is waiting</h3>
//             <p>
//               You haven't saved any fragrances yet. Explore our collection
//               and add your favourites here.
//             </p>
//             <Link to="/collections" className="wishlist-shop-btn">
//               <FaShoppingBag /> Explore Collections
//             </Link>
//           </div>
//         )}

//         {products && products.length > 0 && wishlist.length === 0 && (
//           <div className="wishlist-suggestions">
//             <h3>Find Your Next Favourite</h3>
//             <p>Explore our fragrances and save the ones you love.</p>
//             <Link to="/men" className="wishlist-shop-btn">
//               Shop Fragrances
//             </Link>
//           </div>
//         )}
//       </Container>
//     </div>
//   );
// };

// export default Wishlist;

import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaHeart, FaTrashAlt } from "react-icons/fa";
import "./Wishlist.css";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(
      localStorage.getItem("velmoraWishlist") || "[]"
    );
    setWishlist(saved);
  }, []);

  const removeFromWishlist = (id) => {
    const updated = wishlist.filter((item) => item.id !== id);

    localStorage.setItem("velmoraWishlist", JSON.stringify(updated));
    setWishlist(updated);
  };

  return (
    <div className="wishlist-page">
      <section className="wishlist-banner">
        <div className="wishlist-banner-content">
          <span>YOUR PERSONAL COLLECTION</span>
          <h1>My Wishlist</h1>
          <p>Keep the fragrances you love close to your heart.</p>
        </div>
      </section>

      <Container className="wishlist-container">
        <div className="wishlist-heading">
          <div>
            <h2>Your Favourite Fragrances</h2>
            <p>{wishlist.length} products saved</p>
          </div>
          <FaHeart className="wishlist-heading-icon" />
        </div>

        {wishlist.length === 0 ? (
          <div className="wishlist-empty">
            <FaHeart className="empty-heart" />
            <h3>Your wishlist is empty</h3>
            <p>Explore our fragrances and add your favourites.</p>
            <Link to="/men" className="wishlist-shop-btn">
              Shop Men's Perfumes
            </Link>
            {" "}
            <Link to="/women" className="wishlist-shop-btn">
              Shop Women's Perfumes
            </Link>
          </div>
        ) : (
          <Row className="g-4">
            {wishlist.map((product) => (
              <Col key={product.id} xs={12} sm={6} lg={3}>
                <div className="wishlist-card">
                  <div className="wishlist-image-box">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="wishlist-product-image"
                    />

                    <button
                      className="wishlist-remove-icon"
                      onClick={() => removeFromWishlist(product.id)}
                      aria-label="Remove from wishlist"
                    >
                      <FaHeart />
                    </button>
                  </div>

                  <div className="wishlist-product-info">
                    <span className="wishlist-category">
                      {product.category || product.type || "Fragrance"}
                    </span>

                    <h3>{product.name}</h3>
                    <p className="wishlist-fragrance">
                      {product.fragrance}
                    </p>

                    <div className="wishlist-price">
                      <strong>
                        ₹{Number(product.price).toLocaleString("en-IN")}
                      </strong>
                      {product.oldPrice && (
                        <del>
                          ₹{Number(product.oldPrice).toLocaleString("en-IN")}
                        </del>
                      )}
                    </div>

                    <div className="wishlist-actions">
                      <Link
                        to={`/product/${product.id}`}
                        className="wishlist-view-btn"
                      >
                        View Product
                      </Link>

                      <button
                        className="wishlist-delete-btn"
                        onClick={() => removeFromWishlist(product.id)}
                        aria-label="Delete product"
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default Wishlist;