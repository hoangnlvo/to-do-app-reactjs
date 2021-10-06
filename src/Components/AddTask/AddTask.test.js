import { render, fireEvent } from "@testing-library/react";
import AddTask from "./AddTask";

it("check task render", () => {
  const { queryByTestId, getByRole } = render(<AddTask />);
  const input = getByRole("textbox");
  const submitButton = queryByTestId("submitButton");

  expect(input).toBeTruthy();
  expect(submitButton).toBeTruthy();
});

describe("change input", () => {
  it("onchange", () => {
    const { getByRole } = render(<AddTask />);
    const input = getByRole("textbox");
    fireEvent.change(input, { target: { value: "test value" } });
    expect(input.value).toBe("test value");
  });
});
