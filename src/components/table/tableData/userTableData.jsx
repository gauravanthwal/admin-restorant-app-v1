import {
  createColumnHelper
} from "@tanstack/react-table";

import { CheckIcon, WrongIcon } from "../../../assets/icons/icons";

const defaultImage =
  "https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small/beautiful-latin-woman-avatar-character-icon-free-vector.jpg";

const columnHelper = createColumnHelper();

export const columns = [
  //   columnHelper.accessor("first_name", {
  //     cell: (info) => info.getValue(),
  //     header: () => "First Name",
  //   }),
  columnHelper.accessor((row) => `${row.first_name} ${row.last_name}`, {
    id: "last_name",
    cell: (info) => <span>{info.getValue()}</span>,
    header: () => <span>Name</span>,
  }),
  columnHelper.accessor("email", {
    header: () => "Email",
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor("phone", {
    header: () => <span>Phone</span>,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("profile_photo", {
    header: () => <span>Photo</span>,
    cell: (tableProps) => (
      <div>
        <img
          src={tableProps?.row?.original?.profile_photo || defaultImage}
          className="w-[50px] h-[50px] rounded-full"
        />
      </div>
    ),
  }),
  columnHelper.accessor("is_account_verified", {
    header: () => <span>Verified</span>,
    cell: (info) => (
      <span className="">
        {info.row.original.is_account_verified ? <CheckIcon /> : <WrongIcon />}
      </span>
    ),
  }),
];
