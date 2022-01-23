const ChartBars = (props) => {
  let barFill = 0;

  if (props.max > 0) {
    barFill = (props.value / props.max) * 100 + "%";
  }

  const fillStyle = { height: barFill };

  return (
    <>
      <div className="bar-container">
        <div className="bar">
          <div className="bar-fill" style={fillStyle}></div>
        </div>
        <label>{props.month}</label>
      </div>
    </>
  );
};

export default ChartBars;
