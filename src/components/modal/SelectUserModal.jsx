import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectUserModal } from "../../store/actions/modalAction";
import { toast } from "react-toastify";
import {
  enrollUserInCourse,
  unEnrollUserInCourse,
} from "../../store/actions/userAction";

const SelectUserModal = () => {
  const dispatch = useDispatch();
  const { allCourses } = useSelector((state) => state.course);
  const { selectedUser } = useSelector((state) => state.user);

  const [selectedCourse, setSelectedCourse] = useState("null");

  const handleSelectCourseChange = (e) => {
    setSelectedCourse(e.target.value);
  };

  const closeModal = () => {
    dispatch(setSelectUserModal(false));
  };

  const handleEnrollUser = () => {
    if (selectedCourse == "null") {
      toast.warn("Please select correct course");
      return;
    }
    let value = confirm("Are you Sure you want to enroll this user");
    if (value) {
      dispatch(
        enrollUserInCourse({
          userId: selectedUser?._id,
          courseId: selectedCourse,
        })
      );
    }
  };

  const handleUnEnrollUser = (courseId) => {
    let value = confirm(
      "Are you Sure you want to remove this user from this course"
    );
    if (value) {
      dispatch(
        unEnrollUserInCourse({
          userId: selectedUser?._id,
          courseId,
        })
      );
    }
  };

  const isUserAlreadyEnrolled = (courses, id) => {
    if (courses.length > 0) {
      const res = courses.findIndex((course) => course.courseId == id);
      if (res == -1) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div class="fixed inset-0 bg-gray-800 opacity-50"></div>{" "}
      {/* Background blur overlay */}
      <div className="relative  rounded-lg shadow-xl z-100 p-8 md:min-w-[600px] md:max-w-[500px] bg-white border-2">
        <CloseCrossButton closeModal={closeModal} />

        <h2 class="text-lg font-semibold mb-2 text-gray-600">Users Details</h2>
        <div>
          <div className="grid md:grid-cols-2 grid-cols-1">
            <div className="border px-4 py-2">
              <p>Name: {selectedUser?.fullName}</p>
            </div>
            <div className="border px-4 py-2">
              <p>Mobile: {selectedUser?.mobile}</p>
            </div>
          </div>
          <div className="grid grid-cols-1">
            <div className="border px-4 py-2">
              <p>Email: {selectedUser?.email}</p>
            </div>
          </div>
        </div>

        <h2 class="text-lg font-semibold my-2 text-gray-600">Course Details</h2>
        {selectedUser?.courseAccess.length > 0 ? (
          <div className="my-4">
            <p>Enrolled</p>
            <div className="grid grid-cols-1">
              {selectedUser?.courseAccess.map((course, index) => (
                <div className="border px-4 py-2 flex justify-between">
                  <p className="text-black">
                    {index + 1}. {course.courseName}
                  </p>
                  <button
                    onClick={() => handleUnEnrollUser(course?.courseId)}
                    className="bg-rose-500 px-2 py-1 rounded-sm text-white hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="my-4">
            <div className="grid grid-cols-1">
              <div className="border px-4 py-2">
                <p className="text-gray-400">
                  {selectedUser?.fullName}, does not have any course
                </p>
              </div>
            </div>
          </div>
        )}
        <div>
          <div className="flex border flex-col py-2">
            <div className="px-4 pb-2">
              <p>Enroll user in a course</p>
            </div>
            <div className="px-4">
              <select
                name="course"
                id="course"
                className="border border-gray-700 py-2 max-w-[300px] outline-none"
                onChange={handleSelectCourseChange}
                value={selectedCourse}
              >
                <option value="null">Select course</option>
                {allCourses &&
                  allCourses.map((item, idx) => (
                    <option
                      key={item._id}
                      value={item?._id}
                      disabled={isUserAlreadyEnrolled(
                        selectedUser.courseAccess,
                        item?._id
                      )}
                    >
                      {idx + 1}. {item?.courseName}
                    </option>
                  ))}
              </select>
              <button
                onClick={handleEnrollUser}
                className="hover:bg-emerald-600 rounded-tr-sm rounded-br-sm px-4 py-2 text-white font-semibold bg-emerald-500"
              >
                Enroll
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CloseCrossButton = ({ closeModal }) => {
  return (
    <button
      onClick={closeModal}
      id="closeModal"
      class="close-button text-gray-500 hover:text-gray-700 bg-gray-100 p-2"
    >
      <svg
        class="h-5 w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        ></path>
      </svg>
    </button>
  );
};

export default SelectUserModal;
