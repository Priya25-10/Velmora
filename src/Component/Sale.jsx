// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";

// import saleData from "../Data/Sale";
// import "./Sale.css";

// const Sale = () => {
//   return (
//     <div className="sale-page">

//       {/* ================= BANNER ================= */}

//       <section
//         className="sale-banner"
//         style={{
//           backgroundImage: `linear-gradient(
//             rgba(0, 0, 0, 0.35),
//             rgba(0, 0, 0, 0.35)
//           ), url(${saleData.banner.image})`
//         }}
//       >
//         <div className="sale-banner-content">
//           <p>VELMORA EXCLUSIVE</p>

//           <h1>{saleData.banner.title}</h1>

//           <span>{saleData.banner.subtitle}</span>
//         </div>
//       </section>

//       {/* ================= SALE PRODUCTS ================= */}

//       <section className="sale-products">
//         <Container>

//           <div className="sale-heading">
//             <p>SHOP THE SALE</p>

//             <h2>Exclusive Fragrance Offers</h2>

//             <span>
//               Explore luxury perfumes, gift sets and fragrances
//               available at special prices.
//             </span>
//           </div>

//           {/* ================= TOOLBAR ================= */}

//           <div className="sale-toolbar">

//             <span>
//               {saleData.products.length} PRODUCTS
//             </span>

//             <select>
//               <option>Sort By</option>
//               <option>Price: Low to High</option>
//               <option>Price: High to Low</option>
//               <option>Newest</option>
//             </select>

//           </div>

//           {/* ================= PRODUCT GRID ================= */}

//           <Row>

//             {saleData.products.map((product) => (

//               <Col
//                 lg={3}
//                 md={4}
//                 sm={6}
//                 xs={12}
//                 key={product.id}
//                 className="mb-4"
//               >

//                 <div className="sale-product-card">

//                   {/* PRODUCT IMAGE */}

//                   <div className="sale-product-image">

//                     <img
//                       src={product.image}
//                       alt={product.name}
//                     />

//                     <span className="sale-badge">
//                       {product.discount}
//                     </span>

//                     <button
//                       className="sale-heart"
//                       type="button"
//                     >
//                       ♡
//                     </button>

//                   </div>

//                   {/* PRODUCT DETAILS */}

//                   <div className="sale-product-details">

//                     <p className="sale-type">
//                       {product.type}
//                     </p>

//                     <h3>
//                       {product.name}
//                     </h3>

//                     <p className="sale-category">
//                       {product.category}
//                     </p>

//                     <p className="sale-fragrance">
//                       {product.fragrance}
//                     </p>

//                     <p className="sale-size">
//                       {product.size}
//                     </p>

//                     {/* PRICE */}

//                     <div className="sale-price">

//                       <strong>
//                         ₹{product.price}
//                       </strong>

//                       <del>
//                         ₹{product.oldPrice}
//                       </del>

//                     </div>

//                     {/* BUTTON */}

//                     <Link
//                       to={`/product/${product.id}`}
//                       className="sale-view-btn"
//                     >
//                       VIEW DETAILS
//                     </Link>

//                   </div>

//                 </div>

//               </Col>

//             ))}

//           </Row>

//         </Container>
//       </section>

//     </div>
//   );
// };

// export default Sale;


import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

import saleData from "../Data/Sale";
import "./Sale.css";

const Sale = () => {

  // ADD PRODUCT TO WISHLIST
  const addToWishlist = (product) => {
    try {
      const savedWishlist = JSON.parse(
        localStorage.getItem("velmoraWishlist") || "[]"
      );

      const alreadyExists = savedWishlist.some(
        (item) => String(item.id) === String(product.id)
      );

      if (alreadyExists) {
        alert("This perfume is already in your wishlist!");
        return;
      }

      const updatedWishlist = [...savedWishlist, product];

      localStorage.setItem(
        "velmoraWishlist",
        JSON.stringify(updatedWishlist)
      );

      alert("Perfume added to your wishlist!");
    } catch (error) {
      console.error("Wishlist error:", error);
      alert("Unable to add this perfume to your wishlist.");
    }
  };

  return (
    <div className="sale-page">

      {/* ================= BANNER ================= */}

      <section
        className="sale-banner"
        style={{
          backgroundImage: `linear-gradient(
            rgba(0, 0, 0, 0.35),
            rgba(0, 0, 0, 0.35)
          ), url(${saleData.banner.image})`
        }}
      >
        <div className="sale-banner-content">
          <p>VELMORA EXCLUSIVE</p>

          <h1>{saleData.banner.title}</h1>

          <span>{saleData.banner.subtitle}</span>
        </div>
      </section>

      {/* ================= SALE PRODUCTS ================= */}

      <section className="sale-products">
        <Container>

          <div className="sale-heading">
            <p>SHOP THE SALE</p>

            <h2>Exclusive Fragrance Offers</h2>

            <span>
              Explore luxury perfumes, gift sets and fragrances
              available at special prices.
            </span>
          </div>

          {/* ================= TOOLBAR ================= */}

          <div className="sale-toolbar">

            <span>
              {saleData.products.length} PRODUCTS
            </span>

            <select defaultValue="recommended">
              <option value="recommended">Sort By</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
              <option value="newest">Newest</option>
            </select>

          </div>

          {/* ================= PRODUCT GRID ================= */}

          <Row>

            {saleData.products.map((product) => (

              <Col
                lg={3}
                md={4}
                sm={6}
                xs={12}
                key={product.id}
                className="mb-4"
              >

                <div className="sale-product-card">

                  {/* PRODUCT IMAGE */}

                  <div className="sale-product-image">

                    <img
                      src={product.image}
                      alt={product.name}
                    />

                    <span className="sale-badge">
                      {product.discount}
                    </span>

                    {/* WISHLIST HEART */}

                    <button
                      className="sale-heart"
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        addToWishlist(product);
                      }}
                      aria-label={`Add ${product.name} to wishlist`}
                      title="Add to Wishlist"
                    >
                      <FaHeart />
                    </button>

                  </div>

                  {/* PRODUCT DETAILS */}

                  <div className="sale-product-details">

                    <p className="sale-type">
                      {product.type}
                    </p>

                    <h3>
                      {product.name}
                    </h3>

                    <p className="sale-category">
                      {product.category}
                    </p>

                    <p className="sale-fragrance">
                      {product.fragrance}
                    </p>

                    <p className="sale-size">
                      {product.size}
                    </p>

                    {/* PRICE */}

                    <div className="sale-price">

                      <strong>
                        ₹{product.price}
                      </strong>

                      <del>
                        ₹{product.oldPrice}
                      </del>

                    </div>

                    {/* VIEW DETAILS */}

                    <Link
                      to={`/product/${product.id}`}
                      className="sale-view-btn"
                    >
                      VIEW DETAILS
                    </Link>

                  </div>

                </div>

              </Col>

            ))}

          </Row>

          {saleData.products.length === 0 && (
            <div className="no-products">
              No sale products available right now.
            </div>
          )}

        </Container>
      </section>

    </div>
  );
};

export default Sale;
