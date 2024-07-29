import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/styles.css'; 

const Home = () => (
  <div className="home-container">
    <div className="glass-card">
      <h2 className="text-3xl font-semibold text-indigo-900">Welcome to SocialFlow</h2>
      <p className="mt-4 text-gray-700">
        Automate and personalize your social media interactions across Facebook, Instagram, and Twitter. 
        SocialFlow helps small businesses and content creators manage their online presence with ease and efficiency.
      </p>
      <Link to="/learn-more" className="learn-more-button">Learn More</Link>
    </div>
  </div>
);

export default Home;






