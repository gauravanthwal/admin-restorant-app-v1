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

// GET ALL PRODUCTS
export const getAllProducts = (params) => async (dispatch) => {
  try {
    dispatch(setLoading());

    const res = await axios.get(BASE_URL + `/product/all`, getHeaders());

    if (res.status == 200) {
      dispatch(remvoeLoading());
      dispatch({
        type: Types.products.GET_ALL_PRODUCTS,
        payload: res?.data,
      });
    }
    dispatch(remvoeLoading());
  } catch (err) {
    toast.error(err?.response?.data.message);
    dispatch(remvoeLoading());
  }
};

// ADD NEW PRODUCTS
export const addNewProducts = (params) => async (dispatch) => {
  try {
    dispatch(setLoading());

    const res = await axios.post(BASE_URL + `/product/new`, params, getHeaders());

    if (res.status == 201) {
      dispatch(getAllProducts());
    }
    dispatch(remvoeLoading());
  } catch (err) {
    toast.error(err?.response?.data.message);
    dispatch(remvoeLoading());
  }
};

// UPDATE PRODUCT BY ID
export const updateProductById = (productId, params) => async (dispatch) => {
  try {
    dispatch(setLoading());

    const res = await axios.put(
      BASE_URL + `/product/updateProductById/${productId}`,
      { ...params },
      getHeaders()
    );

    if (res.status == 200) {
      dispatch(getAllProducts());
    }
    dispatch(remvoeLoading());
  } catch (err) {
    toast.error(err?.response?.data.message);
    dispatch(remvoeLoading());
  }
};

// DELETE PRODUCT BY ID
export const deleteProductById = (productId) => async (dispatch) => {
  try {
    dispatch(setLoading());

    const res = await axios.delete(
      BASE_URL + `/product/deleteProductById/${productId}`,
      getHeaders()
    );

    if (res.status == 200) {
      dispatch(getAllProducts());
    }
    dispatch(remvoeLoading());
  } catch (err) {
    toast.error(err?.response?.data.message);
    dispatch(remvoeLoading());
  }
};

// SET CURRENT PRODUCT
export const setCurrentProduct = (params) => async (dispatch) => {
  dispatch({ type: Types.products.SET_CURRENT_PRODUCT, payload: params });
};

// REMOVE CURRENT PRODUCT
export const removeCurrentProduct = () => async (dispatch) => {
  dispatch({ type: Types.products.REMOVE_CURRENT_PRODUCT });
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
