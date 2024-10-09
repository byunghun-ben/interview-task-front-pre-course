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

export const toggleTodo = (id: number, todos: Todo[]): Todo[] => {
  return todos.map((todo) =>
    todo.id === id ? { ...todo, done: !todo.done } : todo
  );
};

export const removeTodo = (id: number, todos: Todo[]): Todo[] => {
  return todos.filter((todo) => todo.id !== id);
};
