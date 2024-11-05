import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import React, { createContext, useEffect, useRef, useState } from "react";
import Parent from "./Parent";
import Usememo from "./usememo";
import UseCallback from "./useCallback";
import UseState from "./javascript";
import One from "./one";
import useProduct1 from "./customhooks";
import Hoc from "./hoc";
import { createPortal } from "react-dom";

export const ContextValue = createContext();
function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const height = useProduct1();
  function getList() {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/?_page=${page}`)
      .then((res) => {
        setData((prevData) => [...prevData, ...res.data]);

        setPage(page + 1);
      })
      .catch((err) => alert(err));
  }
  useEffect(() => {
    getList(1);
  }, []);

  const fetchMoreData = () => {
    getList(page);
  };

  const handleScroll = () => {
    const tableContainer = height.current;

    if (
      tableContainer.scrollHeight - tableContainer.scrollTop ===
      tableContainer.clientHeight
    ) {
      fetchMoreData();
    }
  };
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCount((prevCount) => prevCount + 1);
  //   }, 1000);
  //   return () => clearInterval(timer);
  // }, []);
  const sdbfnsbd = {
    a: 1,
    a: 2,
  };
  // console.log(sdbfnsbd);
  const a = [1, 2, 3, 4, 1, 12, 2];
  let max = -Infinity,
    smax = -Infinity;
  // const find = a.reduce((item, current) => {
  //   const exist = item.find((d) => d == current);
  //   if (!exist) {
  //     item.push(current);
  //   }
  //   return item;
  // }, []);

  a.forEach((d) => {
    if (d > max) {
      max = d;
      smax = max;
    } else if (d > smax && d < max) {
      smax = d;
    }
  });

  return (
    <div>
      {count}
      {height.map((d, i) => (
        <>
          <p key={d.id}>{d.title}</p>
        </>
      ))}
      {/* <TableContainer
        ref={height}
        onScroll={handleScroll}
        style={{ maxHeight: 600, overflowY: "auto" }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((d) => (
              <TableRow>
                <>
                  <TableCell key={d.id}>{d.id}</TableCell>
                  <TableCell>{d.title}</TableCell>
                </>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> */}
      {/* <Hooks /> */}
      {/* <Parent /> */}
      {/* <UseCallback /> */}
      {/* <Usememo /> */}
      <One />
      <Hoc />
      {createPortal(
        <p>This child is placed in the document body.</p>,
        document.body
      )}
    </div>
  );
}

export default App;
