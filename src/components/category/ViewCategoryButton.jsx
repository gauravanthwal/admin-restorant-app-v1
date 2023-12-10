import React from "react";
import Dialog from "../modal/Dialog";
import { ViewIcon } from "../../assets/icons/icons";
import { useDispatch } from "react-redux";
import {
  removeCurrentOrder,
  setCurrentOrder,
} from "../../store/actions/ordersAction";
import ViewCategory from "./ViewCategory";
import { removeCurrentCategory, setCurrentCategory } from "../../store/actions/categoryAction";

const ViewCategoryButton = ({ categoryId }) => {
  const dispatch = useDispatch();

  const openOrderDetails = () => {
    const dialog = document.getElementById("dialog");

    if (dialog) {
      dispatch(setCurrentCategory(categoryId));
      dialog.showModal();
    }
  };

  const cancelUpdate = () => {
    removeCurrent();
    const dialog = document.getElementById("dialog");

    if (dialog) {
      dialog.close();
    }
  };

  const removeCurrent = () => {
    dispatch(removeCurrentCategory());
  };

  return (
    <>
      <button
        onClick={openOrderDetails}
        className="px-2 py-1 hover:bg-gray-200"
      >
        {ViewIcon}
      </button>
      <Dialog
        title={"View category details"}
        afterCloseCallback={removeCurrent}
      >
        <ViewCategory cancelUpdate={cancelUpdate}/>
      </Dialog>
    </>
  );
};

export default ViewCategoryButton;
