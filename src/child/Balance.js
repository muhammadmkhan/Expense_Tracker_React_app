import { useContext, useEffect, useReducer } from "react";
import expenseContext from "./Context";
import balanceReducer from "./balanceReducer";
const Balance = () => {
  let balanceData = useContext(expenseContext);
  let [state, dispatch] = useReducer(balanceReducer, [0, 0, 0]);
  useEffect(() => {
    dispatch(balanceData[0]);
  }, [balanceData]);
  return (
    <div>
      <div className="YB">
        YOUR BALANCE:
        <br />
        <span>$</span>
        <span> {state[0]}</span>
      </div>
      <br />
      <div className="in-ex">
        <div className="In">
          Income:
          <span className="in-am"> $ {state[1]}</span>
        </div>
        <div className="Ex">
          Expense:
          <span className="ex-am"> $ {state[2]}</span>
        </div>
      </div>
    </div>
  );
};
export default Balance;
