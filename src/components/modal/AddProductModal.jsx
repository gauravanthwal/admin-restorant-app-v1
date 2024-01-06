import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAddProductModal } from "../../store/actions/modalAction";
import { addNewProducts } from "../../store/actions/productAction";
import { toast } from "react-toastify";

const AddProductModal = () => {
  const dispatch = useDispatch();

  const [productForm, setProductForm] = useState({
    pName: "",
    pPrice: "",
    pImage: "",
    pCategory: "",
  });
  const { pName, pImage, pPrice, pCategory } = productForm;

  const { allCategories } = useSelector((state) => state.category);

  const handleAddProduct = () => {
    if (pCategory == "0") {
      toast.warn("Select valid category!");
      return;
    }
    // add product here
    if (!pImage || !pName || !pPrice || !pCategory) {
      toast.warn("All fields are required!");
      return;
    }

    const productPayload = {
      product_name: pName,
      price: pPrice,
      product_photo: pImage,
      product_category: pCategory,
    };

    dispatch(addNewProducts(productPayload));
    closeModal();
  };

  const closeModal = () => {
    dispatch(setAddProductModal(false));
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div class="fixed inset-0 bg-gray-800 opacity-50"></div>{" "}
      {/* Background blur overlay */}
      <div className="relative  rounded-lg shadow-xl z-100 p-4 md:min-w-[500px] md:max-w-[500px] bg-white border-2">
        <h1 className="text-xl text-center text-gray-600 font-bold">
          Add new Product
        </h1>
        <form className="border border-gray-100 bg-gray-50 my-2 p-2 rounded-md">
          <div className="mb-3">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Product Name
            </label>
            <input
              value={pName}
              name="pName"
              type="text"
              className="bg-gray-50 border p-2 border-gray-300 text-gray-900 text-sm rounded-lg  block w-full"
              placeholder="Pruduct Name"
              onChange={(e) =>
                setProductForm({ ...productForm, pName: e.target.value })
              }
              required
            />
          </div>
          <div className="mb-3">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Price
            </label>
            <input
              type="text"
              value={pPrice}
              name="pPrice"
              onChange={(e) =>
                setProductForm({ ...productForm, pPrice: e.target.value })
              }
              className="bg-gray-50 border p-2 border-gray-300 text-gray-900 text-sm rounded-lg  block w-full"
              placeholder="Price ($)"
              required
            />
          </div>
          <div className="mb-3">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Category
            </label>
            {allCategories && allCategories.length > 0 && (
              <select
                name="cat"
                id="cat"
                className="p-2 border rounded-lg"
                onChange={(e) =>
                  setProductForm({ ...productForm, pCategory: e.target.value })
                }
              >
                <option value="0">Select category</option>
                {allCategories.map((cat, i) => (
                  <option className="" key={cat._id} value={cat._id}>
                    {i + 1}. {cat.category_name}
                  </option>
                ))}
              </select>
            )}
          </div>
          <div className="mb-3">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Product Image
            </label>
            <input
              type="text"
              value={pImage}
              name="pImage"
              onChange={(e) =>
                setProductForm({ ...productForm, pImage: e.target.value })
              }
              className="bg-gray-50 border p-2 border-gray-300 text-gray-900 text-sm rounded-lg  block w-full"
              placeholder="Image url"
              required
            />
          </div>
        </form>

        <div className="buttons my-2 flex justify-center">
          <button
            onClick={handleAddProduct}
            className="bg-emerald-500 hover:bg-emerald-400 text-white px-4 py-2 rounded-md mx-2"
          >
            Add Product
          </button>
          <button
            onClick={closeModal}
            className="bg-gray-200 px-4 py-2 rounded-md mx-2"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProductModal;
