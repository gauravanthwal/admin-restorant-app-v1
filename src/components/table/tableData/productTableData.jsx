import {
    createColumnHelper
  } from "@tanstack/react-table";
  
  import { CheckIcon, WrongIcon } from "../../../assets/icons/icons";
  
  const defaultImage =
    "https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small/beautiful-latin-woman-avatar-character-icon-free-vector.jpg";
  
  const columnHelper = createColumnHelper();
  
  export const columns = [
    columnHelper.accessor((row) => row.product_name , {
      id: "product_name",
      cell: (info) => <span>{info.getValue()}</span>,
      header: () => <span>Product</span>,
    }),
    columnHelper.accessor("price", {
      header: () => "Price",
      cell: (info) => `$${info.renderValue().toFixed(2)}`,
    }),
    columnHelper.accessor("product_photo", {
      header: () => <span>Image</span>,
      cell: (tableProps) => (
        <div>
          <img
            src={tableProps?.row?.original?.product_photo || defaultImage}
            className="w-[50px] h-[50px] rounded-full"
          />
        </div>
      ),
    }),
  ];
  