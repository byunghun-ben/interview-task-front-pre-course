import styled from "@emotion/styled";
import { useEffect, useMemo, useState } from "react";
import RandomBallCreator from "../../domain/RandomBallCreator";
import { compareAnswer, createText, parseInputString } from "./_functions";

const SubTitle = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
`;

type Props = {
  history: string[];
};

const BaseballResult = ({ history }: Props) => {
  const [answer, setAnswer] = useState<number[]>([]);
  useEffect(() => {
    const ballNumbers = RandomBallCreator.createRandomBalls();
    console.log(ballNumbers);
    setAnswer(ballNumbers);
  }, []);

  const results = useMemo<string[]>(() => {
    return history.map((inputValue) => {
      const inputNumArr = parseInputString(inputValue);
      const compareResult = compareAnswer(inputNumArr, answer);
      const resultText = createText(compareResult);

      return `${inputValue}: ${resultText}`;
    });
  }, [history, answer]);

  const isRight = useMemo(() => {
    return history.some((inputValue) => {
      const inputNumArr = parseInputString(inputValue);
      const [strike, _] = compareAnswer(inputNumArr, answer);
      return strike === 3;
    });
  }, [history]);

  return (
    <>
      <SubTitle>📄 결과</SubTitle>
      {results.map((result, index) => (
        <div key={`${result}-${index}`}>{result}</div>
      ))}
      {isRight && (
        <>
          <p>축하합니다!</p>
        </>
      )}
    </>
  );
};

export default BaseballResult;
