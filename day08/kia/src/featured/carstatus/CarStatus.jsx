import StatusTitle from "./StatusTitle";
import StatusButton from "./StatusButton";
import StatusChecker from "./StatusChecker";
const CarStatus = (props) => {
  const typeList = ["덴트", "판금", "교환"];
  return (
    <section>
      <StatusTitle title={props.title} />
      <div style={{ display: "flex" }}>
        {typeList.map((v, i) => (
          <StatusButton
            status={v}
            isClicked={props.statuses[i]}
            setIsClicked={() => {
              props.clicked(props.row, i);
            }}
          />
        ))}
      </div>
      <StatusChecker />
    </section>
  );
};

export default CarStatus;