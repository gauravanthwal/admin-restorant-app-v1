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

export const getAllContacts = (params) => async (dispatch) => {
  try {
    dispatch(setLoading());

    const res = await axios.get(
      BASE_URL +
        `/contact/getAllContacts?page=${params.page}&pageSize=${params.pageSize}&emailName=${params.emailName}`,
      getHeaders()
    );

    if (res.status == 200) {
      dispatch(remvoeLoading());
      dispatch({
        type: Types.contact.GET_ALL_CONTACTS,
        payload: res?.data,
      });
    }
    dispatch(remvoeLoading());
  } catch (err) {
    toast.error(err?.response?.data.message);
    dispatch(remvoeLoading());
  }
};

export const toggleSideBar = () => async (dispatch) => {
  dispatch({
    type: Types.config.TOGGLE_SIDEBAR,
  });
};



export const nextPageContacts = () => async (dispatch) => {
  try {
    dispatch({
      type: Types.contact.NEXT_PAGE_CONTACTS,
    });
  } catch (err) {
    console.log(err);
  }
};
export const prevPageContacts = () => async (dispatch) => {
  try {
    dispatch({
      type: Types.contact.PREV_PAGE_CONTACTS,
    });
  } catch (err) {
    console.log(err);
  }
};

export const setLoading = () => async (dispatch) => {
  dispatch({
    type: Types.contact.CONTACT_SET_LOADING,
  });
};

export const remvoeLoading = () => async (dispatch) => {
  dispatch({
    type: Types.contact.CONTACT_REMOVE_LOADING,
  });
};
