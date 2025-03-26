import Button from "./Button";
import Welcome from "./Welcome";

function App() {
  const soccer = [
    {
      name: "손흥민",
      color: "pink",
      emoji: "😊",
      handleClick: () => {
        alert("저는 손흥민입니다.");
      }
    },
    {
      name: "김민재",
      color: "yellow",
      emoji: "😒",
      handleClick: () => {
        console.log("저는 김민재입니다.");
      }
    },
    {
      name: "황인범",
      color: "navy",
      emoji: "😘",
      handleClick: () => {
        console.log("저는 황인범입니다.");
      }
    },
    {
      name: "황희찬",
      color: "gray",
      emoji: "😘",
      handleClick: () => {
        console.log("저는 황희찬입니다.");
      }
    }
  ];
  return (
    <div>
      {soccer.map((v) => (
        <Welcome {...v}
     /*      name={v.name}
          emoji={v.emoji}
          color={v.color}
          handleClick={v.handleClick} */
        ></Welcome>
      ))}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "20px"
        }}
      >
        <Button bg={"#205BF3"} br={"0px"}></Button>
        <Button bg={"#205BF3"} br={"5px"}></Button>
        <Button bg={"#205BF3"} br={"10px"}></Button>
        <Button bg={"#478DF5"} br={"0px"}></Button>
        <Button bg={"#478DF5"} br={"5px"}></Button>
        <Button bg={"#478DF5"} br={"10px"}></Button>
      </div>
    </div>
  );
}

export default App;
