import { actiontypes } from "../Action/ActionTypes";

export const gettingProductData = (state = {}, { type, payload }) => {
  switch (type) {
    case actiontypes.GET_PRODUCT_DATA:
      return { ...state, products: payload };

    default:
      return state;
  }
};

export const gettingProductCategory = (state=[],{type, payload}) =>{
  switch (type) {
    case actiontypes.GET_CATEGORY:
      return state = payload?.data
      
    default:
      return state;
  }

}

const initialState = "Fruits, Vegetables & Herbs";
export const changeTitle = (state = initialState, { type, payload }) => {
  switch (type) {
    case actiontypes.NEW_TITLE:
      return (state = payload);

    default:
      return state;
  }
};


//   switch (type) {
//     case actiontypes.INC_QUANTITY:
//       return { ...payload, quantity: payload.quantity + state };

//     case actiontypes.DEC_QUANTITY:
//       if (payload.quantity > 0) {
//         return { ...payload, quantity: payload.quantity - state };
//       }
//       break;

//     default:
//       return state;
//   }
// };

export const filtered_products_data = (state = {}, { type, payload }) => {
  switch (type) {
    case actiontypes.FILTER_PRODUCT:
      return { ...state, filteredProduct: payload };
    default:
      return state;
  }
};

export const maintaingBasket = (state = [], { type, payload }) => {
  switch (type) {
    case actiontypes.ADD_TO_BASKET:
      return [...state, payload];

    case actiontypes.REMOVE_FROM_BASKET:
      const findIndex = state.findIndex(item=>item._id === payload);
      state[findIndex]["quantity"] = 1;
      return state.filter((item) => item._id !== payload);

    case actiontypes.INC_QUANTITY:
      const itemIndex = state.findIndex((el) => el._id === payload);

      state[itemIndex]["quantity"] = state[itemIndex]["quantity"] + 1;
      console.log(state);
      return state;
    case actiontypes.DEC_QUANTITY:
      const item_index = state.findIndex((el) => el._id === payload);
      if(state[item_index]["quantity"]>1){
        state[item_index]["quantity"] = state[item_index]["quantity"] - 1;
      console.log(state);
      return state;
      }else{
       return state.filter(item=>item._id !== payload);
      } 
    case actiontypes.EMPTY_BASKET:
      
      return state = [];
    default:
      return state;
  }
};
