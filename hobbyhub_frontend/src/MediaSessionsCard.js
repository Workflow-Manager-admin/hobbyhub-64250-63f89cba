import React, { useState } from 'react';
import { fetchSessions } from './api/mediaService';

// PUBLIC_INTERFACE
function MediaSessionsCard() {
  /**
   * Live/Recorded Sessions card, connects to mock media API.
   */
  const [sessions, setSessions] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleConnect = async () => {
    setLoading(true);
    const res = await fetchSessions();
    setSessions(res);
    setLoading(false);
  };

  return (
    <section className="hh-card media-card">
      <h3>Live & Recorded Sessions</h3>
      <p>
        Attend or host tutorials and workshops!<br/>
        {!sessions ? (
          <em>[Live stream & video list will appear here]</em>
        ) : (
          <span>
            <ul style={{ margin: '10px 0 0 0', padding: 0, listStyle: 'none' }}>
              {sessions.map((s) => (
                <li key={s.id} style={{ marginBottom: 4 }}>
                  <img src={s.url} alt={s.title} style={{ width: 52, borderRadius: 6, marginRight: 10, verticalAlign: 'middle', border: '1px solid #dedede' }} />
                  <span style={{ fontWeight: 600 }}>{s.title}</span>
                  {' '}
                  <span style={{ fontSize: '0.9em', color: '#666' }}>({s.type})</span>
                  <span style={{ fontSize: '0.95em', color: '#888', marginLeft: 4 }}>
                    {new Date(s.startedAt).toLocaleString()}
                  </span>
                </li>
              ))}
            </ul>
          </span>
        )}
      </p>
      <button className="hh-btn" onClick={handleConnect} disabled={!!sessions || loading}>
        {loading ? 'Connecting...' : sessions ? 'Connected!' : 'Connect Media Upload API'}
      </button>
    </section>
  );
}

export default MediaSessionsCard;
