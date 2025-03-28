const Image = (props) => {
  return (
    <div>
      <img src="./seoul.png" style={{ width: "50px" }} /> <span>vs</span>
      <img src={props.src} style={{ width: "50px" }} />
    </div>
  );
};

export default Image;
