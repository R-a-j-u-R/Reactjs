// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
// } from "@mui/material";
// import axios from "axios";
// import React, { useEffect, useRef, useState } from "react";
// import Parent from "./Parent";

// function App() {
//   const [data, setData] = useState([]);
//   const [page, setPage] = useState(1);
//   const height = useRef(null);

//   function getList() {
//     axios
//       .get(`https://jsonplaceholder.typicode.com/posts/?_page=${page}`)
//       .then((res) => {
//         setData((prevData) => [...prevData, ...res.data]);
//         setPage(page + 1);
//       })
//       .catch((err) => alert(err));
//   }
//   useEffect(() => {
//     getList(1);
//   }, []);

//   const fetchMoreData = () => {
//     getList(page);
//   };

//   const handleScroll = () => {
//     const tableContainer = height.current;

//     if (
//       tableContainer.scrollHeight - tableContainer.scrollTop ===
//       tableContainer.clientHeight
//     ) {
//       fetchMoreData();
//     }
//   };

//   return (
//     <div>
//       aaaa
//       {/* <TableContainer
//         ref={height}
//         onScroll={handleScroll}
//         style={{ maxHeight: 600, overflowY: "auto" }}
//       >
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>id</TableCell>
//               <TableCell>name</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {data.map((d) => (
//               <TableRow>
//                 <>
//                   <TableCell key={d.id}>{d.id}</TableCell>
//                   <TableCell>{d.title}</TableCell>
//                 </>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer> */}
//       {/* <Hooks /> */}
//       <Parent />
//     </div>
//   );
// }

// export default App;

import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";

import "leaflet/dist/leaflet.css";
import * as L from "leaflet";

function createMapWidget(containerDomNode) {
  const map = L.map(containerDomNode);
  map.setView([0, 0], 0);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "© OpenStreetMap",
  }).addTo(map);
  return map;
}

function addPopupToMapWidget(map) {
  const popupDiv = document.createElement("div");
  L.popup().setLatLng([0, 0]).setContent(popupDiv).openOn(map);
  return popupDiv;
}
export default function Maps() {
  const containerRef = useRef(null);
  const mapRef = useRef(null);
  const [popupContainer, setPopupContainer] = useState(null);

  useEffect(() => {
    if (mapRef.current === null) {
      const map = createMapWidget(containerRef.current);
      mapRef.current = map;
      const popupDiv = addPopupToMapWidget(map);
      setPopupContainer(popupDiv);
    }
  }, []);

  return (
    <div style={{ width: 250, height: 250 }} ref={containerRef}>
      {popupContainer !== null &&
        createPortal(<p>Hello from React!</p>, popupContainer)}
    </div>
  );
}
