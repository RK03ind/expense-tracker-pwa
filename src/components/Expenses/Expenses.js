import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Chart from "../Chart/Chart";

const Expenses = (props) => {
  const [year, setYear] = useState("2022");

  const filteredArray = props.expenses.filter((expenses) => {
    return year === expenses.date.getFullYear().toString();
  });

  if (filteredArray.length === 0) {
    return (
      <>
        <Chart data={filteredArray} />
        <ExpenseFilter value={year} postYear={setYear} />
        <p className="no-data">No expenses found !!</p>
      </>
    );
  }
  return (
    <>
      <Chart data={filteredArray} />
      <ExpenseFilter value={year} postYear={setYear} />
      {filteredArray.map((expenses) => (
        <ExpenseItem
          key={expenses.id}
          title={expenses.title}
          amount={expenses.amount}
          date={expenses.date}
        />
      ))}
    </>
  );
};
export default Expenses;
