const Status = (props) => {
  const statusObj = {
    confirmed: {
      name: "확정",
      Dcolor: "#5D7D2B",
    },
    completed: {
      name: "완료",
      Dcolor: "#9ba1a5",
    },
    need: {
      name: "확정필요",
      Dcolor: "#",
    },
  };
  return <span style={{}}>{statusObj[props.Status].name}</span>;
};

export default Status;
