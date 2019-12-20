import React from "react";

const HookItems = ({ items }) => {
  return (
    <ul data-testid="items">
      {items.map(item => {
        return <li data-testid="item" key={item.id}>{item.id}: {item.title}</li>;
      })}
    </ul>
  );
};

export default HookItems;
