import "./ExpesnsesStyles/ExpenseFilter.css";
const ExpenseFilter = (props) => {
  const yearChangeHandler = (event) => {
    props.postYear(event.target.value);
  };
  return (
    <div className="filter-container">
      <span>Filter by Year</span>
      <select value={props.value} onChange={yearChangeHandler}>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;
