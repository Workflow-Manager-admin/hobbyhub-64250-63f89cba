//
// PUBLIC_INTERFACE
// Service for User Management API
/**
 * User API service - fetches and updates user profile data (placeholder logic).
 */

const USER_PROFILE_PLACEHOLDER = {
  id: 1,
  name: "Alex Hobbyist",
  bio: "Enthusiastic about woodworking, painting, and urban gardening.",
  skills: ["Woodworking", "Painting", "Gardening"],
  avatarUrl: "https://ui-avatars.com/api/?name=Alex+Hobbyist",
  media: ["https://placehold.co/200x150?text=Wood+Project"],
};

// PUBLIC_INTERFACE
export async function fetchUserProfile(userId = 1) {
  /** Simulates fetching user profile. */
  return new Promise((resolve) =>
    setTimeout(() => resolve(USER_PROFILE_PLACEHOLDER), 600)
  );
}

// PUBLIC_INTERFACE
export async function updateUserProfile(data) {
  /** Simulates updating a user profile. */
  return new Promise((resolve) =>
    setTimeout(() => resolve({ ...USER_PROFILE_PLACEHOLDER, ...data }), 400)
  );
}
