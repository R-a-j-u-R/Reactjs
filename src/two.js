import React, { useContext } from "react";
import { contextValue } from ".";

function Two() {
  const { pass, send } = useContext(contextValue);
  return (
    <div>
      pass: <h1> {pass}</h1>
      send: <h1> {send}</h1>
    </div>
  );
}

export default Two;
