import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillCheckCircle } from "react-icons/ai";
import moment from "moment/moment";
import {
  createAdminModal,
  removeAdminModal,
  setSelectUserModal,
} from "../../store/actions/modalAction";
import { setSelectUser } from "../../store/actions/userAction";
// import { HiXMark } from "react-icons/hi";

function UsersTable({ allUsersDetails, pageSize, currentPage, totalPages }) {
  const dispatch = useDispatch();
  console.log('allUsersDetails', allUsersDetails);

  const getCorrectRowNumber = (currentPage, pageSize, index) => {
    let x = (currentPage - 1) * pageSize + (index + 1);
    return x;
  };

  const handleChangeRole = (role, userId) => {
    if (role == "ADMIN") {
      dispatch(removeAdminModal({ removeAdmin: true, userId }));
    } else {
      dispatch(createAdminModal({ createAdmin: true, userId }));
    }
  };

  const selectingUser = (userInfo) => {
    dispatch(setSelectUser(userInfo));
    dispatch(setSelectUserModal(true));
  };
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-200">
          <tr>
            <th scope="col" className="px-3 py-3">
              Sr no
            </th>
            <th scope="col" className="px3 py-3">
              Full Name
            </th>
            <th scope="col" className="px-3 py-3">
              Username
            </th>
            <th scope="col" className="px-3 py-3">
              Email
            </th>
            <th scope="col" className="px-3 py-3">
              Mobile
            </th>
            {/* <th scope="col" className="px-3 py-3">
              State
            </th>
            <th scope="col" className="px-3 py-3">
              Role
            </th>
            <th scope="col" className="px-3 py-3">
              Verified
            </th>
            <th scope="col" className="px-3 py-3">
              Created On
            </th>
            <th scope="col" className="px-3 py-3">
              Action
            </th>
            <th scope="col" className="px-3 py-3">
              View
            </th> */}
          </tr>
        </thead>
        <tbody>
          {allUsersDetails &&
            allUsersDetails.map((user, index) => (
              <tr
                key={user.user_id}
                className={`border-b border-gray-400`}
              >
                <th className={`px-3 py-4 `}>
                  {getCorrectRowNumber(currentPage, pageSize, index)}
                </th>
                <td className="px-3 py-4 font-semibold">{user?.full_name}</td>
                <td className="px-3 py-4 font-semibold">{user?.username}</td>
                <td className="px-3 py-4 font-semibold">{user?.email}</td>
                <td className="px-3 py-4 font-semibold">{user?.mobile}</td>
                {/* <td className="px-3 py-4">
                  {user?.isAccountVerified ? (
                    <AiFillCheckCircle className="text-green-500 text-base" />
                  ) : (
                    <div className="bg-red-500 w-4 h-4 rounded-full flex justify-center items-center text-white">
                      <div>x</div>
                    </div>
                  )}
                </td> */}
                {/* <td className="px-3 py-4">
                  {moment(user?.createdAt).format("MMM D YYYY, hh:mm A")}
                </td> */}
                {/* <td className="px-3 py-4">
                  <button
                    onClick={() => handleChangeRole(user?.role, user._id)}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit Role
                  </button>
                </td>
                <td className="px-3 py-4">
                  <button
                    onClick={() => selectingUser(user)}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    User Info
                  </button>
                </td> */}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersTable;
