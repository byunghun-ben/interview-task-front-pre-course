"use client";
import React, { useState } from "react";
import styled from "@emotion/styled";
import CheckIcon from "../icons/CheckIcon";
import CloseIcon from "../icons/CloseIcon";

const Container = styled.div`
  width: 100%;
  max-width: 737px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const H1 = styled.p`
  font-size: 56px;
  line-height: 72px;
  font-weight: 700;
  margin-bottom: 64px;
  margin-top: 128px;
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  background-color: #e5e5e5;
  border: none;
  border-radius: 24px;
  padding: 32px;
  box-sizing: border-box;
  font-size: 20px;
  line-height: 28px;
  margin-bottom: 32px;
  ::placeholder {
    color: #b9b9b9;
  }
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

const Tab = styled.div`
  display: flex;
  margin-bottom: 24px;
`;

const TabItem = styled.button`
  font-weight: 600;
  color: #2182f3;
  padding: 8px 0;
  width: 108px;
  background-color: #ebf4ff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border: none;

  font-size: 16px;
  line-height: 24px;
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
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 16px;
`;

const CheckButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #e5e5e5;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2182f3;
  cursor: pointer;
`;

const TodoText = styled.span`
  flex: 1;
  font-size: 20px;
  line-height: 28px;
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
  cursor: pointer;
`;

interface Props {}

const TodoUserListPage = ({}: Props) => {
  const [todos, setTodos] = useState([
    { id: 1, text: "할 일 1", done: false },
    { id: 2, text: "할 일 2", done: true },
  ]);

  return (
    <Container>
      <H1>To Do List</H1>
      <Input type="text" placeholder="할 일을 입력해 주세요" />

      <TodoContainer>
        <Tab>
          <TabItem>All</TabItem>
          <TabItem>To Do</TabItem>
          <TabItem>Done</TabItem>
        </Tab>

        <TodoList>
          <TodoHeader>총 {todos.length}개</TodoHeader>
          {todos.map((todo) => (
            <TodoItem key={todo.id}>
              <CheckButton>
                <CheckIcon
                  width={20}
                  height={20}
                  style={{
                    color: todo.done ? "white" : "transparent",
                  }}
                />
              </CheckButton>
              <TodoText>{todo.text}</TodoText>
              <DeleteButton>
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
