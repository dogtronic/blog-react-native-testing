export const exampleFunction2 = (a: number, b: number) => {
  if (b === 0) {
    throw new Error("Can't divide by 0");
  } else {
    return {sum: a + b, quotient: a / b};
  }
};
