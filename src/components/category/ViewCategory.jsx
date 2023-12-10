import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkStatus, statusCanBe } from "../../utils/helper";
import { updateOrderStatus } from "../../store/actions/ordersAction";
import { updateCategoryById } from "../../store/actions/categoryAction";

const ViewCategory = ({ cancelUpdate }) => {
  const dispatch = useDispatch();
  const { currentCategory } = useSelector((state) => state.category);

  const [formVal, setFormVal] = useState({
    category_name: "",
    category_photo: "",
  });

  const updateCategory = () => {
    dispatch(updateCategoryById(currentCategory?._id, formVal));
  };

  useEffect(() => {
    if (currentCategory?._id) {
      setFormVal({
        category_name: currentCategory.category_name,
        category_photo: currentCategory.category_photo,
      });
    }
  }, [currentCategory]);

  return (
    <>
      {currentCategory && currentCategory._id && (
        <div className="">
          <div className="grid grid-cols-2 gap-4 items-center">
            <div className="grid grid-cols-1 gap-4">
              <div className="">
                <label htmlFor="">Category</label>
                <div>
                  <input
                    type="text"
                    value={formVal?.category_name}
                    placeholder={currentCategory?.category_name}
                    className="border px-4 py-2 rounded-md w-full"
                    onChange={(e) =>
                      setFormVal({ ...formVal, category_name: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="">
                <label htmlFor="">Image</label>
                <div>
                  <input
                    type="text"
                    value={formVal.category_photo}
                    placeholder={currentCategory.category_photo}
                    className="border px-4 py-2 rounded-md w-full"
                    onChange={(e) =>
                      setFormVal({ ...formVal, category_photo: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
            <div>
              {currentCategory.category_photo && (
                <div>
                  <img
                    className="w-[100px] h-[100px] rounded-xl"
                    src={currentCategory.category_photo}
                    alt={currentCategory.category_name}
                  />
                </div>
              )}
            </div>
          </div>
          <div className="my-8 flex justify-start">
            <button
              onClick={cancelUpdate}
              className="bg-gray-200 hover:bg-gray-300 mx-2 px-4 py-2 rounded-md"
            >
              Cancel
            </button>
            <button
              onClick={updateCategory}
              className="bg-orange-400 hover:bg-orange-500 mx-2 px-4 py-2 rounded-md"
            >
              Update
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ViewCategory;
