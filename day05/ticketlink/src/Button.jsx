import React from "react";

const days = ["일", "월", "화", "수", "목", "금", "토"];

const Button = (props) => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const date = String(now.getDate()).padStart(2, "0");
  const day = days[now.getDay()];

  const todayFormatted = `${year}.${month}.${date}(${day})`;
  const isToday = props.openDate === todayFormatted;

  return (
    <div
      style={{
        border: "none",
        padding: isToday ? "13px 45px" : "13px 23px",
        backgroundColor: isToday ? "#fa2828" : "#efefef",
        borderRadius: "10px",
        width: "fit-content",
        display: "flex",
        flexDirection: "column",
        fontWeight: "bold",
        fontSize: "14px",
        color: isToday ? "#fff" : "#000",
        cursor: "pointer"
      }}
    >
      {isToday ? (
        <span>예매하기</span>
      ) : (
        <>
          <span>{props.openDate}</span>
          <span>{props.openTime}</span>
        </>
      )}
    </div>
  );
};

export default Button;
