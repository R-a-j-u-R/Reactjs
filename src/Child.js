import React from "react";
import propTypes from "prop-types";
function Child({ name, id, arrayProp, obj }) {
  return (
    <div>
      Child
      <p>{name}</p>
      <p>{id}</p>
      {arrayProp.map((d) => (
        <p key={d}>{d}</p>
      ))}
      <p>{obj.name}</p>
      {/* <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={send}>send</button> */}
    </div>
  );
}

Child.propTypes = {
  name: propTypes.string.isRequired,
  id: propTypes.number.isRequired,
  arrayProp: propTypes.array.isRequired,
  obj: propTypes.object.isRequired,
};
export default Child;
