import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/css/styles.css'; // Import custom CSS

const Header = () => {
  return (
    <header className="glass-header p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">SocialFlow</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <NavLink 
                to="/" 
                end 
                className={({ isActive }) => 
                  isActive ? 'nav-link nav-link-active' : 'nav-link'
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  isActive ? 'nav-link nav-link-active' : 'nav-link'
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/features" 
                className={({ isActive }) => 
                  isActive ? 'nav-link nav-link-active' : 'nav-link'
                }
              >
                Features
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/recruitment" 
                className={({ isActive }) => 
                  isActive ? 'nav-link nav-link-active' : 'nav-link'
                }
              >
                Recruitment
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/feedback" 
                className={({ isActive }) => 
                  isActive ? 'nav-link nav-link-active' : 'nav-link'
                }
              >
                Feedback
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;








