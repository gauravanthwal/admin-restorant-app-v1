import React from "react";
import moment from "moment/moment";

const noImage =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnz0FiS_eO7fUkPgnHz-p7gC2SUQ1A2r6kyw&usqp=CAU";

function ProductTable({ allProducts, pageSize, currentPage }) {
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
              Product Id
            </th>
            <th scope="col" className="px-3 py-3">
              Name
            </th>
            <th scope="col" className="px-3 py-3">
              Price
            </th>
            <th scope="col" className="px-3 py-3">
              Category
            </th>
            <th scope="col" className="px-3 py-3">
              Photo
            </th>
          </tr>
        </thead>
        <tbody>
          {allProducts &&
            allProducts.map((product, index) => (
              <tr
                key={product.product_id}
                className="py-4 border-b border-gray-400 hover:bg-gray-50"
              >
                <th className={`px-3 py-4 `}>
                  {getCorrectRowNumber(currentPage, pageSize, index)}
                </th>
                <td className="px-3 py-4 font-semibold">
                  {product?.product_id}
                </td>
                <td className="px-3 py-4 font-semibold">
                  {product?.product_name}
                </td>
                <td className="px-3 py-4 max-w-[400px] min-w-[200px]">
                  {product?.product_price}
                </td>
                <td className="px-3 py-4">{product?.product_category}</td>
                <td className="px-3 py-4">
                  <img
                    src={`${
                      product?.product_image ? product?.product_image : noImage
                    }`}
                    alt="image product"
                    className="h-20 w-20"
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
