// import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./Expenses-inputStyles/ExpensesInput.css";

const ExpenseInput = (props) => {
  const PostDataHandler = (data) => {
    const expenseData = {
      ...data,
      id: Math.random() * 1000,
    };
    props.itemData(expenseData);
  };
  // const [currentUI, setUI] = useState(1);

  // const onAddHandler = () => {
  //   setUI(2);
  // };

  // if (currentUI === 1) {
  //   return (
  //     <button className="button-add-ui" onClick={onAddHandler}>
  //       + Add New Expense
  //     </button>
  //   );
  // }

  return (
    <div className="form-container">
      <ExpenseForm postData={PostDataHandler} />
    </div>
  );
};
export default ExpenseInput;
