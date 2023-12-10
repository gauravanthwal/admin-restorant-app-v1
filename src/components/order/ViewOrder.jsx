import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkStatus, statusCanBe } from "../../utils/helper";
import { updateOrderStatus } from "../../store/actions/ordersAction";

const ViewOrder = () => {
  const dispatch = useDispatch();
  const { currentOrder } = useSelector((state) => state.order);

  const [error, setError] = useState("");
  const [newOrderStatus, setNewOrderStatus] = useState(
    currentOrder?.order_status
  );

  const updateStatus = (orderId) => {
    if (newOrderStatus == currentOrder?.order_status) {
      setError("You chose same order status as previous");
    }
    if (orderId && newOrderStatus) {
      dispatch(updateOrderStatus({ newOrderStatus, orderId }));
    }
  };
  return (
    <>
      {currentOrder && currentOrder._id && (
        <div>
          <div className="grid grid-cols-2 ">
            <div className="flex flex-col  border">
              <h1 className="text-gray-700 p-2 border-b">
                Product:{" "}
                <span className="font-semibold">
                  {currentOrder?.product?.product_name}
                </span>
              </h1>
              <h1 className="text-gray-700 p-2 border-b">
                Price:{" "}
                <span className="font-semibold">
                  ${currentOrder?.product?.price.toFixed(2)}
                </span>
              </h1>
              <h1 className="text-gray-700 p-2 border-b">
                Quantity:{" "}
                <span className="font-semibold">{currentOrder?.quantity}</span>
              </h1>
              <h1 className="text-gray-700 p-2">
                Total:{" "}
                <span className="font-semibold">
                  $
                  {(currentOrder?.quantity * currentOrder?.product?.price).toFixed(
                    2
                  )}
                </span>
              </h1>
            </div>
            <div className="flex flex-col border border-l-0">
              <h1 className="text-gray-700 p-2  ">
                <div className="">
                  <img
                    className="w-[100px] h-[100px] rounded-xl"
                    src={currentOrder?.product?.product_photo}
                    alt={currentOrder?.product?.product_name}
                  />
                </div>
              </h1>
              <h1 className="text-gray-700 p-2 border-b">
                Order status:{" "}
                <span
                  className="font-semibold text-white px-2 py-1 rounded-md"
                  style={{ background: checkStatus(currentOrder?.order_status) }}
                >
                  {currentOrder?.order_status}
                </span>
              </h1>
              <div className="text-gray-700 p-2 border-b">
                <label htmlFor="">Update status: </label>
                <select
                  name="order-status"
                  id="order-status"
                  className="border p-2"
                  onChange={(e) => setNewOrderStatus(e.target.value)}
                  defaultValue={currentOrder?.order_status}
                >
                  {statusCanBe.map((item) => (
                    <option
                      key={item.id}
                      value={item.status}
                      disabled={item.status == currentOrder?.order_status}
                    >
                      {item.status}
                    </option>
                  ))}
                </select>
                <button
                  className="bg-orange-300 hover:bg-orange-400 px-2 py-2  rounded-tr-md rounded-br-md"
                  onClick={() => updateStatus(currentOrder._id)}
                >
                  Update
                </button>
              </div>
              <div>
                <span className="text-red-500 text-sm">{error && error}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ViewOrder;
