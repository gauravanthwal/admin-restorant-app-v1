import React from "react";
import moment from "moment/moment";

function ContactsTable({ allContactDetails, pageSize, currentPage }) {
  const getCorrectRowNumber = (currentPage, pageSize, index) => {
    let x = (currentPage - 1) * pageSize + (index + 1);
    return x;
  };
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-sm mb-4 max-h-screen overflow-y-auto">
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
              Email
            </th>
            <th scope="col" className="px-3 py-3">
              Mobile
            </th>
            <th scope="col" className="px-3 py-3">
              Message
            </th>
            <th scope="col" className="px-3 py-3">
              Date
            </th>
          </tr>
        </thead>
        <tbody>
          {allContactDetails &&
            allContactDetails.map((user, index) => (
              <tr key={user._id} className="py-4 border-b border-gray-400 hover:bg-gray-50">
                <th className={`px-3 py-4 `}>
                  {getCorrectRowNumber(currentPage, pageSize, index)}
                </th>
                <td className="px-3 py-4 font-semibold">{user?.fullName}</td>
                <td className="px-3 py-4 font-semibold">{user?.email}</td>
                <td className="px-3 py-4">{user?.mobile}</td>
                <td className="px-3 py-4 max-w-[400px] min-w-[200px]">
                  {user?.message}
                </td>
                <td className="px-3 py-4">
                  {moment(user?.createdAt).format("MMM D YYYY, hh:mm A")}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContactsTable;
