export const authEndPoint = "https://accounts.spotify.com/authorize";

const redirectURI = "http://localhost:3000/";
const clientID = "db3a0997982646619d04c0837edfe658";

const scopes = ["user-read-currently-playing", "user-top-read"];

export const loginURL = `${authEndPoint}?client_id=${clientID}&redirect_uri=${redirectURI}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
