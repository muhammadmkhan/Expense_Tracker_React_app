import { useContext } from "react";
import { useForm } from "react-hook-form";
import expenseContext from "./Context";
const AddTransaction = () => {
  let localData = useContext(expenseContext);
  const { register, handleSubmit } = useForm({
    mode: "all",
  });
  const submitt = (data) => {
    localData[1](localData[0].concat(data));
  };
  return (
    <div>
      <div className="New-add">Add new transaction</div>
      <div className="form-div">
        <form onSubmit={handleSubmit(submitt)} className="main-form">
          <label>Enter Description</label>
          <br />
          <input
            className="form-input"
            type="text"
            placeholder="Enter Discription"
            {...register("Discription")}
          ></input>
          <br />
          <label>
            Enter Amount
            <br />
            "Negative-expense, positive-income"
          </label>
          <br />
          <input
            className="form-input"
            type="text"
            placeholder="Enter Amount"
            {...register("amount")}
          ></input>
          <br />
          <div className="button-div">
            <button className="button" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTransaction;
