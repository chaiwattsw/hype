import { DurationState } from "types";

export const loginURL = "http://localhost:8888/login";

export const durationString: Record<DurationState, string> = {
  short_term: "This month",
  medium_term: "Last few months",
  long_term: "All time",
};
