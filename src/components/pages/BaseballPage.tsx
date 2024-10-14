"use client";
import styled from "@emotion/styled";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { sampleMemberState } from "../../state/SampleState";
import BaseballResult from "./BaseballResult";

const Container = styled.div`
  padding: 1rem;
`;

const Title = styled.p`
  font-size: 2rem;
  font-weight: 700;
`;

const Description = styled.p``;

interface Props {}

const BaseballPage = ({}: Props) => {
  const [sampleMember, setSampleMember] = useRecoilState(sampleMemberState);

  const [inputValue, setInputValue] = useState<string>("");
  const [history, setHistory] = useState<string[]>([]);

  return (
    <Container>
      <Title>⚾️ 숫자 야구 게임</Title>
      <Description>1~9까지의 수를 중복없이 3개 입력해주세요.</Description>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setHistory((prev) => [...prev, inputValue]);
          setInputValue("");
        }}
      >
        확인
      </button>

      <BaseballResult history={history} />
    </Container>
  );
};

export default BaseballPage;
