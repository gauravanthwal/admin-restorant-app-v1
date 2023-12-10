import { createColumnHelper } from "@tanstack/react-table";
import moment from "moment";
import ViewCategoryButton from "./ViewCategoryButton";
import DeleteCategoryButton from "./DeleteProductButton";

const defaultImage =
  "https://www.yiwubazaar.com/resources/assets/images/default-product.jpg";
const columnHelper = createColumnHelper();

export const columns = [
  columnHelper.accessor("_id", {
    header: () => "Category Id",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("category_phto", {
    header: () => <span>Image</span>,
    cell: (tableProps) => (
      <div>
        <img
          src={tableProps?.row?.original?.category_photo || defaultImage}
          className="w-[50px] h-[50px] rounded-full"
        />
      </div>
    ),
  }),
  columnHelper.accessor((row) => row?.category_name, {
    id: "category_name",
    header: () => <span>Category</span>,
    cell: (info) => (
      <span>{info.renderValue() ? info.renderValue() : "NA"}</span>
    ),
  }),

    columnHelper.display({
      id: "action",
      header: "Action",
      cell: (props) => <ViewCategoryButton categoryId={props?.row?.original?._id} />,
    }),

    columnHelper.display({
      id: "action-delete",
      cell: (props) => <DeleteCategoryButton categoryId={props?.row?.original?._id} />,
    }),
];

const Pop = ({ text }) => {
  return (
    <div>
      <button onMouseOver={() => {}}>{text}</button>
    </div>
  );
};
