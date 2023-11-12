import axios from "axios";
import { BASE_URL } from "../../utils/constant";
import { Types } from "../Types";
import { store } from "../store";
import { getStorage, setStorage } from "../../utils/storage";
import { toast } from "react-toastify";
// import { getHeaders } from "../../utils/getHeaders";

export const getHeaders = () => {
  return {
    headers: {
      Authorization: `Bearer ${getStorage("user")?.token}`,
      ContentType: "application/json",
    },
  };
};

export const loginAdminUser = (formValue) => async (dispatch) => {
  try {
    dispatch(setLoading());

    const res = await axios.post(BASE_URL + "/user/login", {
      ...formValue,
    });

    if (res.status == 200) {
      dispatch(remvoeLoading());

      setStorage("auth", true);
      setStorage("token", res?.data?.token);
      toast.success("Login successfully");
      dispatch({
        type: Types.user.LOGIN_USER_SUCCESS,
        payload: res?.data?.token,
      });
    }
    dispatch(remvoeLoading());
  } catch (err) {
    toast.error(err?.response?.data.message);
    dispatch(remvoeLoading());
  }
};

export const getAllUsers = (params) => async (dispatch) => {
  try {
    dispatch(setLoading());

    const res = await axios.get(
      BASE_URL +
        `/user/all`,
      getHeaders()
    );

    if (res.status == 200) {
      dispatch(remvoeLoading());

      dispatch({
        type: Types.user.GET_ALL_USERS,
        payload: res?.data,
      });
    }
    dispatch(remvoeLoading());
  } catch (err) {
    toast.error(err?.response?.data.message);
    dispatch(remvoeLoading());
  }
};

export const nextPageUser = () => async (dispatch) => {
  try {
    dispatch({
      type: Types.user.NEXT_PAGE_USER,
    });
  } catch (err) {
    console.log(err);
  }
};
export const prevPageUser = () => async (dispatch) => {
  try {
    dispatch({
      type: Types.user.PREV_PAGE_USER,
    });
  } catch (err) {
    console.log(err);
  }
};

export const makeAdmin = (params) => async (dispatch) => {
  try {
    dispatch(setLoading());

    const res = await axios.post(
      BASE_URL + "/user/create-admin",
      params,
      getHeaders()
    );

    if (res.status == 200) {
      toast.success("Admin settings changed");
      dispatch(remvoeLoading());
      dispatch(getAllUsers());
      // window.location.reload();
    }
    dispatch(remvoeLoading());
  } catch (err) {
    toast.error(err?.response?.data.message);
    dispatch(remvoeLoading());
  }
};

export const enrollUserInCourse = (params) => async (dispatch) => {
  try {
    dispatch(setLoading());

    const res = await axios.post(
      BASE_URL + "/user/enroll-in-course",
      params,
      getHeaders()
    );

    if (res.status == 200) {
      toast.success(res?.data?.message);
      let user = store.getState()?.user;
      dispatch(
        getAllUsers({ page: user?.currentPage, pageSize: user?.pageSize })
      );
      dispatch(remvoeLoading());
      dispatch({
        type: Types.user.ENROLL_USER_IN_COURSE,
        payload: res.data.newUser,
      });
    }
    dispatch(remvoeLoading());
  } catch (err) {
    toast.error(err?.response?.data.message);
    dispatch(remvoeLoading());
  }
};

export const unEnrollUserInCourse = (params) => async (dispatch) => {
  try {
    dispatch(setLoading());

    const res = await axios.post(
      BASE_URL + "/user/unenroll-from-course",
      params,
      getHeaders()
    );

    if (res.status == 200) {
      toast.error(res?.data?.message);
      let user = store.getState()?.user;
      dispatch(
        getAllUsers({ page: user?.currentPage, pageSize: user?.pageSize })
      );
      dispatch(remvoeLoading());
      dispatch({
        type: Types.user.UNENROLL_USER_IN_COURSE,
        payload: params.courseId,
      });
    }
    dispatch(remvoeLoading());
  } catch (err) {
    toast.error(err?.response?.data.message);
    dispatch(remvoeLoading());
  }
};

export const updateUserFromStorage = () => async (dispatch) => {
  const auth = getStorage("auth");
  const token = getStorage("token");

  if (auth && token) {
    dispatch({
      type: Types.user.UPDATE_LOGIN_DETAILS,
      payload: token,
    });
  }
};

export const setSelectUser = (userDetails) => async (dispatch) => {
  dispatch({
    type: Types.user.SELECT_USER,
    payload: userDetails,
  });
};

export const setLoading = () => async (dispatch) => {
  dispatch({
    type: Types.user.SET_LOGIN_LOADING,
  });
};

export const remvoeLoading = () => async (dispatch) => {
  dispatch({
    type: Types.user.REMOVE_LOGIN_LOADING,
  });
};

export const logoutUser = () => async (dispatch) => {
  toast.success("Logout successfully");
  dispatch({
    type: Types.user.LOGOUT_USER,
  });
};
