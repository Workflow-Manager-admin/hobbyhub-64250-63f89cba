//
// PUBLIC_INTERFACE
// Service for Matching Algorithm API
/**
 * Matching API service - finds matches for a user (placeholder logic).
 */

// Mocked matches
const MATCHES_PLACEHOLDER = [
  {
    id: 11,
    name: "Bella Biker",
    sharedHobbies: ["Cycling", "Hiking"],
    matchScore: 88,
    avatarUrl: "https://ui-avatars.com/api/?name=Bella+Biker",
  },
  {
    id: 14,
    name: "Sam Stitcher",
    sharedHobbies: ["Knitting", "Painting"],
    matchScore: 74,
    avatarUrl: "https://ui-avatars.com/api/?name=Sam+Stitcher",
  },
];

// PUBLIC_INTERFACE
export async function findMatches(userId = 1) {
  /** Simulates matchmaking API result. */
  return new Promise((resolve) =>
    setTimeout(() => resolve(MATCHES_PLACEHOLDER), 700)
  );
}
