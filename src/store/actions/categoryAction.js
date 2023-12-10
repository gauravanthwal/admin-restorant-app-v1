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

export const getAllCategories = (params) => async (dispatch) => {
  try {
    dispatch(setLoading());

    const res = await axios.get(BASE_URL + `/category/all`, getHeaders());

    if (res.status == 200) {
      dispatch(remvoeLoading());
      dispatch({
        type: Types.category.GET_ALL_CATEGORY,
        payload: res?.data,
      });
    }
    dispatch(remvoeLoading());
  } catch (err) {
    toast.error(err?.response?.data.message);
    dispatch(remvoeLoading());
  }
};

export const createNewCategories = (params) => async (dispatch) => {
  try {
    dispatch(setLoading());

    const res = await axios.post(
      BASE_URL + `/category/newCategory`,
      params,
      getHeaders()
    );

    if (res.status == 201) {
      dispatch(remvoeLoading());
      dispatch(getAllCategories());
    }
    dispatch(remvoeLoading());
  } catch (err) {
    toast.error(err?.response?.data.message);
    dispatch(remvoeLoading());
  }
};

export const updateCategoryById = (catId, params) => async (dispatch) => {
  try {
    dispatch(setLoading());

    const res = await axios.put(
      BASE_URL + `/category/updateCategoryById/${catId}`,
      params,
      getHeaders()
    );

    if (res.status == 200) {
      dispatch(remvoeLoading());
      dispatch(getAllCategories());
    }
    dispatch(remvoeLoading());
  } catch (err) {
    toast.error(err?.response?.data.message);
    dispatch(remvoeLoading());
  }
};

export const deleteCategoryById = (catId) => async (dispatch) => {
  try {
    dispatch(setLoading());

    const res = await axios.delete(
      BASE_URL + `/category/deleteCategoryById/${catId}`,
      getHeaders()
    );

    if (res.status == 200) {
      dispatch(remvoeLoading());
      dispatch(getAllCategories());
    }
    dispatch(remvoeLoading());
  } catch (err) {
    toast.error(err?.response?.data.message);
    dispatch(remvoeLoading());
  }
};

export const setCurrentCategory = (params) => async (dispatch) => {
  try {
    dispatch({ type: Types.category.SET_CURRENT_CATEGORY, payload: params });
  } catch (err) {
    dispatch(remvoeLoading());
  }
};

export const removeCurrentCategory = () => async (dispatch) => {
  try {
    dispatch({ type: Types.category.REMOVE_CURRENT_CATEGORY });
  } catch (err) {
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
