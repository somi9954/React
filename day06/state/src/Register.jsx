import React, { useState } from "react";
import Input from "./Input";
import Text from "./Text";

const Register = () => {
  const [value, setValue] = useState("");

  const validLength = (value) => 4 <= value.length && value.length <= 12;
  const validSpecial = (value) => [..."!#@&*"].some((v) => value.includes(v));
  const validHasNum = (value) =>
    [..."0123456789"].some((v) => value.includes(v));

  return (
    <>
      <Input value={value} onChange={setValue} />
      <Text text={"글자길이: 4~12"} valid={validLength(value)} />
      <Text
        text={"글자에 !,#,@,&,* 중 반드시 포함"}
        valid={validSpecial(value)}
      />
      <Text text={"글자에 반드시 숫자 포함!"} valid={validHasNum(value)} />
    </>
  );
};

export default Register;
