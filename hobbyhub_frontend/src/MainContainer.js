import React from 'react';
import './MainContainer.css';
import UserProfilesCard from './UserProfilesCard';
import HobbyMatchmakingCard from './HobbyMatchmakingCard';
import MessagingSchedulingCard from './MessagingSchedulingCard';
import MediaSessionsCard from './MediaSessionsCard';

// PUBLIC_INTERFACE
function MainContainer() {
  /**
   * HobbyHub Main Container, with feature sections in a card-based grid layout.
   */
  return (
    <div className="main-container">
      <h2 className="hh-title">Welcome to HobbyHub</h2>
      <div className="hh-card-grid">
        <UserProfilesCard />
        <HobbyMatchmakingCard />
        <MessagingSchedulingCard />
        <MediaSessionsCard />
      </div>
    </div>
  );
}

export default MainContainer;
