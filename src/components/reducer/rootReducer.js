const initState = {
  id: "",
  desc: "",
  quantity: "",
  price: "",
  shoppingItems: []
};
const rootReducer = (state = initState, action) => {
  if (action.type === "ADD_ITEM") {
    return {
      ...state,
      shoppingItems: [
        ...state.shoppingItems,
        {
          id: Date.now().toString(),
          desc: action.desc,
          quantity: action.quantity,
          price: action.price
        }
      ]
    };
  }

  if (action.type === "DELETE_ITEM") {
    const filteredItems = state.shoppingItems.filter(
      i => i.id !== action.item.id
    );
    return {
      ...state,
      shoppingItems: [...filteredItems]
    };
  }

  return state;
};

export default rootReducer;
