const Calender = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        alignItems: "center",
      }}
    >
      <Day dayNum></Day>
      <Date date></Date>
    </div>
  );
};

export default Calender;
