import React, { useState } from "react";

function TodoList() {
  const [data, setData] = useState("");
  const [items, setItems] = useState([]);
  const datas = {
    id: 1,
    name: "raju",
  };
  function getItem(g) {
    return this.id + g;
  }
  console.log(getItem.call(datas, 1));
  const add = () => {
    if (data.trim().length === 0) {
      return;
    }
    setItems([...items, data]);
  };

  const DeleteItem = (index) => {
    const result = items.filter((_, i) => i !== index);
    setItems(result);
  };
  const EditItem = (index) => {
    const updatedItems = [...items];
    updatedItems[index] = data;
    setItems(updatedItems);
  };
  return (
    <div className="App">
      TodoList
      <input value={data} onChange={(e) => setData(e.target.value)} />
      <button onClick={add}>Add ToDo</button>
      {items.map((d, i) => (
        <p>
          <input value={d} />
          <button onClick={() => DeleteItem(i)}>delete</button>
          <button onClick={() => EditItem(i)}>save</button>
        </p>
      ))}
    </div>
  );
}

export default TodoList;
