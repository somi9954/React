import SoccerCard from "./SoccerCard";

function App() {
  const soccer = [
    {
      day: "03.29",
      yoil: "(토)",
      times: "14:00",
      vs: "대구",
      src: "image6.png",
    },
    {
      day: "04.",
      yoil: "(토)",
      times: "16:00",
      vs: "대전",
      src: "image1.png",
    },
    {
      day: "4.20",
      yoil: "(일)",
      times: "16:30",
      vs: "광주FC",
      src: "image3.png",
    },
  ];
  return (
    <div>
      {soccer.map((v) => (
        <SoccerCard {...v} />
      ))}
    </div>
  );
}

export default App;
