const initialState = 0;

const changeNum = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DESCREMENT":
      return state - 1;
    case "MULTIPLY":
      return state * 2;
    case "DIVISION":
      return state / 2;
    default:
      return state;
  }
};

export default changeNum;
