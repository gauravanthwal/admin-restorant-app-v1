import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    createAdminModal,
} from "../../store/actions/modalAction";
import { makeAdmin } from "../../store/actions/userAction";

const CreateAdmin = () => {
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.modal);

  const handleMakeAdmin = () => {
    // delete video here
    dispatch(makeAdmin({userId, admin: true}));
    closeModal();
  };

  const closeModal = () => {
    dispatch(createAdminModal({ createAdmin: false, userId: ''}));
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
       <div class="fixed inset-0 bg-gray-800 opacity-50" onClick={closeModal}></div>{" "}
      {/* Background blur overlay */}
      <div className="relative  rounded-lg shadow-xl z-100 p-4 md:min-w-[500px] md:max-w-[500px] bg-white border-2">
        <p className="text-center">
          Are you sure you want to Make this user Admin
        </p>
        <div className="buttons my-2 flex justify-center">
          <button
            onClick={handleMakeAdmin}
            className="bg-green-500 text-white px-4 py-2 rounded-md mx-2"
          >
            Yes Make it Admin
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

export default CreateAdmin;
