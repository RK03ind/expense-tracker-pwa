import React, { useState } from "react";
import "./Expenses-inputStyles/ExpensesForm.css";

const ExpenseForm = (props) => {
  //   const [[title, setTitle], [amount, setAmount], [date, setDate]] = [
  //     useState(""),
  //     useState(""),
  //     useState(""),
  //   ];
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });
  console.log(userInput.title, userInput.amount, userInput.date);

  const titleChanged = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  };
  const amtChanged = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, amount: event.target.value };
    });
  };
  const dateChanged = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, date: new Date(event.target.value) };
    });
  };

  const onsubmitHandler = (event) => {
    event.preventDefault();
    if (userInput.amount && userInput.date && userInput.title !== "") {
      props.postData(userInput);
      setUserInput({ ...userInput, amount: "", title: "" });
    }
  };

  return (
    <form onSubmit={onsubmitHandler}>
      <div className="text-input">
        <div>
          <label>Expense Name</label>
          <input type="text" value={userInput.title} onChange={titleChanged} />
        </div>
        <div>
          <label>Amount</label>
          <input type="number" value={userInput.amount} onChange={amtChanged} />
        </div>
      </div>

      <div className="input-2">
        <div>
          <label>Date</label>
          <input
            type="date"
            className="date"
            min="2022-01-01"
            max="2024-12-31"
            onChange={dateChanged}
          />
        </div>
        <div>
          <button type="submit" className="button-add">
            + Add Expense
          </button>
          {/* <button className="button-add">Cancel</button> */}
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
