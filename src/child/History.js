import { useContext, useEffect, useReducer } from "react";
import expenseContext from "./Context";
import Reducer from "./reducer";
const History = () => {
  let historyData = useContext(expenseContext);
  let [state, dispatch] = useReducer(Reducer, historyData[0]);
  useEffect(() => {
    dispatch(historyData[0]);
  }, [historyData]);
  return (
    <div>
      <h3 className="his">History</h3>
      <div className="his-lies">
        {state.map((ele, ind) => (
          <li key={ind}>
            <span className="discription">{ele.Discription} </span>
            <span className="amount"> $ {ele.amount}</span>
          </li>
        ))}
      </div>
    </div>
  );
};

export default History;
