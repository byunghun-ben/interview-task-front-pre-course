import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import TodoUserListPage from "./TodoUserListPage";

describe("TodoUserListPage", () => {
  it("renders TodoUserListPage", () => {
    render(<TodoUserListPage defaultTodos={[]} />);

    const hadingElement = screen.getByRole("heading", { level: 1 });

    expect(hadingElement).toBeInTheDocument();
  });

  it("Add Todo", () => {
    render(<TodoUserListPage defaultTodos={[]} />);

    const input = screen.getByTestId("todo-text-input");
    fireEvent.change(input, { target: { value: "새로운 할 일" } });

    const form = screen.getByTestId("add-todo-form");
    fireEvent.submit(form);

    const todoListHeader = screen.getByTestId("todo-list-header");

    expect(todoListHeader).toHaveTextContent("총 1개");
  });

  it("Remove Todo", () => {
    render(
      <TodoUserListPage
        defaultTodos={[
          {
            id: 1,
            text: "할 일 1",
            done: false,
          },
        ]}
      />
    );

    const todoItem = screen.getByTestId("todo-item-1");
    const deleteButton = screen.getByTestId("delete-button-1");

    expect(todoItem).toBeInTheDocument();

    fireEvent.click(deleteButton);

    expect(todoItem).not.toBeInTheDocument();
  });

  it("Toggle Todo", () => {
    render(
      <TodoUserListPage
        defaultTodos={[
          {
            id: 1,
            text: "할 일 1",
            done: false,
          },
        ]}
      />
    );

    const todoItem = screen.getByTestId("todo-item-1");
    const checkButton = screen.getByTestId("check-button-1");

    expect(todoItem).toHaveAttribute("data-done", "false");

    fireEvent.click(checkButton);

    expect(todoItem).toHaveAttribute("data-done", "true");
  });

  it("Filter Todo", () => {
    render(
      <TodoUserListPage
        defaultTodos={[
          {
            id: 1,
            text: "할 일 1",
            done: false,
          },
          {
            id: 2,
            text: "할 일 2",
            done: true,
          },
          {
            id: 3,
            text: "할 일 3",
            done: true,
          },
        ]}
      />
    );

    const todoListHeader = screen.getByTestId("todo-list-header");
    const allTab = screen.getByTestId("all-tab");
    const activeTab = screen.getByTestId("active-tab");
    const completedTab = screen.getByTestId("completed-tab");

    expect(todoListHeader).toHaveTextContent("총 3개");

    fireEvent.click(activeTab);

    expect(todoListHeader).toHaveTextContent("총 1개");

    fireEvent.click(completedTab);

    expect(todoListHeader).toHaveTextContent("총 2개");

    fireEvent.click(allTab);

    expect(todoListHeader).toHaveTextContent("총 3개");
  });
});
