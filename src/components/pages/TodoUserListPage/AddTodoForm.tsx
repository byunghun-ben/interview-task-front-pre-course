"use client";

import styled from "@emotion/styled";
import { useState } from "react";

const Input = styled.input`
  width: 100%;
  background-color: #e5e5e5;
  border: none;
  border-radius: 24px;
  padding: 32px;
  font-size: 20px;
  line-height: 28px;
  margin-bottom: 32px;
  ::placeholder {
    color: #b9b9b9;
  }
`;

type Props = {
  onSubmit: (text: string) => void;
};

const AddTodoForm = ({ onSubmit }: Props) => {
  const [todoText, setTodoText] = useState("");
  const handleSubmit = () => {
    onSubmit(todoText);
    setTodoText("");
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit();
      }}
    >
      <Input
        type="text"
        name="todoText"
        placeholder="할 일을 입력해 주세요"
        onChange={(event) => {
          setTodoText(event.target.value);
        }}
        value={todoText}
      />
    </form>
  );
};

export default AddTodoForm;
