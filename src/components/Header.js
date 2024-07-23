import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom
import '../assets/css/styles.css'; // Import custom CSS

const Header = () => (
  <header className="glass-header p-4 shadow-lg">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold">SocialFlow</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><NavLink to="/" end className="text-white hover:text-blue-300">Home</NavLink></li>
          <li><NavLink to="/about" className="text-white hover:text-blue-300">About</NavLink></li>
          <li><NavLink to="/features" className="text-white hover:text-blue-300">Features</NavLink></li>
          <li><NavLink to="/recruitment" className="text-white hover:text-blue-300">Recruitment</NavLink></li>
          <li><NavLink to="/feedback" className="text-white hover:text-blue-300">Feedback</NavLink></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;







