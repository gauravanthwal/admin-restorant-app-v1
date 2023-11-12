import React from "react";
import moment from "moment/moment";

function PaymentTable({ allPaymentDetails, pageSize, currentPage }) {
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
              Amount
            </th>
            <th scope="col" className="px-3 py-3">
              Course
            </th>
            <th scope="col" className="px-3 py-3">
              Status
            </th>
            <th scope="col" className="px-3 py-3">
              Date
            </th>
          </tr>
        </thead>
        <tbody>
          {allPaymentDetails &&
            allPaymentDetails.map((payment, index) => (
              <tr
                key={payment._id}
                className="py-4 border-b border-gray-400 hover:bg-gray-50"
              >
                <th className={`px-3 py-4 `}>
                  {getCorrectRowNumber(currentPage, pageSize, index)}
                </th>
                <td className="px-3 py-4 font-semibold">{payment?.fullName}</td>
                <td className="px-3 py-4 font-semibold">{payment?.email}</td>
                <td className="px-3 py-4">{payment?.mobile}</td>
                <td className="px-3 py-4 max-w-[400px] min-w-[200px]">
                  {payment?.price}
                </td>
                <td className="px-3 py-4 max-w-[400px] min-w-[200px]">
                  {payment?.courseName}
                </td>
                <td className="px-3 py-4 max-w-[400px] min-w-[200px]">
                  {payment?.payment_status}
                </td>
                <td className="px-3 py-4">
                  {moment(payment?.createdAt).format("MMM D, YYYY")}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default PaymentTable;
