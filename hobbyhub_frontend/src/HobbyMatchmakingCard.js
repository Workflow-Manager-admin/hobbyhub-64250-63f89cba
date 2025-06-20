import React, { useState } from 'react';
import { findMatches } from './api/matchingService';

// PUBLIC_INTERFACE
function HobbyMatchmakingCard() {
  /**
   * Hobby Matchmaking card now connects to stubbed matching API.
   */
  const [matches, setMatches] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleConnect = async () => {
    setLoading(true);
    const res = await findMatches();
    setMatches(res);
    setLoading(false);
  };

  return (
    <section className="hh-card matchmaking-card">
      <h3>Hobby Matchmaking</h3>
      <p>
        Find and connect with hobbyists who share your interests.<br/>
        {!matches ? (
          <em>[Match results and AI matching will appear here]</em>
        ) : (
          <span>
            <strong>Matches:</strong>
            <ul style={{ margin: '6px 0 0 0', padding: 0, listStyle: 'none' }}>
              {matches.map((match) => (
                <li key={match.id} style={{ marginBottom: 6 }}>
                  <img src={match.avatarUrl} alt="" style={{ width: 32, borderRadius: 15, marginRight: 7, verticalAlign: 'middle' }} />
                  <span style={{ fontWeight: 600 }}>{match.name}</span> &nbsp;
                  <span style={{ color: "#2196F3", fontSize: "0.92em" }}>
                    [{match.sharedHobbies.join(', ')}]
                  </span>
                  <span style={{ float: "right", fontWeight: 400, color: "#555" }}>
                    Score: {match.matchScore}
                  </span>
                </li>
              ))}
            </ul>
          </span>
        )}
      </p>
      <button className="hh-btn" onClick={handleConnect} disabled={!!matches || loading}>
        {loading ? 'Connecting...' : matches ? 'Connected!' : 'Connect Matchmaking API'}
      </button>
    </section>
  );
}

export default HobbyMatchmakingCard;
