import React, { useEffect, useState } from "react";
import TableWithHead from "../../components/table/TableWithHead";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../store/actions/categoryAction";
import { columns } from "../../components/category/categoryTableData";
import Dialog from "../../components/modal/Dialog";
import CreateCategoryForm from "../../components/category/CreateCategoryForm";

const Category = () => {
  const dispatch = useDispatch();
  const { allCategories } = useSelector((state) => state.category);

  const [showCreateBtn, setShowCreateBtn] = useState(false);

  const openNewCategoryForm = () => {
    setShowCreateBtn(true);
  };

  useEffect(() => {
    if (showCreateBtn) {
      const dialog = document.getElementById("dialog");

      if (dialog) {
        dialog.showModal();
      }
    }
  }, [showCreateBtn]);

  useEffect(() => {
    dispatch(getAllCategories());
  }, []);
  return (
    <div>
      <div className="flex justify-between items-center">
        <form className="my-2">
          <input
            className="border border-gray-300 px-2 py-2 outline-none rounded-tl-xl rounded-bl-xl"
            type="text"
            placeholder="Search Products..."
            // value={search}
            // onChange={(e) => setSearch(e.target.value)}
          />
          <button className="px-2 py-2 border text-gray-400 border-gray-300 hover:bg-gray-300 bg-gray-200 rounded-tr-xl rounded-br-xl">
            Search
          </button>
        </form>
        <div>
          <button
            onClick={openNewCategoryForm}
            className="bg-blue-500 hover:bg-blue-400 px-4 py-2 rounded-lg text-white"
          >
            Create New Category
          </button>
          {showCreateBtn && (
            <Dialog
              title={"Add Catetory"}
              afterCloseCallback={() => setShowCreateBtn(false)}
            >
              <CreateCategoryForm />
            </Dialog>
          )}
        </div>
      </div>
      <div>
        {allCategories && allCategories.length > 0 && (
          <TableWithHead rowData={allCategories} columns={columns} />
        )}
      </div>
    </div>
  );
};

export default Category;
