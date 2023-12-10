import React from "react";
import Dialog from "../modal/Dialog";
import { ViewIcon } from "../../assets/icons/icons";
import { useDispatch } from "react-redux";
import ViewProduct from "./ViewProduct";
import { removeCurrentProduct, setCurrentProduct } from "../../store/actions/productAction";

const ViewProductButton = ({ productId }) => {
  const dispatch = useDispatch();

  const openProductDetails = () => {
    const dialog = document.getElementById("dialog");

    if (dialog) {
      dispatch(setCurrentProduct(productId));
      dialog.showModal();
    }
  };

  const removeCurrent = () => {
    dispatch(removeCurrentProduct())
  };

  const cancelUpdate =()=>{
    const dialog = document.getElementById("dialog");

    if (dialog) {
      removeCurrent();
      dialog.close()
    }
  }

  return (
    <>
      <button
        onClick={openProductDetails}
        className="px-2 py-1 hover:bg-blue-50 hover:text-blue-600"
      >
        {ViewIcon}
      </button>
      <Dialog title={"View product details"} afterCloseCallback={removeCurrent}>
        <ViewProduct cancelUpdate={cancelUpdate}/>
      </Dialog>
    </>
  );
};

export default ViewProductButton;
