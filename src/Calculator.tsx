import React from "react";

type TProps = {
  left: number;
  operator: string;
  right: number;
};
const operations = {
  "+": (left: number, right: number): number => left + right,
  "-": (left: number, right: number): number => left - right,
  "*": (left: number, right: number): number => left * right,
  "/": (left: number, right: number): number => left / right
};

const Calculator: React.FC<TProps> = ({ left, operator, right }) => {
  const result = operations[operator](left, right);
  return (
    <>
      <code>
        {left} {operator} {right} = {result}
      </code>
    </>
  );
};

export default Calculator;
