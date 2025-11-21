import { soma, subtrair } from "./soma";

describe("soma", () => {
  it("deve somar dois números", () => {
    const value = soma(1, 2);
    expect(value).toBe(3);
  });
});

describe("subtrair", () => {
  it("deve subtrair dois números", () => {
    const value = subtrair(4, 2);
    expect(value).toBe(2);
  });
});
