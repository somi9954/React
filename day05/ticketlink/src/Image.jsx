const Image = (props) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px"
      }}
    >
      <img src="./seoul.png" style={{ width: "60px" }} />
      <span style={{ fontSize: "23px", textAlign: "center", color: "#878d95" }}>
        vs
      </span>
      <img src={props.src} style={{ width: "60px" }} />
    </div>
  );
};

export default Image;
