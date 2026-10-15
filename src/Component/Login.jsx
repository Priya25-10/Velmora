
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   FaEnvelope,
//   FaLock,
//   FaEye,
//   FaEyeSlash,
//   FaArrowRight,
//   FaCheckCircle,
// } from "react-icons/fa";

// import "./Login.css";

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [showPassword, setShowPassword] = useState(false);
//   const [rememberMe, setRememberMe] = useState(false);
//   const [message, setMessage] = useState("");

//   const validateForm = () => {
//     const newErrors = {};

//     // Email validation
//     const emailRegex =
//       /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//     if (!formData.email.trim()) {
//       newErrors.email = "Email address is required.";
//     } else if (!emailRegex.test(formData.email.trim())) {
//       newErrors.email = "Please enter a valid email address.";
//     }

//     // Password validation
//     const password = formData.password;

//     if (!password) {
//       newErrors.password = "Password is required.";
//     } else if (password.length < 8) {
//       newErrors.password = "Password must contain at least 8 characters.";
//     } else if (!/[A-Z]/.test(password)) {
//       newErrors.password =
//         "Password must contain at least one uppercase letter.";
//     } else if (!/[a-z]/.test(password)) {
//       newErrors.password =
//         "Password must contain at least one lowercase letter.";
//     } else if (!/[0-9]/.test(password)) {
//       newErrors.password =
//         "Password must contain at least one number.";
//     } else if (!/[^A-Za-z0-9]/.test(password)) {
//       newErrors.password =
//         "Password must contain at least one special character.";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormData((previous) => ({
//       ...previous,
//       [name]: value,
//     }));

//     setErrors((previous) => ({
//       ...previous,
//       [name]: "",
//     }));

//     setMessage("");
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setMessage("");

//     if (validateForm()) {
//       // Input validation is complete.
//       // Connect your authentication service here.
//       setMessage(
//         "Your details are valid. Account authentication is not connected yet."
//       );
//     }
//   };

//   const handleForgotPassword = () => {
//     setMessage(
//       "Password reset is not connected yet. Please contact support."
//     );
//   };

//   return (
//     <main className="velmora-login-page">
//       <section className="login-visual">
//         <div className="login-visual-overlay">
//           <p className="login-brand-label">THE ART OF FRAGRANCE</p>

//           <h1>
//             Welcome Back
//             <br />
//             to Velmora
//           </h1>

//           <div className="login-gold-line"></div>

//           <p className="login-visual-text">
//             Your signature scent is waiting for you.
//             Discover fragrances that make every moment unforgettable.
//           </p>

//           <span className="login-visual-bottom">
//             ELEGANCE IN EVERY DROP
//           </span>
//         </div>
//       </section>

//       <section className="login-form-section">
//         <div className="login-form-card">
//           <div className="login-mobile-brand">VELMORA</div>

//           <p className="login-eyebrow">YOUR PERSONAL FRAGRANCE JOURNEY</p>

//           <h2>Sign In</h2>

//           <p className="login-description">
//             Enter your details to access your account.
//           </p>

//           {message && (
//             <div className="login-message" role="status">
//               <FaCheckCircle />
//               <span>{message}</span>
//             </div>
//           )}

//           <form onSubmit={handleSubmit} noValidate>
//             <div className="login-field">
//               <label htmlFor="login-email">Email Address</label>

//               <div
//                 className={`login-input-wrap ${
//                   errors.email ? "login-input-error" : ""
//                 }`}
//               >
//                 <FaEnvelope className="login-input-icon" />

//                 <input
//                   type="email"
//                   id="login-email"
//                   name="email"
//                   placeholder="Enter your email address"
//                   value={formData.email}
//                   onChange={handleChange}
//                   autoComplete="email"
//                   aria-invalid={Boolean(errors.email)}
//                   aria-describedby={
//                     errors.email ? "login-email-error" : undefined
//                   }
//                 />
//               </div>

//               {errors.email && (
//                 <small
//                   className="login-error"
//                   id="login-email-error"
//                   role="alert"
//                 >
//                   {errors.email}
//                 </small>
//               )}
//             </div>

//             <div className="login-field">
//               <label htmlFor="login-password">Password</label>

//               <div
//                 className={`login-input-wrap ${
//                   errors.password ? "login-input-error" : ""
//                 }`}
//               >
//                 <FaLock className="login-input-icon" />

//                 <input
//                   type={showPassword ? "text" : "password"}
//                   id="login-password"
//                   name="password"
//                   placeholder="Enter your password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   autoComplete="current-password"
//                   aria-invalid={Boolean(errors.password)}
//                   aria-describedby={
//                     errors.password ? "login-password-error" : undefined
//                   }
//                 />

//                 <button
//                   type="button"
//                   className="login-password-toggle"
//                   onClick={() => setShowPassword((previous) => !previous)}
//                   aria-label={
//                     showPassword ? "Hide password" : "Show password"
//                   }
//                 >
//                   {showPassword ? <FaEyeSlash /> : <FaEye />}
//                 </button>
//               </div>

//               {errors.password && (
//                 <small
//                   className="login-error"
//                   id="login-password-error"
//                   role="alert"
//                 >
//                   {errors.password}
//                 </small>
//               )}
//             </div>

//             <div className="login-options">
//               <label className="login-remember">
//                 <input
//                   type="checkbox"
//                   checked={rememberMe}
//                   onChange={(event) =>
//                     setRememberMe(event.target.checked)
//                   }
//                 />
//                 <span>Remember me</span>
//               </label>

//               <button
//                 type="button"
//                 className="login-forgot-link"
//                 onClick={handleForgotPassword}
//               >
//                 Forgot Password?
//               </button>
//             </div>

//             <button type="submit" className="login-submit-btn">
//               SIGN IN <FaArrowRight />
//             </button>
//           </form>

//           <div className="login-divider">
//             <span>NEW TO VELMORA?</span>
//           </div>

//           <Link to="/register" className="login-register-btn">
//             CREATE AN ACCOUNT
//           </Link>

//           <p className="login-footer-text">
//             By continuing, you agree to our Terms &amp; Privacy Policy.
//           </p>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleLogin = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      newErrors.email = "Enter a valid email address";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password =
        "Password must contain at least 8 characters";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Login form validated successfully!");
      navigate("/");
    }
  };

  return (
    <div className="velmora-login-page">
      <div className="login-card">

        <div className="login-header">
          <h2>VELMORA</h2>
          <p>SCENTS BEYOND ORDINARY</p>
        </div>

        <div className="login-content">
          <h1>Welcome Back</h1>
          <p className="login-subtitle">
            Sign in to continue your fragrance journey.
          </p>

          <form onSubmit={handleLogin} noValidate>

            <div className="login-form-group">
              <label>Email Address</label>

              <div className="login-input-wrapper">
                <FaEnvelope />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {errors.email && (
                <span className="login-error">
                  {errors.email}
                </span>
              )}
            </div>

            <div className="login-form-group">
              <label>Password</label>

              <div className="login-input-wrapper">
                <FaLock />
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {errors.password && (
                <span className="login-error">
                  {errors.password}
                </span>
              )}
            </div>

            <div className="login-forgot">
              <Link to="/forgot-password">
                Forgot Password?
              </Link>
            </div>

            <button type="submit" className="login-btn">
              LOGIN
            </button>

          </form>

          <div className="login-divider">
            <span>OR</span>
          </div>

          <p className="login-register-text">
            New to Velmora?{" "}
            <Link to="/register">Create an Account</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;