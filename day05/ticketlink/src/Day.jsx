const Day = (props) => {
  return (
    <div>
      <span>{props.day}</span>
      <div>
        <span>{props.yoil}</span>
        <span>{props.times}</span>
      </div>
    </div>
  );
};

export default Day;
