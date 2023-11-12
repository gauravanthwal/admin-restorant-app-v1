import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  createNewCourses,
  updateCourses,
} from "../../store/actions/courseAction";
import { toast } from "react-toastify";
import { useEffect } from "react";

const UpdateCourse = ({
  isUpdaetingCourse,
  setIsUpdatingCourse,
  courseToUpdate,
}) => {
  const dispatch = useDispatch();
  const [courseForm, setCourseForm] = useState({
    courseName: courseToUpdate?.courseName || "",
    price: courseToUpdate?.price || "",
  });

  const handleUpdateCourse = (e) => {
    e.preventDefault();
    if (!courseForm.courseName || !courseForm.price) {
      toast.warn("Please provide all details");
      return;
    }
    const payload = {
      courseName: courseForm?.courseName,
      price: courseForm?.price,
    };
    dispatch(updateCourses(courseToUpdate._id, payload));
    // close form TODO
    setIsUpdatingCourse(false);
    setCourseForm({ courseName: "", price: "" });
  };

  return (
    <div>
      <div>
        <form className="border border-gray-100 bg-gray-50 my-2 p-2 rounded-md">
          <div className="mb-3">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Course Name
            </label>
            <input
              value={courseForm?.courseName}
              onChange={(e) =>
                setCourseForm({ ...courseForm, courseName: e.target.value })
              }
              type="text"
              className="bg-gray-50 border p-2 border-gray-300 text-gray-900 text-sm rounded-lg  block w-full"
              placeholder="Course Name"
              required
            />
          </div>
          <div className="mb-3">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Course Price
            </label>
            <input
              type="number"
              value={courseForm?.price}
              onChange={(e) =>
                setCourseForm({ ...courseForm, price: e.target.value })
              }
              className="bg-gray-50 border p-2 border-gray-300 text-gray-900 text-sm rounded-lg  block w-full"
              placeholder="Course Name"
              required
            />
          </div>
          <div className="my-3">
            <button
              onClick={handleUpdateCourse}
              className="bg-gradient-to-b from-blue-400 to-blue-600 px-4 py-2 rounded-lg hover:from-blue-500 hover:to-blue-600 text-white"
            >
              Update Course
            </button>
            <button
              role="button"
              onClick={() => setIsUpdatingCourse(false)}
              className="bg-gray-200 hover:bg-gray-300 px-4 py-2 mx-2 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCourse;
