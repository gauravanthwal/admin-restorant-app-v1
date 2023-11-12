import { Types } from "../Types";

const initialState = {
  allContactDetails: [],
  contactLoading: false,
  totalCount: 0,
  currentPage: 1,
  totalPages: 0,
  pageSize: 10,
};

export const contactReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case Types.contact.GET_ALL_CONTACTS:
      return {
        ...state,
        allContactDetails: payload?.allContactDetails,
        totalCount: payload?.totalCount,
        currentPage: payload?.currentPage,
        totalPages: payload?.totalPages,
      };

    case Types.contact.NEXT_PAGE_CONTACTS:
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };

    case Types.contact.PREV_PAGE_CONTACTS:
      return {
        ...state,
        currentPage: state.currentPage - 1,
      };

    case Types.contact.RESET_CONTACT:
      return {
        ...state,
        currentPage: 1,
      };

    case Types.contact.CONTACT_SET_LOADING:
      return {
        ...state,
        contactLoading: true,
      };
    case Types.contact.CONTACT_REMOVE_LOADING:
      return {
        ...state,
        contactLoading: false,
      };

    default:
      return state;
  }
};
