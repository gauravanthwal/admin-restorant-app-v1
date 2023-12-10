import React from "react";
import { DeleteIcon, ViewIcon } from "../../assets/icons/icons";
import { useDispatch, useSelector } from "react-redux";
import ConfirmDialog from "../modal/ConfirmDialog";

import {
  deleteCategoryById,
  removeCurrentCategory,
  setCurrentCategory,
} from "../../store/actions/categoryAction";

const DeleteCategoryButton = ({ categoryId }) => {
  const dispatch = useDispatch();

  const { currentCategory } = useSelector((state) => state.category);

  const openCategoryDetails = () => {
    const dialog = document.getElementById("confirm-dialog");
    if (dialog) {
      dispatch(setCurrentCategory(categoryId));
      dialog.showModal();
    }
  };

  const closeDialog = () => {
    const dialog = document.getElementById("confirm-dialog");
    if (dialog) {
      resetCurrentProduct();
      dialog.close();
    }
  };

  const resetCurrentProduct = () => {
    dispatch(removeCurrentCategory());
  };

  const deleteProduct = () => {
    dispatch(deleteCategoryById(categoryId));
    closeDialog();
  };

  return (
    <>
      <button
        onClick={openCategoryDetails}
        className="px-2 py-1 hover:bg-red-50 hover:text-red-500"
      >
        {DeleteIcon}
      </button>
      <ConfirmDialog
        title={"Delete product"}
        afterCloseCallback={resetCurrentProduct}
      >
        <div>
          <h1>
            Are you sure you want to delete category :{" "}
            {currentCategory.category_name}
          </h1>
          <div className="my-4 flex justify-center">
            <button
              onClick={closeDialog}
              className="px-8 py-2 rounded-md bg-gray-200 hover:bg-gray-300  mx-2"
            >
              No
            </button>
            <button
              onClick={deleteProduct}
              className="px-8 py-2 rounded-md bg-red-500 text-white hover:bg-red-400  mx-2"
            >
              Yes
            </button>
          </div>
        </div>
      </ConfirmDialog>
    </>
  );
};

export default DeleteCategoryButton;
