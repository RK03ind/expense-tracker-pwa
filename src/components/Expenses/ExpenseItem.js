// import React, { useState } from "react";
import "./ExpesnsesStyles/ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title);
  // const clickHandler = () => {
  //   setTitle("Updated");
  //   console.log(title);
  // };
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{"₹ " + props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change title</button> */}
    </div>
  );
};

export default ExpenseItem;
