import axios from "axios";
import { BASE_URL } from "../../utils/constant";
import { Types } from "../Types";
import { getStorage, setStorage } from "../../utils/storage";
import { toast } from "react-toastify";

export const getHeaders = () => {
  return {
    headers: {
      Authorization: `Bearer ${getStorage("user")?.token}`,
      ContentType: "application/json",
    },
  };
};

export const getAllPayments = (params) => async (dispatch) => {
  try {
    dispatch(setLoading());

    const res = await axios.get(
      BASE_URL +
        `/payment/getAllPayments?page=${params.page}&pageSize=${params.pageSize}&emailName=${params.emailName}`,
      getHeaders()
    );

    if (res.status == 200) {
      dispatch(remvoeLoading());
      dispatch({
        type: Types.payment.GET_ALL_PAYMENT,
        payload: res?.data,
      });
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
    type: Types.payment.PAYMENT_SET_LOADING,
  });
};

export const remvoeLoading = () => async (dispatch) => {
  dispatch({
    type: Types.payment.PAYMENT_REMOVE_LOADING,
  });
};
