import ClassSpecialType from "./tway/ClassSpecialType";
import ClassType from "./tway/ClassType";

function App() {
  const classType = [
    {
      title: "이벤트",
      backgroundColor: "green",
      class: "이코노미",
      cabinWeight: "10",
      checkedWeight: "없음",
      price: "",
      currency: "",
      seats: "0",
    },
    {
      title: "스마트",
      backgroundColor: "green",
      class: "이코노미",
      cabinWeight: "10",
      checkedWeight: "15kg",
      price: "237,000",
      currency: "krw",
      seats: "9",
    },
    {
      title: "일반",
      backgroundColor: "green",
      class: "이코노미",
      cabinWeight: "10",
      checkedWeight: "20kg",
      price: "252,000",
      currency: "krw",
      seats: "9",
    },
  ];

  const specialType = {
    title: "비지니스",
    backgroundColor: "red",
    price: "357,000",
    currency: "krw",
    seats: "5",
  };

  return (
    <div style={{ display: "flex" }}>
      {classType.map((v) => (
        <ClassType {...v} />
      ))}
      <ClassSpecialType {...specialType} />
    </div>
  );
}

export default App;
