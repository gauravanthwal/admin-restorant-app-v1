import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProductById } from "../../store/actions/productAction";
import { toast } from "react-toastify";

const ViewProduct = ({ cancelUpdate }) => {
  const dispatch = useDispatch();
  const { currentProduct } = useSelector((state) => state.product);
  const { allCategories } = useSelector((state) => state.category);

  const [productForm, setProductForm] = useState({
    product_name: currentProduct?.product_name,
    price: currentProduct?.price,
    product_photo: currentProduct?.product_photo,
    product_category: "NA",
  });

  // Update product details
  const updateProduct = () => {
    if (productForm.product_category == "0") {
      toast.warn("Select valid category");
      return;
    }
    if (!productForm.product_name || !productForm.price) {
      toast.warn("All fields are required!");
      return;
    }
    dispatch(updateProductById(currentProduct?._id, productForm));
    // CLOSE MODAL
    cancelUpdate();
  };

  useEffect(() => {
    if (currentProduct._id) {
      setProductForm({
        product_name: currentProduct?.product_name,
        price: currentProduct?.price,
        product_photo: currentProduct?.product_photo,
      });
    }
  }, [currentProduct]);

  return (
    <>
      {currentProduct && currentProduct._id && (
        <div>
          <div className="grid grid-cols-2 gap-4">
            <div className="product">
              <label className="text-gray-500" htmlFor="">
                Product
              </label>
              <div>
                <input
                  className="border p-2 rounded-md w-full"
                  type="text"
                  placeholder={currentProduct?.product_name}
                  value={productForm.product_name}
                  onChange={(e) =>
                    setProductForm({
                      ...productForm,
                      product_name: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="product">
              <label className="text-gray-500" htmlFor="">
                Price ($)
              </label>
              <div>
                <input
                  className="border p-2 rounded-md w-full"
                  type="text"
                  placeholder={currentProduct?.price}
                  value={productForm.price}
                  onChange={(e) =>
                    setProductForm({ ...productForm, price: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="product">
              <label className="text-gray-500" htmlFor="">
                Update Photo
              </label>
              <div>
                <input
                  className="border p-2 rounded-md"
                  type="file"
                  onChange={(e) =>
                    setProductForm({
                      ...productForm,
                      product_photo: e.target.value,
                    })
                  }
                />
              </div>
              <div className=" my-2 text-center">
                <span>Or paste url </span>
              </div>
              <div>
                <input
                  className="border p-2 rounded-md w-full border-blue-300"
                  type="text"
                  value={productForm.product_photo}
                  onChange={(e) =>
                    setProductForm({
                      ...productForm,
                      product_photo: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="product">
              <label className="text-gray-500" htmlFor="">
                Product Category
              </label>
              <div className="flex-col w-full items-center gap-4 bg-gray-100 rounded-lg p-1">
                <div>
                  <div className="flex items-center gap-2 my-2 bg-gray-200 p-1 rounded-lg">
                    {currentProduct?.product_category?.category_photo && (
                      <img
                        src={currentProduct.product_category.category_photo}
                        alt={currentProduct.product_category.category_name}
                        className="w-[50px] h-[50px] rounded-full border-4"
                      />
                    )}
                    {currentProduct.product_category && (
                      <p className="font-bold">
                        {currentProduct.product_category.category_name}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  {allCategories && allCategories.length > 0 && (
                    <select
                      name="cat"
                      id="cat"
                      className="p-2 border rounded-lg"
                      onChange={(e) =>
                        setProductForm({
                          ...productForm,
                          product_category: e.target.value,
                        })
                      }
                    >
                      <option value="0">Select category</option>
                      {allCategories.map((cat, i) => (
                        <option key={cat._id} value={cat._id}>
                          {i + 1}. {cat.category_name}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
              </div>
            </div>
            <div className="product mx-auto">
              {currentProduct?.product_photo && (
                <img
                  src={currentProduct?.product_photo}
                  alt={currentProduct.product_name}
                  className="w-[100px] h-[100px] rounded-xl"
                />
              )}
            </div>
          </div>

          <div className="my-4 flex justify-end">
            <div>
              <div className="cancel inline-block mx-2">
                <button
                  onClick={cancelUpdate}
                  className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300"
                >
                  Cancel
                </button>
              </div>
              <div className="save inline-block mx-2">
                <button
                  onClick={updateProduct}
                  className="px-4 py-2 rounded-md bg-orange-400 hover:bg-orange-300"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ViewProduct;
