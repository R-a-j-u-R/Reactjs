// //useState hook in React js
// // import axios from "axios";
// import "./App.css";
// const { useState, useCallback, useEffect } = require("react");

// export default function Test() {
//   const [game, setGame] = useState([]);
//   const [day, setDay] = useState([]);
//   const [options, setOptions] = useState([
//     "cricket",
//     "football",
//     "hockey",
//     "kabbadi",
//   ]);

//   // const debounce = (callback, delay) => {
//   //   let timerid;
//   //   return function (...args) {
//   //     clearTimeout(timerid);
//   //     timerid = setTimeout(() => {
//   //       callback(...args);
//   //     }, delay);
//   //   };
//   // };

//   // const dd = useCallback(
//   //   debounce(async (name) => {
//   //     const api = fetch(
//   //       `https://jsonplaceholder.typicode.com/posts/?id=${name}`
//   //     );
//   //     // const response = await api.json();
//   //     // console.log(response, "resss");
//   //     // .then((res) => res.json())
//   //     // .then((res) => console.log(res))
//   //     // .catch((err) => console.log(err));
//   //   }, 800),
//   //   []
//   // );
//   // useEffect(() => {
//   //   dd(count);
//   // }, [count]);

//   const getData = async () => {
//     const api = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
//     const response = await api.json();
//     console.log(response, "resss");
//   };
//   useEffect(() => {
//     getData();
//   }, []);

//   // const options = ["cricket", "football", "hockey"];
//   const days = ["weekday", "weeekend"];

//   const handleChnage = (value, index) => {
//     const updatevalue = [...game];
//     updatevalue[index] = value;
//     setGame(updatevalue);
//   };

//   const deleteItem = (value) => {
//     const rr = options.filter((d) => d !== value);
//     setOptions(rr);
//   };

//   return (
//     <div>
//       {/* <button onClick={() => setCounnt(count + 1)}>count</button>
//       <br />
//       Count: {count} */}
//       {/* <input value={count} onChange={(e) => setCounnt(e.target.value)} /> */}

//       {options.map((d, i) => (
//         <>
//           <input
//             id={d}
//             name="game"
//             type="radio"
//             value={d}
//             onChange={(e) => setGame(e.target.value)}
//           />
//           <label for={d}>{d}</label>
//         </>
//       ))}
//       <br />
//       {days.map((d, i) => (
//         <>
//           <input
//             key={i}
//             name="day"
//             type="radio"
//             value={d}
//             onChange={(e) => setDay(e.target.value)}
//           />
//           <label>{d}</label>
//         </>
//       ))}
//       {/* <ul>
//         {options.map((d, i) => (
//           <>
//             <li>
//               <input
//                 key={i}
//                 name="options"
//                 type="checkbox"
//                 value={d}
//                 onChange={(e) => handleChnage(d, i)}
//               />
//               <label>{d}</label>
//               {game
//                 .filter((d1) => d == d1)
//                 .map((_) => (
//                   <button onClick={() => deleteItem(d)}>delete</button>
//                 ))}
//             </li>
//           </>
//         ))}
//       </ul> */}

//       {game.length > 0 && <h1> {`You will play ${game} on ${day}`}</h1>}
//     </div>
//   );
// }
import React from "react";
import "./App.css";

function UseState() {
  return (
    <div className="check">
      <label for="username">UserName:</label>
      <input placeholder="UserName" type="text" name="username" />
      <br />
      <br />
      <label for="password">Password:</label>
      <input placeholder="Password" type="password" name="password" />
      <br />
      <br />
      <button>sumbit</button>
    </div>
  );
}

export default UseState;
