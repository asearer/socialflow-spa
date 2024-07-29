import React, { useState } from 'react';
import MissionStatement from './MissionStatement'; 
import '../assets/css/styles.css'; 

const Mission = () => {
  const [showMissionStatement, setShowMissionStatement] = useState(false);

  const handleButtonClick = () => {
    setShowMissionStatement(prevState => !prevState);
  };

  return (
    <div className="mission-container glass-card">
      <h1 className="mission-title">About Us</h1>
      <p className="mission-description">
        SocialFlow is designed to enhance your interactions on Facebook, Instagram, and Twitter(X).
        Our platform uses advanced AI to personalize your automated messages and provides detailed analytics to optimize your engagement.
        Explore our features and learn more about our mission.
      </p>
      <button className="show-mission-button" onClick={handleButtonClick}>
        {showMissionStatement ? 'Hide Mission Statement' : 'Show Mission Statement'}
      </button>
      {showMissionStatement && <MissionStatement />}
    </div>
  );
};

export default Mission;

