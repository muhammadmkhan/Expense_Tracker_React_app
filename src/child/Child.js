import Balance from "./Balance";
import History from "./History";
import AddTransaction from "./AddTransaction";
import expenseContext from "./Context";
import { useState } from "react";

const Child = () => {
  let mainData = useState([]);
  return (
    <div className="main-container">
      <div className="ET">Expense Tracker</div>

      <expenseContext.Provider value={mainData}>
        <Balance />
        <History />
        <AddTransaction></AddTransaction>
      </expenseContext.Provider>
    </div>
  );
};

export default Child;
