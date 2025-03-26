const Button = (props) => {
  return (
    <div
      onClick={() => {
        alert("이것은 버튼입니다!");
      }}
      style={{
        color: "white",
        padding: "10px 45px",
        textAlign: "center",
        backgroundColor: props.bg,
        borderRadius: props.br
      }}
    >
      button
    </div>
  );
};

export default Button;

{
  /* <div
style={{
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gap: "20px"
}}
>
<Button bg={"#205BF3"} br={"0px"}></Button>
<Button bg={"#205BF3"} br={"5px"}></Button>
<Button bg={"#205BF3"} br={"10px"}></Button>
<Button bg={"#478DF5"} br={"0px"}></Button>
<Button bg={"#478DF5"} br={"5px"}></Button>
<Button bg={"#478DF5"} br={"10px"}></Button>
</div> */
}
