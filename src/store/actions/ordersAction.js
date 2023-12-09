import axios from "axios";
import { BASE_URL } from "../../utils/constant";
import { Types } from "../Types";
import { getStorage, setStorage } from "../../utils/storage";
import { toast } from "react-toastify";

export const getHeaders = () => {
  return {
    headers: {
      Authorization: `Bearer ${getStorage("token")}`,
      ContentType: "application/json",
    },
  };
};

export const getAllOrders = (params) => async (dispatch) => {
  try {
    dispatch(setLoading());

    const res = await axios.get(BASE_URL + `/order/all`, getHeaders());

    if (res.status == 200) {
      dispatch(remvoeLoading());
      dispatch({
        type: Types.orders.GET_ALL_ORDERS,
        payload: res?.data,
      });
    }
    dispatch(remvoeLoading());
  } catch (err) {
    toast.error(err?.response?.data.message);
    dispatch(remvoeLoading());
  }
};

export const addNewProducts = (params) => async (dispatch) => {
  try {
    dispatch(setLoading());

    const res = await axios.post(BASE_URL + `/product/new`, params);

    if (res.status == 201) {
      dispatch(getAllProducts())
    }
    dispatch(remvoeLoading());
  } catch (err) {
    toast.error(err?.response?.data.message);
    dispatch(remvoeLoading());
  }
};

export const nextPagePayment = () => async (dispatch) => {
  try {
    dispatch({
      type: Types.payment.NEXT_PAGE_PAYMENT,
    });
  } catch (err) {
    console.log(err);
  }
};
export const prevPagePayment = () => async (dispatch) => {
  try {
    dispatch({
      type: Types.payment.PREV_PAGE_PAYMENT,
    });
  } catch (err) {
    console.log(err);
  }
};

export const setLoading = () => async (dispatch) => {
  dispatch({
    type: Types.products.SET_PRODUCT_LOADING,
  });
};

export const remvoeLoading = () => async (dispatch) => {
  dispatch({
    type: Types.products.REMOVE_PRODUCT_LOADING,
  });
};
