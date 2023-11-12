import { Types } from "../Types";

const initialState = {
  allPaymentDetails: [],
  paymentLoading: false,
  totalCount: 0,
  currentPage: 1,
  totalPages: 0,
  pageSize: 10,
};

export const paymentReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case Types.payment.GET_ALL_PAYMENT:
      return {
        ...state,
        allPaymentDetails: payload?.allPaymentDetails,
        totalCount: payload?.totalCount,
        currentPage: payload?.currentPage,
        totalPages: payload?.totalPages,
      };

    case Types.payment.NEXT_PAGE_PAYMENT:
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };

    case Types.payment.PREV_PAGE_PAYMENT:
      return {
        ...state,
        currentPage: state.currentPage - 1,
      };

    case Types.payment.PAYMENT_SET_LOADING:
      return {
        ...state,
        paymentLoading: true,
      };
    case Types.payment.PAYMENT_REMOVE_LOADING:
      return {
        ...state,
        paymentLoading: false,
      };

    default:
      return state;
  }
};
