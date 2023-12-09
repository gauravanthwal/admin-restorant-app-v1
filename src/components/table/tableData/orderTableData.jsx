import { createColumnHelper } from "@tanstack/react-table";

import { CheckIcon, WrongIcon } from "../../../assets/icons/icons";
import ViewButton from "../ViewButton";
import { checkStatus } from "../../../utils/helper";
import moment from "moment";

const defaultImage =
  "https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small/beautiful-latin-woman-avatar-character-icon-free-vector.jpg";

const columnHelper = createColumnHelper();

export const columns = [
  columnHelper.accessor("_id", {
    header: () => "Order Id",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("product.product_photo", {
    header: () => <span>Image</span>,
    cell: (tableProps) => (
      <div>
        <img
          src={tableProps?.row?.original?.product.product_photo || defaultImage}
          className="w-[50px] h-[50px] rounded-full"
        />
      </div>
    ),
  }),
  columnHelper.accessor((row) => row.product.product_name, {
    id: "product.product_name",
    cell: (info) => <span>{info.getValue()}</span>,
    header: () => <span>Product</span>,
  }),
  columnHelper.accessor("quantity", {
    header: () => "Qty",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("product.price", {
    header: () => "Price",
    cell: (info) => `$${info.getValue().toFixed(2)}`,
  }),
  columnHelper.accessor(
    (row) => `${row.user.first_name} ${row.user.last_name}`,
    {
      id: "user._id",
      header: () => "User",
      cell: (info) => <Pop text={info.getValue()} />,
    }
  ),
  columnHelper.accessor("user.email", {
    header: () => "Email",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("createdAt", {
    header: () => "Date",
    cell: (info) => (
      <span>{moment(info.getValue()).format("MMMM Do YYYY, h:mm a")}</span>
    ),
  }),
  columnHelper.accessor("order_status", {
    header: () => "Status",
    cell: (info) => (
      <span
        className={`px-1 py-[2px] font-semibold text-sm rounded-md text-white block`}
        style={{ background: checkStatus(info.getValue()) }}
      >
        {info.getValue()}
      </span>
    ),
  }),
  columnHelper.display({
    id: "action",
    header: "Action",
    cell: (props) => <ViewButton orderId={props?.row?.original?._id} />,
  }),
];

const Pop = ({ text }) => {
  return (
    <div>
      <button onMouseOver={() => {}}>{text}</button>
    </div>
  );
};
