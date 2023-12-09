import { usersReducer } from "./userReducer";
import { courseReducer } from "./courseReducer";
import { modalReducer } from "./modalReducer";
import { combineReducers } from "redux";
import { contactReducer } from "./contactReducer";
import { paymentReducer } from "./paymentReducer";
import { productReducer } from "./productReducer";
import { configReducer } from "./configReducer";
import { orderReducer } from "./orderReducer";

export const rootReducer = combineReducers({
  user: usersReducer,
  course: courseReducer,
  modal: modalReducer,
  contact: contactReducer,
  payment: paymentReducer,
  product: productReducer,
  config: configReducer,
  order: orderReducer
  //   alert: alertReducer,
  //   blog: blogReducer,
});
