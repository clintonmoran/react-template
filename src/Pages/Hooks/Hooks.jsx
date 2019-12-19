import React, { useState, useEffect, useRef } from "react";

const Hooks = () => {
  const [list, setList] = useState(["item1", "item2"]);
  const [newVal, setNewVal] = useState("");

  function AddListItem() {
    list.push(newVal);
    setList(list);
    setNewVal("");
  }

  var listRender = list.map(item => {
    return <li>{item}</li>;
  });

  return (
    <div>
      <input
        type="text"
        value={newVal}
        onChange={e => {
          setNewVal(e.target.value);
        }}
      ></input>
      <button onClick={AddListItem}>Click Me</button>

      <ul>{listRender}</ul>
    </div>
  );
};

export default Hooks;
