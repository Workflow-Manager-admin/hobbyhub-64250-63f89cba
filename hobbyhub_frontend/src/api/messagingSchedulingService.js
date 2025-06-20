//
// PUBLIC_INTERFACE
// Service for Messaging and Scheduling APIs
/**
 * Messaging/Scheduling API - mock chat and events.
 */

const MESSAGES_PLACEHOLDER = [
  {
    id: 1,
    from: "Alex Hobbyist",
    message: "Hey! Are you free for a wood workshop this weekend?",
    timestamp: "2024-06-07T10:15:00Z",
  },
  {
    id: 2,
    from: "Bella Biker",
    message: "Absolutely, count me in! 🚴‍♀️",
    timestamp: "2024-06-07T10:19:00Z",
  },
];
const EVENTS_PLACEHOLDER = [
  {
    id: 1,
    title: "Woodworking 101 Livestream",
    time: "2024-06-10T18:00:00Z",
    participants: ["Alex Hobbyist", "Sam Stitcher"],
  },
];

// PUBLIC_INTERFACE
export async function fetchMessages() {
  /** Simulate fetching messages. */
  return new Promise((resolve) =>
    setTimeout(() => resolve(MESSAGES_PLACEHOLDER), 600)
  );
}

// PUBLIC_INTERFACE
export async function sendMessage(content, from = "Alex Hobbyist") {
  /** Simulate sending a message. */
  const newMsg = {
    id: Date.now(),
    from,
    message: content,
    timestamp: new Date().toISOString(),
  };
  return new Promise((resolve) =>
    setTimeout(() => resolve(newMsg), 400)
  );
}

// PUBLIC_INTERFACE
export async function fetchEvents() {
  /** Simulate fetching scheduled events. */
  return new Promise((resolve) =>
    setTimeout(() => resolve(EVENTS_PLACEHOLDER), 600)
  );
}
