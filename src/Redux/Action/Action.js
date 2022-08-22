import axios from "axios";
import { actiontypes } from "./ActionTypes";

export const getProduct = () => async (dispatch) => {
  try {
    const response = await axios.get(process.env.REACT_APP_GET_DATA_URL);
    const res = response.data;

    dispatch({
      type: actiontypes.GET_PRODUCT_DATA,
      payload: res,
    });

    dispatch(filteredProducts(res.data, "Fruits,Vegetables & Herbs"));
  } catch (error) {
    console.log("get data error", error);
  }
};

export const filteredProducts = (data, params) => async (dispatch) => {
  try {
    let filteredProducts = [];

    if (params === "fruits" || params === "vegetables" || params === "herbs") {
      filteredProducts = data.filter((el) => el.category === params);
    } else {
      filteredProducts = data;
    }

    dispatch({
      type: actiontypes.FILTER_PRODUCT,
      payload: filteredProducts,
    });

    dispatch(changeTitle(params.toUpperCase()));
  } catch (error) {
    console.log("filtered product error", error.message);
  }
};

export const changeTitle = (title) => {
  return {
    type: actiontypes.NEW_TITLE,
    payload: title,
  };
};

export const addToBasket = (basketItem) => {
 return {
  type: actiontypes.ADD_TO_BASKET,
  payload: basketItem
 }
};

export const removeFromBasket = (id)=>{
  return{
    type:actiontypes.REMOVE_FROM_BASKET,
    payload: id
  }
}

export const incQuantity = (id) => {
  return {
    type: actiontypes.INC_QUANTITY,
    payload: id,
  };
};

export const decQuantity = (id) => {
  return {
    type: actiontypes.DEC_QUANTITY,
    payload: id,
  };
};

export const emptyBasket = ()=>{
  return {
    type: actiontypes.EMPTY_BASKET,
  }
}
