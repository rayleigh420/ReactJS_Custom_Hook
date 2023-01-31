import { useEffect, useState } from "react";

const useText = () => {
  const [name, setName] = useState("Duy");
  console.log("useText:::", name);

  useEffect(() => {
    console.log("[useEffect]:::Log from useEffect");
    setName(Math.random());
  }, []);

  console.log("useText:::Render from custome hooks");

  return name;
};

export default useText;
