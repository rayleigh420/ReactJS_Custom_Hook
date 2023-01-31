import { useState } from "react";
import useText2 from "../hooks/useText2";

const Test2 = () => {
  const [text, setText] = useState("");

  const name = useText2(text);

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
