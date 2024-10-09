import React from "react";
import TodoUserListPage from "../components/pages/TodoUserListPage";
import { Todo } from "@/types";

interface Props {}

const Page = ({}: Props) => {
  const todos: Todo[] = [
    {
      id: 1,
      text: "출근하고 비타민 먹기",
      done: true,
    },
    {
      id: 2,
      text: "Daily Scrum 작성하기",
      done: false,
    },
    {
      id: 3,
      text: "주간회의 참여하기",
      done: false,
    },
  ];

  return <TodoUserListPage defaultTodos={todos} />;
};

export default Page;
