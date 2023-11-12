import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createNewCourses } from "../../store/actions/courseAction";

const AddCourse = () => {
  const dispatch = useDispatch();
  const [addNewCourse, setAddNewCourse] = useState(false);
  const [courseForm, setCourseForm] = useState({
    courseName: "",
    price: "",
  });

  const handleAddNewCourse = (e) => {
    e.preventDefault();
    dispatch(createNewCourses(courseForm));
    setCourseForm(false);
    setAddNewCourse(false);
  };
  return (
    <div>
      {/* Create a new course */}
      {addNewCourse ? (
        <div>
          <form className="border border-gray-100 bg-gray-50 my-2 p-2 rounded-md">
            <div className="mb-3">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Course Name
              </label>
              <input
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
                onClick={handleAddNewCourse}
                className="bg-gradient-to-b from-green-300 to-green-400 px-4 py-2 rounded-lg hover:from-green-400 hover:to-green-500 text-black"
              >
                Add Course
              </button>
              <button
                role="button"
                onClick={() => setAddNewCourse(false)}
                className="bg-gray-200 hover:bg-gray-300 px-4 py-2 mx-2 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setAddNewCourse(true)}
          className="my-2 flex justify-center items-center gap-1 text-black font-semibold bg-gray-200 hover:bg-green-300 transition-all px-4 py-2 rounded-sm "
        >
          Launch New Course
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            className="h-5 w-5 font-bold"
          >
            <defs>
              <style />
            </defs>
            <path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" />
            <path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default AddCourse;
