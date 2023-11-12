import { Types } from "../Types";

const initialState = {
  allProducts: [],
  productLoading: false,
  totalCount: 0,
  currentPage: 1,
  totalPages: 0,
  pageSize: 10,
};

export const productReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case Types.products.GET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: payload?.products,
        totalCount: 1,
        currentPage: 1,
        totalPages: 1,
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
