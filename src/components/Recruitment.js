import React from 'react';
import '../assets/css/styles.css'; // Import custom CSS

const Recruitment = () => (
  <div className="container mx-auto p-6 glass-card mt-8">
    <h2 className="text-3xl font-semibold text-indigo-900">Join Our Team</h2>
    <p className="mt-4 text-gray-700">
      We are looking for talented developers to help build and improve SocialFlow. If you are passionate about 
      social media automation and AI, we'd love to hear from you!
    </p>
    <p className="mt-4 text-gray-700">
      Email us at: <a href="mailto:recruitment@socialflow.com" className="text-blue-500 hover:text-blue-700">recruitment@socialflow.com</a>
    </p>
  </div>
);

export default Recruitment;




