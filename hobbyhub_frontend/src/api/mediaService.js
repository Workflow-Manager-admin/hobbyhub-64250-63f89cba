//
// PUBLIC_INTERFACE
// Service for Media Upload API
/**
 * Media API service - for uploading/fetching sessions (placeholder logic).
 */

const SESSIONS_PLACEHOLDER = [
  {
    id: 1,
    title: "Beginner Guitar Jam",
    type: "Live",
    url: "https://placehold.co/240x160?text=Live+Guitar",
    startedAt: "2024-06-05T17:00:00Z",
  },
  {
    id: 2,
    title: "Knitting Tips Video",
    type: "Recorded",
    url: "https://placehold.co/240x160?text=Knitting+Video",
    startedAt: "2024-05-24T15:00:00Z",
  },
];

// PUBLIC_INTERFACE
export async function fetchSessions() {
  /** Simulate fetching media sessions. */
  return new Promise((resolve) =>
    setTimeout(() => resolve(SESSIONS_PLACEHOLDER), 700)
  );
}

// PUBLIC_INTERFACE
export async function uploadMedia(mediaFile) {
  /** Simulate a media upload and return uploaded session. */
  const newSession = {
    id: Date.now(),
    title: mediaFile.name || "Uploaded Session",
    type: "Recorded",
    url: "https://placehold.co/240x160?text=Uploaded+Video",
    startedAt: new Date().toISOString(),
  };
  return new Promise((resolve) =>
    setTimeout(() => resolve(newSession), 1200)
  );
}
