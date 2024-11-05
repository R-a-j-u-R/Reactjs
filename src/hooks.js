// import React from "react";
// import { useEffect } from "react";
// import { useRef } from "react";
// import { useState } from "react";
// //It can be used to store a mutable value that does not cause a re-render when updated.
// function Hooks() {
//   const [text, setText] = useState("");
//   const count = useRef();
//   useEffect(() => {
//     // count.current = count.current + 1;
//     count.current.focus();
//   }, []);
//   return (
//     <div>
//       <input
//         value={text}
//         ref={count}
//         onChange={(e) => setText(e.target.value)}
//       />
//       {/* <h1>Render Count:{count.current}</h1> */}
//     </div>
//   );
// }

// export default Hooks;
