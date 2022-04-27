import { render, screen } from "@testing-library/react";
import TopTracks from "./index";

describe("Top Tracks component", () => {
  it("render Toptracks", () => {
    render(<TopTracks />);
    expect(screen.getByText("Top Tracks")).toBeInTheDocument();
  });
});
