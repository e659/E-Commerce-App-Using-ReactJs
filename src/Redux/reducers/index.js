// if ihave more one reducer
import { combineReducers } from "redux";
import { productReducer, selsecProductReducer } from "./productReducer";
import cartReducer from "./cartReducer";
const reducers=combineReducers({
    allProducts:productReducer,
    product: selsecProductReducer,
    cart:cartReducer
});
export default reducers;