import { combineReducers } from "redux";
import { gettingProductData, changeQuant, filtered_products_data, changeTitle, maintaingBasket } from "./EventReducer";

const rootReducers = combineReducers({
    gettingProduct: gettingProductData,
    // changingQuant: changeQuant,
    filteringProduct: filtered_products_data,
    changingTitle: changeTitle,
    basket: maintaingBasket
})

export default rootReducers;