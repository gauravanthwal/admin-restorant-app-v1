import { Types } from "../Types";

const initialState = {
  allProducts: [],
  productLoading: false,
  totalCount: 0,
  currentPage: 1,
  totalPages: 0,
  pageSize: 10,

  isLoading: false
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

    case Types.products.SET_PRODUCT_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case Types.products.REMOVE_PRODUCT_LOADING:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};
