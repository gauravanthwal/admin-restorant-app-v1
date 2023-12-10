import React from "react";
import { DeleteIcon, ViewIcon } from "../../assets/icons/icons";
import { useDispatch, useSelector } from "react-redux";
import ConfirmDialog from "../modal/ConfirmDialog";
import {
  deleteProductById,
  removeCurrentProduct,
  setCurrentProduct,
} from "../../store/actions/productAction";

const DeleteProductButton = ({ productId }) => {
  const dispatch = useDispatch();

  const { currentProduct } = useSelector((state) => state.product);

  const openProductDetails = () => {
    const dialog = document.getElementById("confirm-dialog");
    if (dialog) {
      dispatch(setCurrentProduct(productId));
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
    dispatch(removeCurrentProduct());
  };

  const deleteProduct = () => {
    dispatch(deleteProductById(currentProduct._id));
    closeDialog();
  };

  return (
    <>
      <button
        onClick={openProductDetails}
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
            Are you sure you want to delete product :{" "}
            {currentProduct.product_name}
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

export default DeleteProductButton;
