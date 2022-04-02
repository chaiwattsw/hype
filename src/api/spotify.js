const redirectURI = "http://localhost:3000/";
const clientID = "db3a0997982646619d04c0837edfe658";
const scopes = ["user-read-currently-playing", "user-top-read"];

export const authEndPoint = "https://accounts.spotify.com/authorize";

export const getTokenFromURL = () => {
  let accessToken = new URLSearchParams(window.location.hash).get("code");
};

export const register = () => {};

export const logout = () => {
  window.localStorage.removeItem("spotify_access_token");
};

export const loginURL = `${authEndPoint}?client_id=${clientID}&redirect_uri=${redirectURI}&scope=${scopes.join(
  "%20"
)}&response_type=token`;
