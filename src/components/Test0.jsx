import { useState } from "react";
import useText0 from "../hooks/useText0";

const Test0 = () => {
  const [text, setText] = useState("");

  const name = useText0();

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

export default Test0;
