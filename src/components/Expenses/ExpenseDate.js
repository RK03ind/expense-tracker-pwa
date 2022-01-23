import "./ExpesnsesStyles/ExpenseDate.css";

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", {
    month: "long",
  });
  const date = props.date.toLocaleString("en-US", {
    day: "numeric",
  });
  const year = props.date.getFullYear();

  return (
    <div className="date-container">
      <div className="expense-month">{month}</div>
      <div className="expense-date">{date}</div>
      <div className="expense-year">{year}</div>
    </div>
  );
};
export default ExpenseDate;
