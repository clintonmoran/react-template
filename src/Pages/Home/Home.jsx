import React from "react";
import { Button, DropDown } from "@healthwise-ui/core";

const Home = () => {
  return (
    <div>
      <Button raised>Click IT GOOOOOD</Button>
      <DropDown
        items={[
          { name: "item 1", value: 1 },
          { name: "item 2", value: 2 },
          { name: "item 3", value: 3 }
        ]}
      ></DropDown>
    </div>
  );
};

export default Home;
