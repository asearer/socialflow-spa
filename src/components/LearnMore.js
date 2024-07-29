import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/styles.css'; 

const LearnMore = () => (
  <div className="learn-more-container">
    <h1 className="learn-more-title">Learn More About SocialFlow</h1>
    <p className="learn-more-description">
      SocialFlow is designed to enhance your interactions on Facebook, Instagram, and Twitter(X).
      Our platform uses advanced AI to personalize your automated messages and provides detailed analytics to optimize your engagement.
      Explore our features:
    </p>
    <ul className="learn-more-features">
      <li>Automated responses for common inquiries</li>
      <li>Customizable templates for various industries</li>
      <li>Real-time analytics and reporting</li>
      <li>AI-driven personalization for better engagement</li>
    </ul>
    <Link to="/" className="learn-more-button">
      Back to Home
    </Link>
  </div>
);

export default LearnMore;

