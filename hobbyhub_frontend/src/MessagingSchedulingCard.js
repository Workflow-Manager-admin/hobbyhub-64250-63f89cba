import React, { useState } from 'react';
import { fetchMessages, fetchEvents } from './api/messagingSchedulingService';

// PUBLIC_INTERFACE
function MessagingSchedulingCard() {
  /**
   * Messaging & Scheduling card, connects to mock APIs to show chat/events.
   */
  const [connected, setConnected] = useState(false);
  const [messages, setMessages] = useState(null);
  const [events, setEvents] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleConnect = async () => {
    setLoading(true);
    const [msgs, sched] = await Promise.all([fetchMessages(), fetchEvents()]);
    setMessages(msgs);
    setEvents(sched);
    setConnected(true);
    setLoading(false);
  };

  return (
    <section className="hh-card messaging-card">
      <h3>In-App Messaging & Scheduling</h3>
      <p>
        Chat with hobby friends and book sessions!<br/>
        {(!connected || (!messages && !events)) ? (
          <em>[Chat UI & scheduler coming soon]</em>
        ) : (
          <span>
            <div style={{ marginBottom: 7 }}>
              <strong style={{ fontSize: '1em' }}>Latest Messages:</strong>
              <ul style={{ margin: '8px 0 0 0', padding: 0, listStyle: 'none' }}>
                {messages && messages.map(msg => (
                  <li key={msg.id} style={{ marginBottom: 3 }}>
                    <span style={{ color: '#2196F3', fontWeight: 600 }}>{msg.from}:</span> &nbsp;
                    <span style={{ color: '#293845' }}>{msg.message}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <strong style={{ fontSize: '1em' }}>Upcoming Events:</strong>
              <ul style={{ margin: '6px 0', padding: 0, listStyle: 'none' }}>
                {events && events.map(ev => (
                  <li key={ev.id}>
                    <span style={{ fontWeight: 600 }}>{ev.title}</span>{' '}
                    <span style={{ color: '#888', fontSize: '0.95em' }}>
                      at {new Date(ev.time).toLocaleString(undefined, { dateStyle: 'short', timeStyle: 'short' })}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </span>
        )}
      </p>
      <button className="hh-btn" onClick={handleConnect} disabled={connected || loading}>
        {loading ? 'Connecting...' : connected ? 'Connected!' : 'Connect Messaging/Scheduling API'}
      </button>
    </section>
  );
}

export default MessagingSchedulingCard;
