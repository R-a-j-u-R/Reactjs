import React, { useCallback, useState } from "react";

function One() {
  const [text, setText] = useState();

  function debounce(callback, delay) {
    let timer;
    return (...args) => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        callback(...args);
      }, delay);
    };
  }
  console.log(1 + 1);
  const handlChange = useCallback(
    debounce((e) => {
      setText(e.target.value);
    }, 1000),
    []
  );
  const [items, setItems] = useState(["item1", "item2", "item3", "item4"]);
  const [draggedItemIndex, setDraggedItemIndex] = useState(null);
  const handleDragStart = (index) => {
    setDraggedItemIndex(index);
  };
  const handleDragEnd = () => {
    setDraggedItemIndex(null);
  };
  const handleDrop = (index) => {
    if (index === draggedItemIndex) return;
    const draggedItem = items[draggedItemIndex];
    const updatedItems = items.filter((_, idx) => idx !== draggedItemIndex);
    updatedItems.splice(index, 0, draggedItem);
    setItems(updatedItems);
    setDraggedItemIndex(null);
  };
  return (
    <div>
      Debounce in ReactJs
      <input value={text} onChange={handlChange} /> 
      <div className="App">
              
        {items.map((item, index) => (
          <div
            key={index}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragEnd={handleDragEnd}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop(index)}
          >
                      {item}        
          </div>
        ))}
            
      </div>
    </div>
  );
}

export default One;
