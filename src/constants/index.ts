interface DurationStringType {
  readonly short_term: string;
  readonly medium_term: string;
  readonly long_term: string;
  readonly [index: string]: string;
}

export const loginURL: string = "http://localhost:8888/login";

export const durationString: DurationStringType = {
  short_term: "This month",
  medium_term: "Last few months",
  long_term: "All time",
};

export const FIVE_TOP_TRACKS: string =
  "https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=5";
