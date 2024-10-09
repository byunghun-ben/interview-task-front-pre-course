import { Todo } from "../types";

export const addTodo = (todoText: string, todos: Todo[]): Todo[] => {
  if (!todoText) {
    return todos;
  }

  const newTodo: Todo = {
    id: Math.max(0, ...todos.map((todo) => todo.id)) + 1,
    text: todoText,
    done: false,
  };
  return [...todos, newTodo];
};
