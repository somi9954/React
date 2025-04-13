import Card from "../molecules/Card";

const Schedule = () => {
  const cardsInfo = [
    { status: "confirmed", clock: "오전 11:00", address: "인천시 부평구 시장로 7 5층", options: ["비대면", "셀토스 145마1845"] },
    { status: "completed", clock: "오후 7:00", address: "신촌 마포구 연세대 입구", options: ["비대면", "모닝 115마1245", "간지쩜"] },
    { status: "need", clock: "오후 4:00", address: "김포시 사우동 ", options: ["대면", "테슬라 115마1231", "피카츄도 한수접음"] },
    { status: "need", clock: "오후 4:00", address: "김포시 사우동 ", options: ["대면", "테슬라 115마1231", "피카츄도 한수접음"] },
    { status: "need", clock: "오후 4:00", address: "김포시 사우동 ", options: ["대면", "테슬라 115마1231", "피카츄도 한수접음"] },
    { status: "need", clock: "오후 4:00", address: "김포시 사우동 ", options: ["대면", "테슬라 115마1231", "피카츄도 한수접음"] },
    { status: "need", clock: "오후 4:00", address: "김포시 사우동 ", options: ["대면", "테슬라 115마1231", "피카츄도 한수접음"] },
    { status: "need", clock: "오후 4:00", address: "김포시 사우동 ", options: ["대면", "테슬라 115마1231", "피카츄도 한수접음"] },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {cardsInfo.map((v) => (
        <Card {...v} />
      ))}
    </div>
  );
};

export default Schedule;