import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/ui/Loader";
import {
  getAllPayments,
  nextPagePayment,
  prevPagePayment,
} from "../../store/actions/paymentAction";
import TableWithHead from "../../components/table/TableWithHead";
import { columns } from "../../components/order/orderTableData";
import AddProductModal from "../../components/modal/AddProductModal";
import { setAddProductModal } from "../../store/actions/modalAction";
import { getAllOrders } from "../../store/actions/ordersAction";

const Orders = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const { pageSize, currentPage, allOrders, totalPages, isLoading } =
    useSelector((state) => state.order);

  const { addProductModal } = useSelector((state) => state.modal);

  const loadNextPage = () => {
    dispatch(nextPagePayment());
  };
  const loadPrevPage = () => {
    dispatch(prevPagePayment());
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (search.length < 3 && search.length >= 1) {
      return;
    }
    dispatch(
      getAllPayments({
        page: 1,
        pageSize: pageSize,
        emailName: search,
      })
    );
  };

  const openAddProductModal = () => {
    dispatch(setAddProductModal(true));
  };

  useEffect(() => {
    dispatch(getAllOrders());
  }, [currentPage]);

  return (
    <div>
      {isLoading && <Loader />}
      {addProductModal && <AddProductModal />}
      <div className="pt-2">
        <div className="flex justify-between items-center">
          <form className="my-2" onSubmit={handleSearchSubmit}>
            <input
              className="border border-gray-300 px-2 py-2 outline-none rounded-tl-xl rounded-bl-xl"
              type="text"
              placeholder="Search Products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="px-2 py-2 border text-gray-400 border-gray-300 hover:bg-gray-300 bg-gray-200 rounded-tr-xl rounded-br-xl">
              Search
            </button>
          </form>
          {/* <div>
            <button
              onClick={openAddProductModal}
              className="bg-emerald-500 hover:bg-emerald-400 px-4 py-2 rounded-lg text-white"
            >
              Add New Product
            </button>
          </div> */}
        </div>

        {allOrders && allOrders.length > 0 && (
          <TableWithHead rowData={allOrders} columns={columns} />
        )}
        <div className="flex justify-between text-gray-700 mb-8">
          <div>
            <p>
              Page {currentPage} of {totalPages}
            </p>
          </div>
          <div>
            <button
              onClick={loadPrevPage}
              disabled={currentPage == 1 && true}
              className={`bg-gray-200 px-4 py-2 mx-1 rounded-sm ${
                currentPage == 1 ? "cursor-not-allowed" : "hover:bg-gray-300"
              }`}
            >
              <PrevButton />
            </button>
            <button
              onClick={loadNextPage}
              disabled={currentPage == totalPages && true}
              className={`bg-gray-200  px-4 py-2 rounded-sm ${
                currentPage == totalPages
                  ? "cursor-not-allowed"
                  : "hover:bg-gray-300"
              }`}
            >
              <NextButton />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const NextButton = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
      />
    </svg>
  );
};
const PrevButton = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
      />
    </svg>
  );
};

export default Orders;
