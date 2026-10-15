import React from "react";
import { Link } from "react-router-dom";
import {
  FaLeaf,
  FaGem,
  FaGift,
  FaHeart,
  FaArrowRight,
} from "react-icons/fa";

import "./About.css";

const About = () => {
  return (
    <div className="velmora-about">

      
      <section className="about-hero">
        <div className="about-hero-overlay">
          <p className="about-eyebrow">THE WORLD OF VELMORA</p>

          <h1>
            More Than a Fragrance.
            <br />
            An Identity.
          </h1>

          <p className="about-hero-description">
            Discover the art of scent, where every fragrance tells
            a story and every moment becomes unforgettable.
          </p>

          <Link to="/collections" className="about-primary-btn">
            EXPLORE OUR COLLECTION
            <FaArrowRight />
          </Link>
        </div>
      </section>

      <section className="about-story">
        <div className="about-story-image">
          <img
            src="https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?auto=format&fit=crop&w=1000&q=85"
            alt="Elegant perfume bottle"
          />
        </div>

        <div className="about-story-content">
          <p className="about-section-label">OUR STORY</p>

          <h2>
            A World of
            <br />
            <span>Timeless Elegance</span>
          </h2>

          <div className="about-gold-line" />

          <p>
            At Velmora, we believe fragrance is more than something
            you wear. It is a personal expression of who you are,
            what you feel, and the memories you create.
          </p>

          <p>
            Inspired by elegance, individuality, and the beauty of
            everyday moments, Velmora brings together thoughtfully
            curated fragrances for every mood and occasion.
          </p>

          <p>
            From captivating woody notes to delicate floral
            accords, every scent in our collection invites you to
            discover a little more of yourself.
          </p>

          <Link to="/men" className="about-text-link">
            DISCOVER YOUR SCENT <FaArrowRight />
          </Link>
        </div>
      </section>

      <section className="about-philosophy">
        <div className="about-philosophy-content">
          <p className="about-section-label">THE VELMORA PHILOSOPHY</p>

          <h2>
            Your Scent.
            <br />
            Your Signature.
          </h2>

          <p>
            We celebrate the uniqueness of every individual.
            Our collection is designed to help you find a fragrance
            that feels personal, meaningful, and unmistakably yours.
          </p>
        </div>
      </section>

      <section className="about-values">
        <div className="about-section-heading">
          <p className="about-section-label">WHAT DEFINES US</p>

          <h2>The Velmora Promise</h2>

          <p>
            Thoughtful details. Memorable scents. A more personal
            fragrance experience.
          </p>
        </div>

        <div className="about-values-grid">
          <div className="about-value-card">
            <div className="about-value-icon">
              <FaGem />
            </div>

            <h3>Timeless Elegance</h3>

            <p>
              Fragrances inspired by sophistication, confidence,
              and effortless style.
            </p>
          </div>

          <div className="about-value-card">
            <div className="about-value-icon">
              <FaLeaf />
            </div>

            <h3>Thoughtful Selection</h3>

            <p>
              Explore distinctive fragrance profiles, from fresh
              and floral to warm and woody.
            </p>
          </div>

          <div className="about-value-card">
            <div className="about-value-icon">
              <FaHeart />
            </div>

            <h3>Made Personal</h3>

            <p>
              Find a scent that reflects your personality and
              accompanies your special moments.
            </p>
          </div>

          <div className="about-value-card">
            <div className="about-value-icon">
              <FaGift />
            </div>

            <h3>Beautiful Gifting</h3>

            <p>
              Discover fragrance gifts that make celebrations
              and thoughtful gestures more memorable.
            </p>
          </div>
        </div>
      </section>


      <section className="about-cta">
        <p className="about-section-label">FIND YOUR SIGNATURE</p>

        <h2>Let Your Fragrance Speak.</h2>

        <p>
          Your next favourite scent is waiting to be discovered.
        </p>

        <div className="about-cta-buttons">
          <Link to="/men" className="about-primary-btn">
            SHOP MEN
            <FaArrowRight />
          </Link>

          <Link to="/women" className="about-secondary-btn">
            SHOP WOMEN
            <FaArrowRight />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default About;