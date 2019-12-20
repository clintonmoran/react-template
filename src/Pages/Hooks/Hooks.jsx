import React, { useState, useEffect, useRef } from "react";
import { Button, DropDown, TextArea } from "@healthwise-ui/core";
import { HookItems } from "./HookItems";

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

      <HookItems />
    </div>
  );
};

export default Hooks;
