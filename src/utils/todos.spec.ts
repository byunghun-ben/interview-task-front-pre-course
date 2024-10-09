import { describe, it, expect } from "@jest/globals";
import { addTodo, removeTodo, toggleTodo } from "./todos";

describe("addTodo", () => {
  it("todoText가 주어진 경우 새로운 todo를 추가합니다.", () => {
    const todoText = "새로운 할 일";
    const todos = [
      { id: 1, text: "할 일 1", done: false },
      { id: 2, text: "할 일 2", done: true },
    ];

    const newTodos = addTodo(todoText, todos);

    // 1. 새로운 todo가 추가되었는지 확인합니다.
    expect(newTodos).toHaveLength(3);
    // 2. 새로운 todo의 내용이 올바른지 확인합니다.
    expect(newTodos[2].text).toBe(todoText);
    // 3. 새로운 todo의 완료 여부가 false인지 확인합니다.
    expect(newTodos[2].done).toBe(false);
    // 4. 새로운 todo의 id가 중복되지 않는지 확인합니다.
    expect(newTodos[2].id).not.toBe(1);
  });

  it("todoText가 빈 문자열인 경우 새로운 todo를 추가하지 않습니다.", () => {
    const todoText = "";
    const todos = [
      { id: 1, text: "할 일 1", done: false },
      { id: 2, text: "할 일 2", done: true },
    ];

    const newTodos = addTodo(todoText, todos);

    // 1. 새로운 todo가 추가되지 않았는지 확인합니다.
    expect(newTodos).toHaveLength(2);
  });
});

describe("toggleTodo", () => {
  it("id에 해당하는 todo의 done을 반전시킵니다.", () => {
    const id = 2;
    const todos = [
      { id: 1, text: "할 일 1", done: false },
      { id: 2, text: "할 일 2", done: true },
    ];

    const newTodos = toggleTodo(id, todos);

    // 1. id에 해당하는 todo의 done이 반전되었는지 확인합니다.
    expect(newTodos[1].done).toBe(false);

    // 2. id에 해당하지 않는 todo의 done이 변경되지 않았는지 확인합니다.
    expect(newTodos[0].done).toBe(false);
  });
});

describe("removeTodo", () => {
  it("id에 해당하는 todo를 제거합니다.", () => {
    const id = 2;
    const todos = [
      { id: 1, text: "할 일 1", done: false },
      { id: 2, text: "할 일 2", done: true },
    ];

    const newTodos = removeTodo(id, todos);

    // 1. id에 해당하는 todo가 제거되었는지 확인합니다.
    expect(newTodos).toHaveLength(1);
    // 2. id에 해당하는 todo가 제거된 배열이 반환되었는지 확인합니다.
    expect(newTodos).not.toContain(todos.find((todo) => todo.id === id));
  });
});
