import { useState } from "react";
import useText from "../hooks/useText";

const Test = () => {
  const [text, setText] = useState("");

  const name = useText();

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

export default Test;
