import ChartBars from "./ChartBars";
import "./Chart.css";
const Chart = (props) => {
  let monthFiltered = [
    {
      month: "Jan",
      value: 0,
    },
    {
      month: "Feb",
      value: 0,
    },
    {
      month: "Mar",
      value: 0,
    },
    {
      month: "Apr",
      value: 0,
    },
    {
      month: "May",
      value: 0,
    },
    {
      month: "Jun",
      value: 0,
    },
    {
      month: "July",
      value: 0,
    },
    {
      month: "Aug",
      value: 0,
    },
    {
      month: "Sep",
      value: 0,
    },
    {
      month: "Oct",
      value: 0,
    },
    {
      month: "Nov",
      value: 0,
    },
    {
      month: "Dec",
      value: 0,
    },
  ];
  let maxValue = 0;
  props.data.map((expense) => {
    monthFiltered[expense.date.getMonth()].value += parseInt(expense.amount);
    maxValue += parseInt(expense.amount);

    return expense;
  });
  return (
    <div className="chart-container">
      {monthFiltered.map((eachMonth) => (
        <ChartBars
          key={eachMonth.month}
          value={eachMonth.value}
          max={maxValue}
          month={eachMonth.month}
        />
      ))}
    </div>
  );
};
export default Chart;
