export const ITEMS_RETREIVED = "ITEMS_RETRIEVED";
export const ITEM_SELECTED = "ITEM_SELECTED";
export const ITEM_ADDED = "ITEM_ADDED";

export function ItemsRetrieved(items) {
  return { type: ITEMS_RETREIVED, items };
}

export function SelectItem(item) {
  return { type: ITEM_SELECTED, item };
}

export function AddItem(item) {
  return { type: ITEM_ADDED, item };
}
