type durationType = "short_term" | "medium_term" | "long_term";

export const loginURL: string = "http://localhost:8888/login";

export const durationString: Record<durationType, string> = {
  short_term: "This month",
  medium_term: "Last few months",
  long_term: "All time",
};

export const FIVE_TOP_TRACKS: string =
  "https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=5";

export const SPOTIFY_PROFILE: string = "https://api.spotify.com/v1/me";
