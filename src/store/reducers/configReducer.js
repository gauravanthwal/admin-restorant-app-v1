import { Types } from "../Types";

const initialState = {
  showSideBar: true,
};

export const configReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case Types.config.TOGGLE_SIDEBAR:
      return {
        ...state,
        showSideBar: !state.showSideBar,
      };
    
      
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
