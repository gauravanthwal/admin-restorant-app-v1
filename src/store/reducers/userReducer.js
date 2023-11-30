import { removeFromStorage } from "../../utils/storage";
import { Types } from "../Types";

const initialState = {
  user: {},
  token: null,
  userDetails: {},
  isAuth: false,
  isLoading: false,
  selectedUser: {},
  // Pagination starts
  allUsersDetails: [],
  totalCount: 0,
  currentPage: 1,
  totalPages: 0,
  pageSize: 10,
};

export const usersReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case Types.user.LOGIN_USER_SUCCESS:
      return { ...state, token: payload, isAuth: true };

    case Types.user.UPDATE_LOGIN_DETAILS:
      return { ...state, token: payload, isAuth: true };

    case Types.user.GET_ALL_USERS:
      return {
        ...state,
        allUsersDetails: payload,
        totalCount: 18,
        currentPage: 1,
        totalPages: 3,
      };

    case Types.user.GET_ALL_CONTACTS:
      return { ...state, allContactDetails: payload };

    case Types.user.NEXT_PAGE_USER:
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };

    case Types.user.PREV_PAGE_USER:
      return {
        ...state,
        currentPage: state.currentPage - 1,
      };

    case Types.user.SELECT_USER:
      return { ...state, selectedUser: payload };

    case Types.user.UNENROLL_USER_IN_COURSE:
      let newCourses = state?.selectedUser?.courseAccess?.filter(
        (item) => item?.courseId != payload
      );
      return {
        ...state,
        selectedUser: { ...state.selectedUser, courseAccess: newCourses },
      };

    case Types.user.ENROLL_USER_IN_COURSE:
      return { ...state, selectedUser: payload };

    case Types.user.SET_LOGIN_LOADING:
      return { ...state, isLoading: true };

    case Types.user.REMOVE_LOGIN_LOADING:
      return { ...state, isLoading: false };

    case Types.user.LOGOUT_USER:
      removeFromStorage("auth");
      removeFromStorage("token");
      return { ...state, isAuth: false, user: {} };

    default:
      return state;
  }
};
