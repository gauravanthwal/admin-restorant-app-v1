import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactsTable from "../../components/table/ContactsTable";
import Loader from "../../components/ui/Loader";
import {
  getAllContacts,
  nextPageContacts,
  prevPageContacts,
  resetStateContacts,
} from "../../store/actions/contactAction";

const Contacts = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const {
    pageSize,
    currentPage,
    allContactDetails,
    totalPages,
    contactLoading,
  } = useSelector((state) => state.contact);

  const loadNextPage = () => {
    dispatch(nextPageContacts());
  };
  const loadPrevPage = () => {
    dispatch(prevPageContacts());
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (search.length < 3 && search.length >= 1) {
      return;
    }
    dispatch(
      getAllContacts({
        page: 1,
        pageSize: pageSize,
        emailName: search,
      })
    );
  };

  useEffect(() => {
    dispatch(
      getAllContacts({
        page: currentPage,
        pageSize: pageSize,
        emailName: search,
      })
    );
  }, [currentPage]);

  return (
    <div>
      {contactLoading && <Loader />}

      <div className="pt-2">
        <div>
          <form className="my-2" onSubmit={handleSearchSubmit}>
            <input
              className="border border-gray-600 px-2 py-1 outline-none rounded-tl-sm rounded-bl-sm"
              type="text"
              placeholder="Search Email or Name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="px-2 py-1 border border-gray-600 hover:bg-green-400 bg-green-300 rounded-tr-sm rounded-br-sm">
              Search
            </button>
          </form>
        </div>
        <ContactsTable
          allContactDetails={allContactDetails}
          pageSize={pageSize}
          currentPage={currentPage}
        />
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

export default Contacts;
