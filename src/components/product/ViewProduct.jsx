import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProductById } from "../../store/actions/productAction";

const ViewProduct = ({ cancelUpdate }) => {
  const dispatch = useDispatch();
  const { currentProduct } = useSelector((state) => state.product);

  const [productForm, setProductForm] = useState({
    product_name: currentProduct?.product_name,
    price: currentProduct?.price,
    product_photo: currentProduct?.product_photo,
  });

  const updateProduct = () => {
    if(!productForm.product_name || !productForm.price){
        return
    }
    dispatch(updateProductById(currentProduct?._id, productForm));
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
