// ProfileIcon.js
import React, { useState } from 'react';
import './ProfileIcon.css'; // Add CSS for styling the icon

const ProfileIcon = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  return (
    <div className="profile-icon">
      <img
        src="C:\Users\91701\sr\src\boy.png" // Replace with the path to your profile icon SVG
        alt="Profile"
        onClick={toggleSettings}
      />
      {isSettingsOpen && (
        <div className="settings-modal">
          {/* Add settings options here */}
          <button onClick={toggleSettings}>Close</button>
        </div>
      )}
    </div>
  );
};

export default ProfileIcon;
