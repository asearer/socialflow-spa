import React from 'react';
import '../assets/css/styles.css'; // Import custom CSS

const Home = () => (
  <div className="container mx-auto p-6 glass-card mt-8">
    <h2 className="text-3xl font-semibold text-indigo-900">Welcome to SocialFlow</h2>
    <p className="mt-4 text-gray-700">
      Automate and personalize your social media interactions across Facebook, Instagram, and Twitter. 
      SocialFlow helps small businesses and content creators manage their online presence with ease and efficiency.
    </p>
    <button className="mt-4 bg-glass-blue text-white px-4 py-2 rounded hover:bg-blue-800">Learn More</button>
  </div>
);

export default Home;



