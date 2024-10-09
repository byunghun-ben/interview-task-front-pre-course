"use client";

import type { Tab } from "@/types";
import styled from "@emotion/styled";

const TabList = styled.div`
  display: flex;
  margin-bottom: 24px;
`;

const TabItem = styled.button<{ selected: boolean }>`
  font-weight: 600;
  color: ${(props) => (props.selected ? "#2182f3" : "#454545")};
  padding: 8px 0;
  width: 108px;
  background-color: ${(props) => (props.selected ? "#ebf4ff" : "white")};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border: none;

  font-size: 16px;
  line-height: 24px;
`;

type Props = {
  selected: Tab;
  onChange: (tab: Tab) => void;
};

const TodoTab = ({ selected, onChange }: Props) => {
  return (
    <TabList>
      <TabItem
        selected={selected === "all"}
        onClick={() => {
          onChange("all");
        }}
      >
        All
      </TabItem>
      <TabItem
        selected={selected === "active"}
        onClick={() => {
          onChange("active");
        }}
      >
        To Do
      </TabItem>
      <TabItem
        selected={selected === "completed"}
        onClick={() => {
          onChange("completed");
        }}
      >
        Done
      </TabItem>
    </TabList>
  );
};

export default TodoTab;
