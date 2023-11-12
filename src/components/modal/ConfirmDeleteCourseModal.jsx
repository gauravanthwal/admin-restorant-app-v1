import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDeleteCourseModal } from "../../store/actions/modalAction";
import { deleteCourseVideos } from "../../store/actions/courseAction";

const ConfirmDeleteCourseModal = () => {
  const dispatch = useDispatch();
  const { courseId } = useSelector((state) => state.modal);

  const handleDeleteCourse = () => {
    // delete video here
    dispatch(deleteCourseVideos(courseId));
    closeModal();
  };

  const closeModal = () => {
    dispatch(setDeleteCourseModal({ courseId: "", askDeleteCourse: false }));
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div class="fixed inset-0 bg-gray-800 opacity-50" onClick={closeModal}></div>
      {/* Background blur overlay */}
      <div className="relative  rounded-lg shadow-xl z-100 p-4 md:min-w-[500px] md:max-w-[500px] bg-white border-2">
        <p className="text-center">Are you sure you want to delete Course</p>
        <div className="buttons my-2 flex justify-center">
          <button
            onClick={handleDeleteCourse}
            className="bg-rose-500 text-white px-4 py-2 rounded-md mx-2"
          >
            Delete
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

export default ConfirmDeleteCourseModal;
