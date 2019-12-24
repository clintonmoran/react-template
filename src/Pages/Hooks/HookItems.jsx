import React, { useEffect } from "react";

import { useAppState } from "../Home/State/AppState";
import Api from "../../Api/MockApi";
import { ItemsRetrieved } from "../Home/State/AppStateActions";
import { HookItem } from "./HookItem";

export const HookItems = () => {
  const [{ items }, dispatch] = useAppState();
  console.log(items);
  useEffect(() => {
    Api.getItems().then(items => {
      dispatch(ItemsRetrieved(items));
    });
  }, [dispatch]);

  return (
    <div>
      OHHH SHIT
      <ul>
        {items.map(item => {
          return <HookItem key={item.id} item={item} />;
        })}
      </ul>
    </div>
  );
};
