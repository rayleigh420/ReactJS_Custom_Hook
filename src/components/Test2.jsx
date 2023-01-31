import { useState } from "react";
import useText1 from "../hooks/useText1";

const Test2 = () => {
  const [text, setText] = useState("");

  const name = useText1(text);

  console.log("Test::Render from Test Component");
  return (
    <>
      <div>{name}</div>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    </>
  );
};

export default Test2;
