import { ITEMS_RETREIVED, ITEM_SELECTED, ITEM_ADDED } from "./AppStateActions";

export const initialState = { items: [] };

export const appStateReducer = (state, action) => {
  switch (action.type) {
    case ITEMS_RETREIVED: {
      return { ...state, items: action.items };
    }
    case ITEM_SELECTED: {
      return { ...state, selectedItem: action.item };
    }
    case ITEM_ADDED: {
      return { ...state, items: [...state.items, action.item] };
    }
    // case 'ADD_TO_CART': {
    //   var item = state.cartItems.find(e => e.id === action.cartItem.id)
    //   if (item === null || item === undefined) {
    //     return { ...state, cartItems: [...state.cartItems, { ...action.cartItem, quantity: 1 }] }
    //   }
    //   var index = state.cartItems.findIndex(e => e.id === action.cartItem.id)
    //   item.quantity = item.quantity + 1
    //   return {
    //     ...state,
    //     cartItems: [...state.cartItems.slice(0, index), item, ...state.cartItems.slice(index + 1)],
    //   }
    // }
    // case 'REMOVE_FROM_CART': {
    //   return {
    //     ...state,
    //     cartItems: [
    //       ...state.cartItems.slice(0, action.indexToRemove),
    //       ...state.cartItems.slice(action.indexToRemove + 1),
    //     ],
    //   }
    // }
    // case 'CLEAR_CART': {
    //   return { ...state, cartItems: [] }
    // }
    default:
      return state;
  }
};

// export { initialState };
// export default appStateReducer;
