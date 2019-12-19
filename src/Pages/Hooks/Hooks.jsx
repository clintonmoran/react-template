import React, { useState, useEffect, useRef } from "react";
import { Button, DropDown, TextArea } from "@healthwise-ui/core";

const Hooks = () => {
  const [list, setList] = useState(["item1", "item2"]);
  const [newVal, setNewVal] = useState("");

  function AddListItem() {
    if (newVal != "" && newVal != null) {
      list.push(newVal);
      setList(list);
      setNewVal("");
    }
  }

  var listRender = list.map(item => {
    return <li>{item}</li>;
  });

  return (
    <div>
      <TextArea
        type="text"
        value={newVal}
        onChange={e => {
          setNewVal(e.target.value);
        }}
      ></TextArea>
      <Button onClick={AddListItem}>Click Me</Button>

      <ul>{listRender}</ul>
    </div>
  );
};

export default Hooks;
