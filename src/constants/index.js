const redirectURI = "http://localhost:3000";
const clientID = "db3a0997982646619d04c0837edfe658";
const scopes = [
  "user-modify-playback-state",
  "user-read-private",
  "user-top-read",
  "user-library-modify",
  "user-library-read",
  "user-read-recently-played",
  "user-read-email",
];
export const authEndPoint = "https://accounts.spotify.com/authorize";

export const loginURL = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=code&redirect_uri=${redirectURI}&scope=${scopes.join(
  "%20"
)}`;

export const durationString = {
  short_term: "This month",
  medium_term: "Last few months",
  long_term: "All time",
};
