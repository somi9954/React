const Latte = () => {
    const favorite = "두유";
    return (
      <div style={{color:"red", fontSize: "24px"}}>    
      <div>딸기라떼</div> 
      <div>바닐라라떼</div> 
      <div>{favorite}라떼</div> 
      </div>
    );
}
export default Latte;