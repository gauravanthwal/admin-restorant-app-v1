import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAddVideoModal } from "../../store/actions/modalAction";
import { addNewVideo } from "../../store/actions/courseAction";

const AddVideoModal = () => {
  const dispatch = useDispatch();
  const { courseId } = useSelector((state) => state.modal);
  const { allCourses, courseVideos } = useSelector((state) => state.course);

  const [courseInfo, setCourseInfo] = useState({});
  const [videoInfo, setVideoInfo] = useState({});
  const [videoForm, setVideoForm] = useState({
    videoName: "",
    videoUrl: "",
    videoNumber: "",
  });

  const handleSaveVideo = () => {
    // save video here
    const createNewVideoPayload = {
      ...videoForm,
      courseId,
      courseName: courseInfo?.courseName,
    };
    dispatch(addNewVideo(createNewVideoPayload));
    closeModal();
  };

  const closeModal = () => {
    dispatch(setAddVideoModal({ courseId: "", addVideoModal: false }));
  };

  useEffect(() => {
    const courseDetails = allCourses?.filter((item) => item._id == courseId);
    const videoDetails = courseVideos?.filter(
      (item) => item.courseId == courseId
    );

    setVideoForm({ ...videoForm, videoNumber: videoDetails[0]?.data?.length + 1 });
    setVideoInfo(videoDetails[0]);
    setCourseInfo(courseDetails[0]);
  }, []);
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div class="fixed inset-0 bg-gray-800 opacity-50"></div>{" "}
      {/* Background blur overlay */}
      <div className="relative  rounded-lg shadow-xl z-100 p-4 md:min-w-[500px] md:max-w-[500px] bg-white border-2">
        <form className="border border-gray-100 bg-gray-50 my-2 p-2 rounded-md">
          <div className="mb-3">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Adding Video in {courseInfo?.courseName}
            </label>
            <input
              value={courseInfo?.courseName}
              type="text"
              className="bg-gray-50 border p-2 border-gray-300 text-gray-900 text-sm rounded-lg  block w-full"
              placeholder=""
              readOnly
              required
            />
          </div>
          <div className="mb-3">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Video Title
            </label>
            <input
              onChange={(e) =>
                setVideoForm({ ...videoForm, videoName: e.target.value })
              }
              value={videoForm.videoName}
              type="text"
              className="bg-gray-50 border p-2 border-gray-300 text-gray-900 text-sm rounded-lg  block w-full"
              placeholder="Video Title"
              required
            />
          </div>
          <div className="mb-3">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Video Order Number
            </label>
            <input
              type="number"
              value={videoForm.videoNumber}
              onChange={(e) =>
                setVideoForm({ ...videoForm, videoNumber: e.target.value })
              }
              className="bg-gray-50 border p-2 border-gray-300 text-gray-900 text-sm rounded-lg  block w-full"
              placeholder="Video Order Number"
              required
            />
          </div>
          <div className="mb-3">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Video Url
            </label>
            <textarea
              type="number"
              value={videoForm.videoUrl}
              onChange={(e) =>
                setVideoForm({ ...videoForm, videoUrl: e.target.value })
              }
              className="bg-gray-50 border p-2 border-gray-300 text-gray-900 text-sm rounded-lg  block w-full"
              placeholder="Video Embed url"
              rows={"5"}
              required
            />
          </div>
        </form>

        <div className="buttons my-2 flex justify-center">
          <button
            onClick={handleSaveVideo}
            className="bg-green-500 text-white px-4 py-2 rounded-md mx-2"
          >
            Save Video
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

export default AddVideoModal;
