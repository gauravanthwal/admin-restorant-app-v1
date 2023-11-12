import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { getCourseVideos } from "../../store/actions/courseAction";
import {
  setAddVideoModal,
  setDeleteVideoModal,
} from "../../store/actions/modalAction";
import AddVideoModal from "../modal/AddVideoModal";
import DeleteVideoModal from "../modal/DeleteVideoModal";

const AddVideo = () => {
  const { allCourses, loading } = useSelector((state) => state.course);
  const { addVideoModal, askDeleteVideo } = useSelector((state) => state.modal);

  return (
    <div className="w-full ">
      {addVideoModal && <AddVideoModal />}
      {askDeleteVideo && <DeleteVideoModal />}
      <div className="courses ">
        <div className="max-w-[500px] mx-auto flex flex-col">
          <h1>Manage Videos</h1>
          {allCourses.map((course) => (
            <Course course={course} key={course._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Course = ({ course }) => {
  const dispatch = useDispatch();
  const { courseVideos } = useSelector((state) => state.course);

  const [couseListItems, setCourseListItems] = useState([]);
  const [isDropdownOpen, setIsDropdrownOpen] = useState(false);

  const handleshowVideos = () => {
    setIsDropdrownOpen(!isDropdownOpen);
    const courseList = courseVideos.find((item) => item.courseId == course._id);
    setCourseListItems(courseList.data);
  };

  const addVideo = () => {
    dispatch(setAddVideoModal({ addVideoModal: true, courseId: course._id }));
  };

  useEffect(() => {
    dispatch(getCourseVideos(course._id));
  }, []);
  return (
    <div
      key={course._id}
      className="flex flex-col gap-x-2 py-3 px-4 my-2 text-sm font-medium bg-gray-100 border text-gray-800 "
    >
      <div className="flex justify-between my-2">
        <span onClick={handleshowVideos} className="flex-1 cursor-pointer">
          {course.courseName}
        </span>{" "}
        {isDropdownOpen && (
          <button
            onClick={addVideo}
            className="bg-gradient-to-b  from-green-300 to-green-500 px-2 py-1 hover:from-green-400 hover:to-green-500 rounded-sm"
          >
            Add Video
          </button>
        )}
      </div>

      {isDropdownOpen && (
        <>
          {couseListItems.length > 0 ? (
            couseListItems.map((item) => (
              <CourseListItem
                key={item._id}
                item={item}
                courseId={course._id}
                isDropdownOpen={isDropdownOpen}
                setIsDropdrownOpen={setIsDropdrownOpen}
              />
            ))
          ) : (
            <div className="my-2 text-gray-400">
              You dont have any video in this course.
            </div>
          )}
        </>
      )}
    </div>
  );
};

const CourseListItem = ({
  item,
  courseId,
  isDropdownOpen,
  setIsDropdrownOpen,
}) => {
  const dispatch = useDispatch();

  const handleDeleteVideo = (videoId) => {
    setIsDropdrownOpen(!isDropdownOpen);
    dispatch(setDeleteVideoModal({ askDeleteVideo: true, videoId, courseId }));
  };
  return (
    <div key={item._id} className="border w-full p-2">
      <div className="flex justify-between">
        <p>
          {item.videoNumber}. {item.videoName}
        </p>
        <div>
          <button
            className="bg-gray-200 p-2"
            onClick={() => handleDeleteVideo(item._id)}
          >
            <FaTrash className="hover:text-rose-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddVideo;
