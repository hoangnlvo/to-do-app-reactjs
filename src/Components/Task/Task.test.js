import { render, fireEvent } from "@testing-library/react";
import Task from "./Task";

it("check task render", () => {
  const fnc = jest.fn();
  const mockData = {
    taskID: 1,
    taskName: "LearnJS",
    isDone: true,
    onClick: fnc,
  };

  const { queryByTestId } = render(<Task {...mockData} />);
  const checkbox = queryByTestId("taskCheckBox");
  const name = queryByTestId("taskName");
  const deleteButton = queryByTestId("deleteButton");
  expect(checkbox).toBeTruthy();
  expect(name).toBeTruthy();
  expect(deleteButton).toBeTruthy();

  expect(name.innerHTML).toBe(mockData.taskName);
  expect(checkbox.checked).toBe(mockData.taskIsDone);
  fireEvent.click(deleteButton);
  expect(fnc.mock.calls.length).toEqual(1);
});
