import Date from "./Date";

function App() {
  const thisYear = Array(365)
    .fill(0)
    .map((v, i) => {
      return {
        dayNum: new Date(new Date().getFullYear(), 0, i + 1).getDay(),
        date: new Date(new Date().getFullYear(), 0, i + 1).getDate(),
      };
    });
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {thisYear.map((v) => (
        <Calender dayNum={v.dayNum} date={v.date}></Calender>
      ))}
    </div>
  );
}

export default App;
