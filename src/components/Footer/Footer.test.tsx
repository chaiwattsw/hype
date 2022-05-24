import { render, screen } from "@testing-library/react";
import Footer from "./index";

describe("Footer component", () => {
  it("Should render Footer component", () => {
    render(<Footer />);
    expect(screen.getByText("chaiwattsw")).toBeInTheDocument();
  });
});
