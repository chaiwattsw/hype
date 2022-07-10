type durationType = "short_term" | "medium_term" | "long_term";

export const loginURL = "http://localhost:8888/login";

export const durationString: Record<durationType | string, string> = {
  short_term: "This month",
  medium_term: "Last few months",
  long_term: "All time",
};
