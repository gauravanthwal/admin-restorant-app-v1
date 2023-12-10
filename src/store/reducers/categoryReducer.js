import { Types } from "../Types";

const initialState = {
  allCategories: [],
  currentCategory: {},
  productLoading: false,
  totalCount: 0,
  currentPage: 1,
  totalPages: 0,
  pageSize: 10,

  isLoading: false,
};

export const categoryReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case Types.category.GET_ALL_CATEGORY:
      return {
        ...state,
        allCategories: payload?.categories,
        totalCount: 1,
        currentPage: 1,
        totalPages: 1,
      };

    case Types.category.SET_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: state.allCategories.find((cat) => cat._id == payload),
      };

    case Types.category.REMOVE_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: {},
      };

    case Types.orders.UPDATE_CURRENT_ORDER:
      return {
        ...state,
        currentOrder: { ...state.currentOrder, order_status: payload },
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
