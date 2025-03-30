import SoccerCard from "./SoccerCard";

function App() {
  const soccer = [
    {
      day: "03.29",
      week: "(토)",
      times: "14:00",
      vs: "대구",
      src: "image6.png",
      openDate: "2025.04.07(화)",
      openTime: "18:00오픈예정"
    },
    {
      day: "04.12",
      week: "(토)",
      times: "16:00",
      vs: "대전",
      src: "image1.png",
      openDate: "2025.04.07(화)",
      openTime: "18:00오픈예정"
    },
    {
      day: "04.20",
      week: "(일)",
      times: "16:30",
      vs: "광주FC",
      src: "image3.png",
      openDate: "2025.04.15(월)",
      openTime: "18:00오픈예정"
    },
    {
      day: "05.03",
      week: "(토)",
      times: "19:00",
      vs: "전북현대",
      src: "Jeonbuk.png",
      openDate: "2025.04.28(월)",
      openTime: "18:00오픈예정"
    }
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
