export const exampleFunction = (a: number, b: number) => {
  if (b === 0) {
    throw new Error("Can't divide by 0");
  } else {
    return a / b;
  }
};
