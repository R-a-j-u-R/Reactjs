import { useEffect, useState } from "react";

export default function useProduct() {
  const [data, setData] = useState([]);
  const datas = async () => {
    const api = await fetch("https://jsonplaceholder.typicode.com/todos");
    const response = await api.json();
    setData(response);
  };
  useEffect(() => {
    datas();
  }, []);

  return data;
}
