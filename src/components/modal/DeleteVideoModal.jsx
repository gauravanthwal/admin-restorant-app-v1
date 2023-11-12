import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDeleteVideoModal } from "../../store/actions/modalAction";
import { deleteVideo } from "../../store/actions/courseAction";

const DeleteVideoModal = () => {
  const dispatch = useDispatch();
  const { videoId, courseId } = useSelector((state) => state.modal);

  const handleDeleteVideo = () => {
    // delete video here
    dispatch(deleteVideo(videoId, courseId));
    closeModal();
  };

  const closeModal = () => {
    dispatch(
      setDeleteVideoModal({ askDeleteVideo: false, videoId: "", courseId: "" })
    );
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        class="fixed inset-0 bg-gray-800 opacity-50"
        onClick={closeModal}
      ></div>{" "}
      {/* Background blur overlay */}
      <div className="relative  rounded-lg shadow-xl z-100 p-4 md:min-w-[500px] md:max-w-[500px] bg-white border-2">
        <p className="text-center">
          Are you sure you want to delete This Video permanently.
        </p>
        <div className="buttons my-2 flex justify-center">
          <button
            onClick={handleDeleteVideo}
            className="bg-rose-500 text-white px-4 py-2 rounded-md mx-2"
          >
            Yes Delete
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

export default DeleteVideoModal;
