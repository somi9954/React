const NumberButton = (props) => {
  const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet"
  ];
  return (
    <button
      onClick={() => {
        alert(`버튼은 ${props.num}번!`);
      }}
      style={{
        padding: "10px 15px",
        margin: "5px",
        border: "1px solid #000",
        backgroundColor: colors[props.num % 7]
      }}
    >
      {props.num}
    </button>
  );
};

export default NumberButton;

/* 
import NumberButton from "./NumberButton";

function App() {
  // 화면에 숫자 0~100까지 numberButton 만들기
  // 클릭하면 알럿으로 해당 버튼은 x번!
  return (
    <div>
      {Array(101)
        .fill(0)
        .map((v, i) => {
          return <NumberButton num={i} />; // return을 추가하여 JSX 반환
        })}
    </div>
  );
}

export default App;
 */