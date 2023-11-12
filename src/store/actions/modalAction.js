import { Types } from "../Types";

export const setDeleteCourseModal = (params) => async (dispatch) => {
  dispatch({
    type: Types.modal.ASK_DELETE_COURSE,
    payload: params,
  });
};

export const setDeleteVideoModal = (params) => async (dispatch) => {
  dispatch({
    type: Types.modal.ASK_DELETE_VIDEO,
    payload: params,
  });
};

export const setAddVideoModal = (params) => async (dispatch) => {
  dispatch({
    type: Types.modal.ADD_NEW_VIDEO,
    payload: params,
  });
};

export const createAdminModal = (params) => async (dispatch) => {
  dispatch({
    type: Types.modal.ADD_ADMIN_ROLE,
    payload: params,
  });
};

export const removeAdminModal = (params) => async (dispatch) => {
  dispatch({
    type: Types.modal.REMOVE_ADMIN_ROLE,
    payload: params,
  });
};
export const setSelectUserModal = (params) => async (dispatch) => {
  dispatch({
    type: Types.modal.SELECT_USER_MODAL,
    payload: params,
  });
};
