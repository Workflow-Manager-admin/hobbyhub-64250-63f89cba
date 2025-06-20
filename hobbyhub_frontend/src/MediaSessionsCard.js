import React from 'react';

// PUBLIC_INTERFACE
function MediaSessionsCard() {
  /**
   * Live/Recorded Sessions card stub.
   * Placeholder for video streaming/upload integration.
   */
  return (
    <section className="hh-card media-card">
      <h3>Live & Recorded Sessions</h3>
      <p>
        Attend or host tutorials and workshops!<br/>
        <em>[Live stream & video list will appear here]</em>
      </p>
      <button className="hh-btn" disabled>
        Connect Media Upload API (stub)
      </button>
    </section>
  );
}

export default MediaSessionsCard;
