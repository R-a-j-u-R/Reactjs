import React from "react";
import { useMemo } from "react";
import { useState } from "react";

function Usememo() {
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);

  const result = useMemo(() => {
    return add(number);
  }, [number]);
  function add(num) {
    console.log("running");
    return num * 2;
  }
  return (
    <div>
      Usememo
      <input
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        type="number"
      />
      output :{result}
      <button onClick={() => setCounter(counter + 1)}>counter++</button>
      counter: {counter}
    </div>
  );
}

export default Usememo;
