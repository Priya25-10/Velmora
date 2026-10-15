import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaLock
} from "react-icons/fa";

import "./Register.css";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleRegister = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Full name is required";
    }

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

    if (!confirmPassword) {
      newErrors.confirmPassword =
        "Please confirm your password";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword =
        "Passwords do not match";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Registration form validated successfully!");
      navigate("/login");
    }
  };

  return (
    <div className="velmora-register-page">
      <div className="register-card">

        <div className="register-header">
          <h2>VELMORA</h2>
          <p>SCENTS BEYOND ORDINARY</p>
        </div>

        <div className="register-content">
          <h1>Create Account</h1>

          <p className="register-subtitle">
            Join Velmora and discover your signature scent.
          </p>

          <form onSubmit={handleRegister} noValidate>

            <div className="register-form-group">
              <label>Full Name</label>

              <div className="register-input-wrapper">
                <FaUser />
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              {errors.name && (
                <span className="register-error">
                  {errors.name}
                </span>
              )}
            </div>

            <div className="register-form-group">
              <label>Email Address</label>

              <div className="register-input-wrapper">
                <FaEnvelope />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {errors.email && (
                <span className="register-error">
                  {errors.email}
                </span>
              )}
            </div>

            <div className="register-form-group">
              <label>Password</label>

              <div className="register-input-wrapper">
                <FaLock />
                <input
                  type="password"
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {errors.password && (
                <span className="register-error">
                  {errors.password}
                </span>
              )}
            </div>

            <div className="register-form-group">
              <label>Confirm Password</label>

              <div className="register-input-wrapper">
                <FaLock />
                <input
                  type="password"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) =>
                    setConfirmPassword(e.target.value)
                  }
                />
              </div>

              {errors.confirmPassword && (
                <span className="register-error">
                  {errors.confirmPassword}
                </span>
              )}
            </div>

            <button type="submit" className="register-btn">
              CREATE ACCOUNT
            </button>

          </form>

          <div className="register-divider">
            <span>OR</span>
          </div>

          <p className="register-login-text">
            Already have an account?{" "}
            <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;