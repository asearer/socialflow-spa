import React from 'react';
import { NavLink } from 'react-router-dom'; 
import '../assets/css/styles.css'; 

const Header = () => (
  <header className="glass-header">
    <div className="container header-nav">
      <h1 className="text-2xl font-bold">SocialFlow</h1>
      <nav>
        <ul className="nav-list">
          <li className="nav-item"><NavLink to="/" end className="nav-link">Home</NavLink></li>
          <li className="nav-item"><NavLink to="/about" className="nav-link">About</NavLink></li>
          <li className="nav-item"><NavLink to="/features" className="nav-link">Features</NavLink></li>
          <li className="nav-item"><NavLink to="/recruitment" className="nav-link">Recruitment</NavLink></li>
          <li className="nav-item"><NavLink to="/feedback" className="nav-link">Feedback</NavLink></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;









