import Type from "../atom/Type";

const CarStatus = () => {
  return (
    <article style={{ display: "flex", border: "1px solid #DAEDBD" }}>
      <Type type={"덴트"} />
      <Type type={"판금"} />
      <Type type={"교환"} />
    </article>
  );
};

export default CarStatus;