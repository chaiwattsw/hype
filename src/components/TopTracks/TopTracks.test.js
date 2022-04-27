import { render, screen } from "@testing-library/react";
import TopTracks from "./index";

test("render Toptracks with data prop", () => {
  render(<TopTracks />);
  expect(screen.getByText("Top Tracks")).toBeInTheDocument();
});
