import { render, screen, cleanup } from "@testing-library/react";
import Footer from "./index";

test("should render Footer component", () => {
  render(<Footer />);
  expect(screen.getByText("chaiwattsw")).toBeInTheDocument();
});
