// import "./App.css";
// import io from "socket.io-client";
// import { useState } from "react";
// import Child from "./Child";
// import propTypes from "prop-types";
// import ErrorPage from "./ErrorBoundaty";
// import { Autocomplete } from "@mui/material";

// const socket = io.connect("http://localhost:3001");

// function Parent({ name }) {
//   const [username, setUsername] = useState("");
//   const [Name, setName] = useState();
//   const [room, setRoom] = useState("");
//   const [showChat, setShowChat] = useState(false);

//   const joinRoom = () => {
//     if (username !== "" && room !== "") {
//       socket.emit("join_room", room);
//       setShowChat(true);
//     }
//   };
//   console.log(name);
//   if (name == "rajus") {
//     throw new Error("ddsd");
//   }
//   const items = ["raju", "demo", "test", "javascript", "da"];

//   const result = items.filter((d) => d.includes(Name));
//   console.log(result, "result");
//   return (
//     <div className="App">
//       {/* <div className="joinChatContainer">
//         <h3>Join A Chat</h3>
//         <input
//           type="text"
//           placeholder="John..."
//           onChange={(event) => {
//             setUsername(event.target.value);
//           }}
//         />
//         <input
//           type="text"
//           placeholder="Room ID..."
//           onChange={(event) => {
//             setRoom(event.target.value);
//           }}
//         />
//         <button onClick={joinRoom}>Join A Room</button>
//       </div> */}
//       fsdfdf
//       {/* <Child
//         name="raju"
//         id={1}
//         arrayProp={["Ram", "Shyam", "Raghav"]}
//         obj={{ id: 1, name: "fdsfd" }}
//       /> */}
//       <select>
//         {result.map((d) => (
//           <option>{d}</option>
//         ))}
//       </select>
//       <Autocomplete  />
//     </div>
//   );
// }

// export default Parent;
import React, { useEffect } from "react";
import { Box, Grid } from "@mui/material";

const MyChart = () => {
  useEffect(() => {
    const loadGoogleCharts = () => {
      const script = document.createElement("script");
      script.src = "https://www.gstatic.com/charts/loader.js";
      script.async = true;
      script.onload = () => {
        window.google.charts.load("current", {
          packages: ["corechart", "bar"],
        });
        window.google.charts.setOnLoadCallback(drawCharts);
      };
      document.body.appendChild(script);
    };

    const drawCharts = () => {
      // Data for the first chart
      const data1 = new window.google.visualization.DataTable();
      data1.addColumn("string", "Category");
      data1.addColumn("number", "Value");
      data1.addRows([
        ["A", 1],
        ["B", 2],
        ["C", 3],
        ["D", 4],
      ]);

      const options1 = {
        title: "My First Bar Chart",
        backgroundColor: "transparent",
        legend: { position: "none" },
      };

      const chart1 = new window.google.visualization.PieChart(
        document.getElementById("bar_chart")
      );
      chart1.draw(data1, options1);

      // Data for the second chart
      const data2 = new window.google.visualization.DataTable();
      data2.addColumn("string", "Category");
      data2.addColumn("number", "Value");
      data2.addRows([
        ["E", 5],
        ["F", 6],
        ["G", 7],
        ["H", 8],
      ]);

      // Set colors based on the value
      const colors = data2.getDistinctValues(1).map((value) => {
        if (value >= 7) {
          return "green"; // Color for values >= 7
        } else {
          return "orange"; // Default color for other values
        }
      });
      console.log(colors, "s");
      const options2 = {
        title: "My Second Bar Chart",
        backgroundColor: "transparent",
        legend: { position: "none" },
      };

      const chart2 = new window.google.visualization.ColumnChart(
        document.getElementById("bar_chart_2")
      );
      chart2.draw(data2, options2);
    };

    loadGoogleCharts();

    return () => {
      const script = document.querySelector(
        'script[src="https://www.gstatic.com/charts/loader.js"]'
      );
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <Grid container direction="row" spacing={2}>
      <Grid item xs={6}>
        <Box
          sx={{
            background: "#dadffa",
            borderRadius: "10px 10px 0px 0px",
            border: "2px solid red",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            id="bar_chart" // Unique id for the first chart
            style={{ width: "100%", height: "500px" }}
          />
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box
          sx={{
            background: "#dadffa",
            borderRadius: "10px 10px 0px 0px",
            border: "2px solid red",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            id="bar_chart_2" // Unique id for the second chart
            style={{ width: "100%", height: "500px" }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default MyChart;
// import React, { useContext, useEffect, useState } from "react";
// import propTypes from "prop-types";
// import { ContextValue } from "./App.js";
// import axios from "axios";
// import "./App.css";
// const AutocompleteDropdown = () => {
//   const [inputValue, setInputValue] = useState("");
//   const [suggestions, setSuggestions] = useState([]);
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [dataas, setDataa] = useState([]);
//   const data = [
//     "apple",
//     "banana",
//     "grape",
//     "orange",
//     "pineapple",
//     "strawberry",
//     "watermelon",
//   ];

//   const handleChange = (event) => {
//     const value = event.target.value;
//     setInputValue(value);

//     if (value) {
//       const filteredSuggestions = data.filter((item) =>
//         item.toLowerCase().startsWith(value.toLowerCase())
//       );
//       setSuggestions(filteredSuggestions);

//       setShowDropdown(true);
//     } else {
//       setSuggestions([]);
//       setShowDropdown(false);
//     }
//   };

//   const handleSuggestionClick = (suggestion) => {
//     setInputValue(suggestion);
//     setSuggestions([]);
//     setShowDropdown(false);
//   };

//   const handleBlur = () => {
//     setShowDropdown(false);
//   };

//   async function proimse() {
//     let id = 1;
//     return await new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (id == 1) {
//           resolve("done");
//         } else {
//           reject("reject");
//         }
//       }, 2000);
//     });
//   }
//   // const result = proimse();
//   // result.then((res) => console.log(res));
//   // result.catch((res) => console.log(res));
//   // Simulating an API call with a Promise
//   function fetchUserData(userId) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         // Simulating successful response
//         const userData = { id: userId, name: "John Doe" };
//         if (userId > 0) {
//           resolve(userData);
//         } else {
//           reject("User not found");
//         }
//       }, 2000); // Simulate a 2-second delay
//     });
//   }

//   // Async function to use await with the Promise
//   async function getUser(userId) {
//     try {
//       const user = await fetchUserData(userId); // Await the Promise
//       console.log("User data:", user); // Log the user data
//     } catch (error) {
//       console.error("Error:", error); // Handle any errors
//     }
//   }

//   // Calling the async function
//   // getUser(1); // This will log user data after 2 seconds
//   // getUser(-1); // This will log an error after 2 seconds
//   async function fetchProducts() {
//     const response = await fetch(
//       "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
//     );
//     const data = await response.json();
//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }
//     return data;
//   }

//   // const promise = fetchProducts();
//   // promise
//   //   .then((data) => {
//   //     console.log(data);
//   //     setDataa(data);
//   //   })
//   //   .catch((error) => {
//   //     console.error(`Could not get products: ${error}`);

//   //   });
//   useEffect(() => {
//     axios
//       .get(
//         "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
//       )
//       .then((data) => {
//         console.log(data.data);
//         setDataa(data.data);
//       })
//       .catch((error) => {
//         console.error(`Could not get products: ${error}`);
//       });
//   }, []);

//   return (
//     <div>
//       <label className="switch">
//         <input type="checkbox" checked="checked" />
//         <div className="button">
//           <div className="light"></div>
//           <div className="dots"></div>
//           <div className="characters"></div>
//           <div className="shine"></div>
//           <div className="shadow"></div>
//         </div>
//       </label>

//       {/* {name}
//       <input
//         type="text"
//         value={inputValue}
//         onChange={handleChange}
//         onBlur={handleBlur}
//         onFocus={() => inputValue && setShowDropdown(true)}
//         placeholder="Type a fruit..."
//         style={{ width: "200px", padding: "8px" }}
//       />
//       {showDropdown && suggestions.length > 0 && (
//         <ul
//           style={{
//             position: "absolute",
//             border: "1px solid #ccc",
//             listStyleType: "none",
//             padding: 0,
//             margin: 0,
//             width: "200px",
//             zIndex: 1,
//             background: "white",
//           }}
//         >
//           {suggestions.map((suggestion, index) => (
//             <li
//               key={index}
//               onClick={() => handleSuggestionClick(suggestion)}
//               style={{ cursor: "pointer", padding: "8px" }}
//             >
//               {suggestion}
//             </li>
//           ))}
//         </ul>
//       )}
//       {dataas.map((d) => (
//         <>
//           <p>name======{d.name}</p>
//           <a
//             href={
//               "http://127.0.0.1:8000/password/reset/confirm/MTI/cdz45m-191e6b87b600c75c353586af8aa3a827"
//             }
//           >
//             link
//           </a>
//         </>
//       ))} */}
//     </div>
//   );
// };
// AutocompleteDropdown.propTypes = {
//   name: propTypes.string.isRequired,
// };

// export default AutocompleteDropdown;
