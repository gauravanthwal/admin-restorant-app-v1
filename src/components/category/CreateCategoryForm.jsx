import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createNewCategories } from "../../store/actions/categoryAction";

const CreateCategoryForm = () => {
  const dispatch = useDispatch();
  const [formVal, setFormVal] = useState({
    category_name: "",
    category_photo: "",
  });
  const { category_name, category_photo } = formVal;

  const saveCategory = () => {
    dispatch(createNewCategories(formVal));
  };

  return (
    <div className="flex justify-center">
      <div>
        <div className="w-full">
          <label htmlFor="" className="text-gray-700">
            Category
          </label>
          <div className="w-full">
            <input
              type="text"
              value={category_name}
              placeholder="eg. pizzas"
              onChange={(e) =>
                setFormVal({ ...formVal, category_name: e.target.value })
              }
              className="border px-4 py-2 rounded-md w-full"
            />
          </div>
        </div>
        <div className="my-4 w-full">
          <div>
            <label htmlFor="" className="text-gray-700">
              Category photo
            </label>
            <div className="">
              <input
                type="file"
                placeholder=""
                // onChange={(e) =>
                // //   setFormVal({ ...formVal, category_photo: e.target.value })
                // }
                className="border px-4 py-2 rounded-md w-full"
              />
            </div>
          </div>
          <div className="text-gray-500 text-center">
            <span>Or past image url</span>
          </div>
          <div>
            <div className="">
              <input
                type="text"
                value={category_photo}
                placeholder="Img url"
                onChange={(e) =>
                  setFormVal({ ...formVal, category_photo: e.target.value })
                }
                className="border px-4 py-2 rounded-md w-full"
              />
            </div>
          </div>
        </div>
        <div className="btn flex justify-end">
          <button
            onClick={saveCategory}
            className="px-8 py-2 rounded-md bg-green-500 hover:bg-green-400"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateCategoryForm;
