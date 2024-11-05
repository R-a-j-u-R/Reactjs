import React from "react";
import { useCallback } from "react";
import { useState } from "react";

function UseCallback() {
  const [count, setCount] = useState(0);

  const add = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  function check() {
    setTimeout(() => {
      console.log("timers");
    });
    return new Promise((resolve, reject) => {
      let a = 10;
      if (a === 101) {
        resolve("done");
      }
    });
  }
  //   check().then((res) => console.log(res));

  const aa = [6, 1, 2, 3, 4];
  console.log({ ...aa });
  let dd = {};
  aa.reduce((d, i) => (dd[d] = i), {});
  console.log(Object.values({ id: 1, name: "raju" }));
  console.log(dd);

  return (
    <div>
      UseCallback = {count}
      <button onMouseOver={add}>add</button>
    </div>
  );
}

export default UseCallback;
