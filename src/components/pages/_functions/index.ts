export const parseInputString = (inputValue: string) => {
  const numberArr = Array.from(new Set(inputValue.split("").map(Number)));

  if (numberArr.length !== 3) {
    throw new Error("에러입니다.");
  }

  return numberArr;
};

export const compareAnswer = (inputNumberArr: number[], answer: number[]) => {
  const result = [0, 0];

  inputNumberArr.forEach((num, index) => {
    // strike 판단
    if (num === answer[index]) {
      result[0] += 1;
    } else {
      // ball 판단
      const isBall = answer.includes(num);
      if (isBall) {
        result[1] += 1;
      }
    }
  });

  return result;
};

export const createText = ([strike, ball]: number[]) => {
  if (!strike && !ball) {
    return "낫싱";
  }

  let text = "";

  if (!!strike) {
    text += `${strike} 스트라이크`;
  }

  if (!!ball) {
    text += `${ball} 볼`;
  }

  return text;
};
