import { render } from "@testing-library/react";
import Header from "./Header";

it("check header render", () => {
  const { queryByTestId } = render(<Header />);
  const header = queryByTestId("headerTitle");
  expect(header).toBeTruthy();
  expect(header).toHaveTextContent("My Tasks");
  expect(header).toHaveAttribute("href", "/");
});
