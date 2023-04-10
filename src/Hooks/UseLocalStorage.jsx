import React, { useEffect, useState } from "react";

const UseLocalStorage = (key) => {
  const [value, setValue] = useState(() => {
    const jasonValue = localStorage.getItem(key);
    if (jasonValue != null) return JSON.parse(jasonValue);
    if (typeof initialValue === "function") {
      return initialValue;
    }
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
};

export default UseLocalStorage;
