import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Features from './components/Features';
import Recruitment from './components/Recruitment';
import Feedback from './components/Feedback';
import LearnMore from './components/LearnMore'; // Import LearnMore component

// Main App component with routing setup
const App = () => (
  <Router>
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/recruitment" element={<Recruitment />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/learn-more" element={<LearnMore />} /> {/* Add route for LearnMore */}
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;



