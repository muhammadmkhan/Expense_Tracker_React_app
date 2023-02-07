const balanceReducer = (state, action) => {
  state = [0, 0, 0];
  action.map((ele) => {
    if (ele.amount.charAt(0) === "+") {
      return (state[1] += parseInt(ele.amount.slice(1, ele.amount.length)));
    }
    if (ele.amount.charAt(0) === "-") {
      return (state[2] += parseInt(ele.amount.slice(1, ele.amount.length)));
    }
  });
  state[0] = state[1] - state[2];
  return state;
};

export default balanceReducer;
