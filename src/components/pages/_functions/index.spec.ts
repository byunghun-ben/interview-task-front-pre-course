import { compareAnswer, parseInputString } from ".";

describe("parseInputString 함수 테스트", () => {
  it("string 입력값을 받았을 때, [num, num, num]으로 변환한다.", () => {
    const inputString = "123";
    const result = parseInputString(inputString);
    expect(result).toEqual([1, 2, 3]);
  });

  it("결과값이 중복되지 않은 3개의 숫자로 된 배열이 아닌 경우 에러를 반환한다.", () => {
    const inputString = "112";
    expect(() => parseInputString(inputString)).toThrow();
  });
});

describe("compareAnswer 함수 테스트", () => {
  it("inputNumberArr[1, 2, 3] answer[1, 2, 3]를 입력값으로 받아, [3, 0]반환", () => {
    const inputNumberArr = [1, 2, 3];
    const answer = [1, 2, 3];

    const result = compareAnswer(inputNumberArr, answer);
    expect(result).toEqual([3, 0]);
  });

  it("([1, 2, 4], [1, 4, 2]) => [1, 2]", () => {
    expect(compareAnswer([1, 2, 4], [1, 4, 2])).toEqual([1, 2]);
  });

  it("([1, 2, 3], [4, 5, 6]) => [0, 0]", () => {
    expect(compareAnswer([1, 2, 3], [4, 5, 6])).toEqual([0, 0]);
  });
});
