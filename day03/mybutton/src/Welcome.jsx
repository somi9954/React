// props object type
// {name: "김땡땡", age: 21}
const Welcome = (props) => {
/*   const handleClick = () => {
    alert(`안녕하세요 저는 ${props.name}입니다!`);
  }; */
  return (
    <h1 onClick={props.handleClick} style={{ color: props.color }}>
      Hello, {props.name}!{props.emoji}
    </h1>
  );
};

export default Welcome;


{/* <Welcome
handleClick={() => {
  alert("저는 손흥민입니다.");
}}
color={"yellow"}
name={"손흥민"}
emoji={"😊"}
></Welcome>
<Welcome
handleClick={() => {
  console.log("저는 김민재입니다.");
}}
color={"pink"}
name={"김민재"}
emoji={"😒"}
></Welcome>
<Welcome   handleClick={() => {
  console.log("저는 황인범입니다.");
}}color={"navy"} name={"황인범"} emoji={"😘"}></Welcome> */}


/* 
const soccer = [
  {
    name: "손흥민",
    color: "pink",
    emoji: "😊",
    handleClick: () => {
      alert("저는 손흥민입니다.");
    }
  },
  {
    name: "김민재",
    color: "yellow",
    emoji: "😒",
    handleClick: () => {
      console.log("저는 김민재입니다.");
    }
  },
  {
    name: "황인범",
    color: "navy",
    emoji: "😘",
    handleClick: () => {
      console.log("저는 황인범입니다.");
    }
  },
  {
    name: "황희찬",
    color: "gray",
    emoji: "😘",
    handleClick: () => {
      console.log("저는 황희찬입니다.");
    }
  }
]; */

{/* 
return (
  <div>  
    {soccer.map((v) => (
      <Welcome {...v}
        name={v.name}
        emoji={v.emoji}
        color={v.color}
        handleClick={v.handleClick}
      ></Welcome>
    ))}
  </div>
);
*/}
