const increment = (val = 0) => {
  return {
    type: "INCREMENT",
    value: val,
    info: `incremented by ${val}`
  };
};
const decrement = (value) => {
  return {
    type: "DECREMENT",
    info: "decremented by one"
  };
};

export { increment, decrement };
