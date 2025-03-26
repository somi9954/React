const Card = (props) => {
  return (
    <div
      style={{
        border: "1px solid #efefef",
        display: "flex",
        flexDirection: "column",
        width: "300px",
        height: "200px",
        borderRadius: "10px"
      }}
    >
      <div
        style={{ flex: "2", backgroundColor: props.bg, borderRadius: "10px" }}
      ></div>
      <div
        style={{
          flex: "1",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between"
        }}
      >
        <div>{props.name}</div>
        <div>{props.bg}</div>
      </div>
    </div>
  );
};

export default Card;
