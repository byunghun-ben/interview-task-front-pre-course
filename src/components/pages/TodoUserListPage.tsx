"use client";
import React, { FormEvent, useMemo, useState } from "react";
import styled from "@emotion/styled";
import CheckIcon from "../icons/CheckIcon";
import CloseIcon from "../icons/CloseIcon";
import type { Todo, Tab } from "@/types";
import { addTodo, removeTodo, toggleTodo } from "@/utils/todos";
import AddTodoForm from "./TodoUserListPage/AddTodoForm";
import TodoTab from "./TodoUserListPage/TodoTab";

const Container = styled.div`
  width: 100%;
  max-width: 737px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const H1 = styled.h1`
  font-size: 56px;
  line-height: 72px;
  font-weight: 700;
  margin-bottom: 64px;
  margin-top: 128px;
  text-align: center;
`;

const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  background-color: white;
  padding: 32px;
  border-radius: 24px;
`;

const TodoList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TodoHeader = styled.div`
  width: 100%;
  padding: 16px;
  font-size: 20px;
  line-height: 28px;
`;

const TodoItem = styled.div`
  width: 100%;
  padding: 32px 16px;
  display: flex;
  align-items: center;
  gap: 16px;
`;

const CheckButton = styled.button<{ done: boolean }>`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #e5e5e5;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.done ? "#2182f3" : "white")};
`;

const TodoText = styled.span<{ done: boolean }>`
  flex: 1;
  font-size: 20px;
  line-height: 28px;
  color: ${(props) => (props.done ? "#868686" : "#000000")};
`;

const DeleteButton = styled.button`
  width: 24px;
  height: 24px;
  padding: 0;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: #b9b9b9;
`;

interface Props {
  defaultTodos: Todo[];
}

const TodoUserListPage = ({ defaultTodos }: Props) => {
  const [todos, setTodos] = useState<Todo[]>(defaultTodos);
  const [tab, setTab] = useState<Tab>("all");

  // 탭에 따라 보여질 todo 리스트를 필터링합니다.
  const filteredTodos = useMemo(() => {
    switch (tab) {
      case "all": {
        return todos;
      }

      case "active": {
        return todos.filter((todo) => !todo.done);
      }

      case "completed": {
        return todos.filter((todo) => todo.done);
      }

      default: {
        return todos;
      }
    }
  }, [todos, tab]);

  const handleSubmit = (todoText: string) => {
    setTodos((todos) => addTodo(todoText, todos));
  };

  const handleClickCheckButton = (id: number) => {
    setTodos((todos) => toggleTodo(id, todos));
  };

  const handleClickDeleteButton = (id: number) => {
    setTodos((todos) => removeTodo(id, todos));
  };

  return (
    <Container>
      <H1>To Do List</H1>
      <AddTodoForm onSubmit={handleSubmit} />

      <TodoContainer>
        <TodoTab selected={tab} onChange={setTab} />

        <TodoList data-testid="todo-list">
          <TodoHeader data-testid="todo-list-header">
            총 {filteredTodos.length}개
          </TodoHeader>
          {filteredTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              data-testid={`todo-item-${todo.id}`}
              data-done={todo.done}
            >
              <CheckButton
                done={todo.done}
                onClick={() => handleClickCheckButton(todo.id)}
                data-testid={`check-button-${todo.id}`}
              >
                <CheckIcon
                  width={20}
                  height={20}
                  style={{
                    color: todo.done ? "white" : "transparent",
                  }}
                />
              </CheckButton>
              <TodoText done={todo.done}>{todo.text}</TodoText>
              <DeleteButton
                onClick={() => handleClickDeleteButton(todo.id)}
                data-testid={`delete-button-${todo.id}`}
              >
                <CloseIcon />
              </DeleteButton>
            </TodoItem>
          ))}
        </TodoList>
      </TodoContainer>
    </Container>
  );
};

export default TodoUserListPage;
