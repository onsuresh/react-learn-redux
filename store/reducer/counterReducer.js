const counterReducer = (std = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      console.log(action);
      if (action.value) {
        std = std + action.value;
      } else {
        std = std + 1;
      }
      return std;
    case "DECREMENT":
      console.log(action.info);
      return std - 1;
    default:
      return std;
  }
};

export default counterReducer;
