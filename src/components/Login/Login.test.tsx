import { render, screen, cleanup } from "@testing-library/react";
import { loginURL } from "../../constants";
import Login from "./index";

test("should render Login component", () => {
  render(<Login />);
  expect(
    screen.getByText(
      "Find your top tracks/artists from Spotify and discover new song from your top tracks!"
    )
  ).toBeInTheDocument();
});
test("should have spotify login url in href attribute", () => {
  render(<Login />);
  expect(screen.getByRole("link")).toHaveAttribute("href", loginURL);
});
