import { combineReducers } from "redux";
import { gettingProductData, filtered_products_data, changeTitle, maintaingBasket, gettingProductCategory } from "./EventReducer";

const rootReducers = combineReducers({
    gettingProduct: gettingProductData,
    // changingQuant: changeQuant,
    filteringProduct: filtered_products_data,
    changingTitle: changeTitle,
    basket: maintaingBasket,
    category:gettingProductCategory
})

export default rootReducers;