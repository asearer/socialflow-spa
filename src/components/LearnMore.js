import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/styles.css'; // Import custom CSS

const LearnMore = () => (
  <div className="container mx-auto p-6 glass-card mt-8">
    <h1 className="text-4xl font-bold text-indigo-900">Learn More About SocialFlow</h1>
    <p className="mt-4 text-gray-700">
      SocialFlow is designed to enhance your interactions on Facebook, Instagram, and Twitter(X).
      Our platform uses advanced AI to personalize your automated messages and provides detailed analytics to optimize your engagement.
      Explore our features:
    </p>
    <ul className="mt-4 list-disc list-inside text-gray-700">
      <li>Automated responses for common inquiries</li>
      <li>Customizable templates for various industries</li>
      <li>Real-time analytics and reporting</li>
      <li>AI-driven personalization for better engagement</li>
    </ul>
    <Link to="/" className="mt-4 inline-block bg-glass-blue text-white px-4 py-2 rounded hover:bg-blue-800">
      Back to Home
    </Link>
  </div>
);

export default LearnMore;
