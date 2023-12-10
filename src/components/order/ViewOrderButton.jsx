import React from "react";
import Dialog from "../modal/Dialog";
import { ViewIcon } from "../../assets/icons/icons";
import { useDispatch } from "react-redux";
import {
  removeCurrentOrder,
  setCurrentOrder,
} from "../../store/actions/ordersAction";
import ViewOrder from "./ViewOrder";

const ViewButton = ({ orderId }) => {
  const dispatch = useDispatch();

  const openOrderDetails = () => {
    const dialog = document.getElementById("dialog");

    if (dialog) {
      dispatch(setCurrentOrder(orderId));
      dialog.showModal();
    }
  };

  const removeCurrent = () => {
    dispatch(removeCurrentOrder());
  };

  return (
    <>
      <button
        onClick={openOrderDetails}
        className="px-2 py-1 hover:bg-gray-200"
      >
        {ViewIcon}
      </button>
      <Dialog title={"View order details"} afterCloseCallback={removeCurrent}>
        <ViewOrder />
      </Dialog>
    </>
  );
};

export default ViewButton;
