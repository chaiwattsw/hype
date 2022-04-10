import { render, screen } from "@testing-library/react";
import TopTracks from "./index";

it("render Toptracks with data prop", () => {
  render(<TopTracks data={[]} />);
  expect(screen.getByText("Top Tracks")).toBeInTheDocument();
});

it("render Toptracks with no prop", () => {
  render(<TopTracks />);
  expect(screen.getByText("No data")).toBeInTheDocument();
});
