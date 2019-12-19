import React from "react";
import { Button, DropDown } from "@healthwise-ui/core";

const Home = () => {

  const doNothing = () => { } // make the proptypes pass for dropdown test
  return (
    <div>
      <Button raised>Click IT GOOOOOD</Button>
      <DropDown
        items={[
          { name: "item 1", value: 1 },
          { name: "item 2", value: 2 },
          { name: "item 3", value: 3 }
        ]}
        onSelect={doNothing}
      ></DropDown>
    </div>
  );
};

export default Home;
