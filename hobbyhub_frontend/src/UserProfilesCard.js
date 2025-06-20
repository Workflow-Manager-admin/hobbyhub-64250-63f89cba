import React, { useState } from 'react';
import { fetchUserProfile } from './api/userService';

// PUBLIC_INTERFACE
function UserProfilesCard() {
  /**
   * User Profiles & Portfolios card stub.
   * Placeholder for future API integration to display user info.
   */
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleConnect = async () => {
    setLoading(true);
    const data = await fetchUserProfile();
    setProfile(data);
    setLoading(false);
  };

  return (
    <section className="hh-card profiles-card">
      <h3>User Profiles & Portfolios</h3>
      <p>
        Showcase your hobbies, skills, and portfolio!<br/>
        {!profile ? (
          <em>[Profile and media gallery will appear here]</em>
        ) : (
          <span>
            <img
              src={profile.avatarUrl}
              alt="User"
              style={{ width: 56, borderRadius: '50%', margin: '12px 0' }}
            /><br/>
            <strong>{profile.name}</strong><br/>
            <span style={{ fontSize: '0.96rem', color: '#666' }}>{profile.bio}</span>
            <ul style={{ margin: '8px 0 0 0', padding: 0, listStyle: 'none' }}>
              {profile.skills.map((skill) => (
                <li key={skill} style={{ display: 'inline-block', marginRight: 8, background: '#f4f4f4', borderRadius: 8, padding: '2px 8px', color: '#293845', fontSize: '0.92em' }}>{skill}</li>
              ))}
            </ul>
            <div style={{ marginTop: 8 }}>
              {profile.media.map((mUrl) => (
                <img key={mUrl} alt="portfolio" src={mUrl} style={{ width: 55, borderRadius: 8, marginRight: 4, border: '1px solid #eee' }} />
              ))}
            </div>
          </span>
        )}
      </p>
      <button className="hh-btn" onClick={handleConnect} disabled={!!profile || loading}>
        {loading ? 'Connecting...' : profile ? 'Connected!' : 'Connect User API'}
      </button>
    </section>
  );
}

export default UserProfilesCard;
