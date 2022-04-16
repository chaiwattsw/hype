const redirectURI = "http://localhost:3000";
const clientID = "db3a0997982646619d04c0837edfe658";
const scopes =
  "streaming user-modify-playback-state user-read-private user-read-email user-read-playback-state user-top-read user-library-modify user-library-read";
export const authEndPoint = "https://accounts.spotify.com/authorize";

export const loginURL = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=code&redirect_uri=${redirectURI}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20user-top-read`;
