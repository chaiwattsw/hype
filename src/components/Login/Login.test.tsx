import { render, screen } from "@testing-library/react";
import { loginURL } from "../../constants";
import Login from "./index";

describe("Login component", () => {
  it("Should render Login component", () => {
    render(<Login />);
    expect(
      screen.getByText(
        "Find your top tracks/artists from Spotify and discover new song from your top tracks!"
      )
    ).toBeInTheDocument();
  });
  it("Should have spotify login url in href attribute", () => {
    render(<Login />);
    expect(screen.getByRole("link")).toHaveAttribute("href", loginURL);
  });
});
