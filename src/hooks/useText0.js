import { useEffect, useState } from "react";

const useText0 = () => {
  const [name, setName] = useState("Duy");
  console.log("useText:::", name);

  useEffect(() => {
    console.log("[useEffect]:::Log from useEffect once time");
  }, []);

  useEffect(() => {
    console.log("[useEffect]:::Log from useEffect all time");
  });

  console.log("useText:::Render from custome hooks");

  return name;
};

export default useText0;
