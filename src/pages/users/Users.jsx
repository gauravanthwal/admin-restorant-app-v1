import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllUsers,
  nextPageUser,
  prevPageUser,
} from "../../store/actions/userAction";
import Loader from "../../components/ui/Loader";
import CreateAdmin from "../../components/modal/CreateAdmin";
import RemoveAdmin from "../../components/modal/RemoveAdmin";
import SelectUserModal from "../../components/modal/SelectUserModal";
import { getAllCourses } from "../../store/actions/courseAction";
import TableWithHead from "../../components/table/TableWithHead";
import { columns } from "../../components/users/userTableData";

const Users = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const { createAdmin, removeAdmin, selectUser } = useSelector(
    (state) => state.modal
  );
  const {
    currentPage,
    pageSize,
    allUsersDetails,
    totalCount,
    totalPages,
    isLoading,
  } = useSelector((state) => state.user);

  const loadNextPage = () => {
    dispatch(nextPageUser());
  };

  const loadPrevPage = () => {
    dispatch(prevPageUser());
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (search.length < 3 && search.length >= 1) {
      return;
    }
    dispatch(
      getAllUsers({
        page: 1,
        pageSize: pageSize,
        emailName: search,
      })
    );
  };

  useEffect(() => {
    dispatch(
      getAllUsers({ page: currentPage, pageSize: pageSize, emailName: search })
    );
    // dispatch(getAllCourses());
  }, [currentPage]);
  return (
    <div className="pt-2">
      {createAdmin && <CreateAdmin />}
      {removeAdmin && <RemoveAdmin />}
      {selectUser && <SelectUserModal />}
      <div>
        {isLoading && <Loader />}
        <div>
          <form className="my-2" onSubmit={handleSearchSubmit}>
            <input
              className="border border-gray-300 px-2 py-2 outline-none rounded-tl-xl rounded-bl-xl"
              type="text"
              placeholder="Search Email or Name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="px-2 py-2 border text-gray-400 border-gray-300 hover:bg-gray-300 bg-gray-200 rounded-tr-xl rounded-br-xl">
              Search
            </button>
          </form>
        </div>
        {allUsersDetails && allUsersDetails.length > 0 && (
          <TableWithHead rowData={allUsersDetails} columns={columns} />
        )}
        <div className="my-2 flex justify-between text-gray-700">
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

export default Users;
