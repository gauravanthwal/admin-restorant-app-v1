import React from "react";
import AddCourse from "./AddCourse";
import { useDispatch, useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { BsCurrencyRupee, BsPencilSquare } from "react-icons/bs";
import { setDeleteCourseModal } from "../../store/actions/modalAction";
import ConfirmDeleteCourseModal from "../modal/ConfirmDeleteCourseModal";
import UpdateCourse from "./UpdateCourse";
import { useState } from "react";

const AllCourses = () => {
  const dispatch = useDispatch();
  const { allCourses, loading } = useSelector((state) => state.course);
  const { askDeleteCourse } = useSelector((state) => state.modal);

  const [isUpdaetingCourse, setIsUpdatingCourse] = useState(false);
  const [courseToUpdate, setCourseToUpdate] = useState({});

  const handleDeleteCourse = (courseId) => {
    dispatch(setDeleteCourseModal({ courseId, askDeleteCourse: true }));
  };
  const handleUpdateCourse = (course) => {
    // do update here
    setCourseToUpdate(course);
    setIsUpdatingCourse(course);
  };
  return (
    <div className="w-full md:w-auto">
      <h1 className="">Your Courses</h1>
      {askDeleteCourse && <ConfirmDeleteCourseModal />}
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <>
          <ul className="min-w-[300px] flex flex-col">
            {allCourses &&
              allCourses?.map((course) => (
                <li
                  key={course._id}
                  className="flex justify-between items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg"
                >
                  <div>
                    <p>{course.courseName}</p>{" "}
                    <p className="flex items-center text-gray-500">
                      {" "}
                      <span>
                        <BsCurrencyRupee />
                      </span>
                      : {course.price}
                    </p>
                  </div>
                  <div>
                    <button
                      className="cursor-pointer hover:text-blue-700 bg-gray-50 p-2 mx-1"
                      onClick={() => handleUpdateCourse(course)}
                    >
                      <BsPencilSquare />
                    </button>
                    <button
                      className="cursor-pointer hover:text-rose-500 bg-gray-50 p-2"
                      onClick={() => handleDeleteCourse(course._id)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </li>
              ))}
          </ul>

          {isUpdaetingCourse ? (
            <UpdateCourse
              isUpdaetingCourse={isUpdaetingCourse}
              setIsUpdatingCourse={setIsUpdatingCourse}
              courseToUpdate={courseToUpdate}
            />
          ) : (
            <AddCourse />
          )}
        </>
      )}
    </div>
  );
};

export default AllCourses;
