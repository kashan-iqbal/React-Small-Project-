import { useEffect, useState } from "react";

export default function useLocalStroage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    let currentVal;
    try {
      currentVal = JSON.parse(
        localStorage.getItem(key) || String(defaultValue)
      );
    } catch (error) {
      console.log(error);
      currentVal = defaultValue;
    }

    console.log(currentVal, ` i am current`);
    return currentVal;
  });

  console.log(value);
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, defaultValue]);
  return [value, setValue];
}
