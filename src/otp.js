import { Checkbox } from "@mui/material";
import axios from "axios";
import React, { useCallback, useEffect, useRef, useState } from "react";

function Otp() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);
  const [items1, setItems1] = useState([]);
  const [numbers, setNumbers] = useState(["item1", "item2", "item3"]);
  const [numbers1, setNumbers1] = useState(["itema", "itemb", "itemc"]);

  function debounce(callbaclk, delay) {
    let timer;
    return (...args) => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        callbaclk(...args);
      }, delay);
    };
  }

  function add(a) {
    return (b) => {
      return (c) => {
        return a + b + c;
      };
    };
  }
  // console.log(add(1)(2)(3));
  const data = useCallback(
    debounce((name) => {
      axios
        .get(`https://jsonplaceholder.typicode.com/todos/${name}/`)
        // .then((res) => console.log(res.data))
        .catch((res) => console.log(res));
    }, 500),
    []
  );
  const data1 = async () => {
    const api = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${text}/`
    );
    const response = await api.json();
  };
  useEffect(() => {
    data1();
  }, [text]);
  const a = [12, 14, 1, 2, 3, 4, 1].push(1);

  useEffect(() => {
    data(text);
  }, [text]);

  const swap = () => {
    const list1 = [...numbers];
    const list2 = [...numbers1];
    const element = document.querySelector("#text");
    console.log(element.textContent);
    items1.forEach((d, i) => {
      let temp = list1[i];
      list1[i] = list2[i];
      list2[i] = temp;
    });
    setNumbers(list1);
    setNumbers1(list2);
    setItems1([]);
  };
  console.log(Boolean(1 === 1));
  console.log(items1, "items1");
  const handleChange = (e) => {
    const value = e.target.value;
    // setItems1([...items1, value]);
    setItems1((prev) =>
      prev.includes(value) ? prev.filter((d) => d !== value) : [...prev, value]
    );
  };
  let a2 = 1,
    b2 = 2,
    temp;

  temp = a2;
  a2 = b2;
  b2 = temp;
  console.log(a2);
  console.log(b2 == 1, "ssss");
  console.log(Object.prototype);
  const refs = useRef(null);
  useEffect(() => {
    refs.current.style.fontSize = "20px";
  }, []);
  return (
    <div>
      <div id="text"> RAJU</div>
      {numbers.map((d, i) => (
        <>
          <Checkbox
            name="items"
            type="checkbox"
            value={d}
            onChange={handleChange}
          />
          <span key={d}>{d}</span>
        </>
      ))}
      {numbers1.map((d) => (
        <p key={d}>{d}</p>
      ))}
      <button onClick={swap}>swap</button>
      <input ref={refs} />
    </div>
  );
}

export default Otp;
