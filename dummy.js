import React from "react";
import UseState from "./useState";
import Hooks from "./hooks";
import Otp from "./otp";
import Items from "./customhooks";
import useProduct from "./customhooks";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

// import Hooks from "./hooks";
// import Gemini from "./Gemini";
// import Tezt from "./tezt";

import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
const App = () => {
  // const login = useGoogleLogin({
  //   onSuccess: async (response) => {
  //     try {
  //       const res = await axios.get(
  //         "https://www.googleapis.com/oauth2/v3/userinfo",
  //         {
  //           headers: {
  //             Authorization: `Bearer ${response.access_token}`,
  //           },
  //         }
  //       );
  //       console.log(res);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   },
  // });

  // const items = ["a", "b", "c", "d"];
  // const [messages, setMessages] = React.useState([]);
  // const [messages1, setMessages1] = React.useState([]);

  // function handleData(data) {
  //   setMessages(data);
  // }
  // React.useEffect(() => {
  //   localStorage.setItem("key", messages );
  //   setC(localStorage.getItem("key", messages));
  // }, [messages]);
  // console.log(c, "ccccc");
  // const aa = [1, 6, 2, 3, 4, 9];
  // let max = 0,
  //   secondMax = 0;
  // for (let i = 0; i <= aa.length; i++) {
  //   if (aa[i] > max) {
  //     secondMax = max;
  //     max = aa[i];
  //   } else if (aa[i] > secondMax && aa[i] < max) {
  //     secondMax = aa[i];
  //   }
  // }
  // const a = {
  //   id: 1,
  // };
  // // console.log(secondMax, "secondMax");
  // const add = (data) => {
  //   setC(data);
  // };
  // const remove = (value) => {
  //   // const filter = items.filter((d) => d != value);
  //   // setMessages(filter);
  //   // setMessages1([...messages1, value]);
  //   // console.log(messages, "m");
  // };

  // const data = (
  //   <>
  //     <h1 style={{ color: "blue   " }}>dfdfsdfsdf</h1>
  //     <p>fdsfsdfsdfds</p>
  //   </>
  // );

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: "50%",
          left: "50%",
          border: "10px solid black",
          boxShadow: "10px 10px #f5f5f5",
        }}
      >
        {/* <GoogleLogin
          onSuccess={(credentialResponse) => {
            const credential = jwtDecode(credentialResponse.credential);
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        // /> */}
        {/* // <button onClick={() => login()}>Sign in with Google 🚀</button>; */}
      </div>
      {/* <Tezt dd={add} />
      Get data from child component {c} */}
      {/* <Hooks values={messages} handle={handleData} />

      <div
        style={{
          border: `10px solid ${c}`,
          width: "200px",
          height: "200px",
          color: c,
        }}
      >
        AAAAAAAAAAAAA
      </div> */}
      {/* <Gemini /> */}
      {/* <Demo /> */}
      {/* <button onClick={() => remove("a")}>a</button>
      <button onClick={() => remove("b")}>b</button>
      <button onClick={() => remove("c")}>c</button>
      <button onClick={() => remove("d")}>d</button>

      {/* b->c->d */}
      {/* {messages.map((d, index) => (
        <span key={index}>
          {d}
          {index < messages.length - 1 ? " -> " : ""}
        </span>
      ))} */}{" "}
      {/* {messages1.map((d, index) => (
        <span key={index}>
          {d}
          {index < messages.length ? " -> " : ""}
        </span>
      ))} */}
      {/* <div dangerouslySetInnerHTML={{ __html: data }} /> */}
      {/* {data} */}
      {/* <div
        style={{
          border: "1px solid black",
          height: "200px",
          width: "490px",
          borderBlockEndWidth: "inherit",
          borderInlineEndWidth: "inherit",
          // transform: "rotate(337deg)",
        }}
      >
        <hr
          style={{
            position: "relative",
            top: "90px",
            transform: "rotate(337deg)",
          }}
        />
      </div> */}
      {/* <UseState /> */}
      {/* <Otp /> */}
    </>
  );
};

export default App;
// // call by value and call by reference in js
// //call by value = Actual and copied variables will be created in different memory locations.
// //call by reference = Actual and copied variables will be created in same memory locations.

// // call by value

// let a = 5;
// let b = a;
// a = 10;
// console.log(a);
// console.log(b);

// // call by refrence

// let c = { id: 1 };
// let d = c;
// d.id = 2;
// console.log(c);
// console.log(d);

// let array = [1, 2, 3, 7, 5];
// let targetSum = 10;

// let start = 0;
// let currentSum = 0;

// for (let i = 0; i < array.length; i++) {
//   currentSum += array[i];

//   // Shrink the window from the left if the currentSum exceeds targetSum
//   while (currentSum > targetSum && start <= i) {
//     currentSum = currentSum - array[start];
//     start++;
//   }

//   // Check if we have a subarray with the desired sum
//   if (currentSum === targetSum) {
//     console.log(array.slice(start, i + 1).join(","), `sum=${currentSum}`);
//     break;
//   }
// }

// let max = 0,
//   smax = 0;
// array.forEach((d) => {
//   if (d > max) {
//     smax = max;
//     max = d;
//   } else if (max > d && smax < d) {
//     smax = d;
//   }
// });
// console.log(smax);
// console.log(max);
// dd = () => {
//   console.log("df");
// };
// dd();

// let ss = 0;
// for (let i = 1; i <= 10; i++) {
//   ss += i;
// }
// console.log(ss);
