const redirectURI = "http://localhost:3000/";
const clientID = "db3a0997982646619d04c0837edfe658";
const scopes = ["user-read-currently-playing", "user-top-read"];

export const authEndPoint = "https://accounts.spotify.com/authorize";

export const getCodeFromURL = new URLSearchParams(window.location.search).get(
  "code"
);

export const login = () => {};

export const logout = () => {};

export const loginURL = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=code&redirect_uri=${redirectURI}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`;
