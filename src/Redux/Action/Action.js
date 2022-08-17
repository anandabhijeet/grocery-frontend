import axios from "axios";
import { actiontypes } from "./ActionTypes";

let product_data = [];
export const getProduct = () => async (dispatch) => {
  try {
    const response = await axios.get(process.env.REACT_APP_GET_DATA_URL);

    product_data = response.data.data;

    dispatch({
      type: actiontypes.GET_PRODUCT_DATA,
      payload: product_data,
    });

    dispatch(filteredProducts("herbs"));
  } catch (error) {
    console.log("get data error", error);
  }
};

export const filteredProducts = (params) => async (dispatch) => {
  try {
    let filteredProducts = [];
    if (params === "allProducts") {
      filteredProducts = product_data;
    } else {
      filteredProducts = product_data.filter((el) => el.category === params);
      console.log(filteredProducts);
    }

    dispatch({
      type: actiontypes.FILTER_PRODUCT,
      payload: filteredProducts,
    });
  } catch (error) {
    console.log("filtered product error", error.message);
  }
};

export const incQuantity = (quantity) => {
  return {
    type: actiontypes.INC_QUANTITY,
    payload: quantity,
  };
};

export const decQuantity = (quantity) => {
  return {
    type: actiontypes.DEC_QUANTITY,
    payload: quantity,
  };
};
