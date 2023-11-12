import axios from "axios";
import { BASE_URL } from "../../utils/constant";
import { Types } from "../Types";
import { getStorage } from "../../utils/storage";
import { toast } from "react-toastify";
// import { getHeaders } from "../../utils/getHeaders";

export const getHeaders = () => {
  const headers = {
    headers: {
      Authorization: `Bearer ${getStorage("user")?.token}`,
      "Content-Type": "application/json",
    },
  };

  return headers;
};

// CREATE NEW COURSE
export const createNewCourses = (courseDetails) => async (dispatch) => {
  try {
    setLoading();
    const res = await axios.post(
      BASE_URL + "/course/create",
      {
        ...courseDetails,
      },
      getHeaders()
    );
    if (res.status == 201) {
      toast.success("New course created");
      remvoeLoading();
      dispatch({
        type: Types.course.ADD_NEW_COURSE,
        payload: res?.data?.newCourse,
      });
    }
    remvoeLoading();
  } catch (err) {
    remvoeLoading();
  }
};

// CREATE NEW COURSE
export const updateCourses = (courseId, params) => async (dispatch) => {
  try {
    setLoading();
    const res = await axios.put(
      BASE_URL + `/course/updateCourseDetails/${courseId}`,
      params,
      getHeaders()
    );
    if (res.status == 200) {
      toast.success("Course updated");
      remvoeLoading();
      dispatch(getAllCourses());
      // dispatch({
      //   type: Types.course.COURSE_UPDATE,
      //   payload: res?.data?.updatedCourse
      // });
    }
    remvoeLoading();
  } catch (err) {
    remvoeLoading();
  }
};

// GET ALL COURSES
export const getAllCourses = () => async (dispatch) => {
  try {
    setLoading();
    const res = await axios.get(BASE_URL + "/course/allCourses");
    if (res.status == 200) {
      remvoeLoading();
      dispatch({
        type: Types.course.GET_ALL_COURSE,
        payload: res.data,
      });
    }
    remvoeLoading();
  } catch (err) {
    remvoeLoading();
  }
};

// GET COURSE RELATED VIDEOS
export const getCourseVideos = (courseId) => async (dispatch) => {
  try {
    setLoading();
    const res = await axios.get(
      BASE_URL + `/course/getCourseVideos/${courseId}`
    );
    if (res.status == 200) {
      remvoeLoading();
      dispatch({
        type: Types.course.GET_COURSE_VIDEOS,
        payload: res.data,
      });
    }
    remvoeLoading();
  } catch (err) {
    remvoeLoading();
  }
};

// DELETE COURSE + COURSE VIDEOS
export const deleteCourseVideos = (courseId) => async (dispatch) => {
  try {
    setLoading();
    const res = await axios.delete(
      BASE_URL + `/course/deleteCourse/${courseId}`,
      getHeaders()
    );
    if (res.status == 200) {
      toast.warning("Course deleted.");
      remvoeLoading();
      dispatch({
        type: Types.course.DELETE_COURSE,
        payload: courseId,
      });
    }
    remvoeLoading();
  } catch (err) {
    remvoeLoading();
  }
};

// CREATE NEW VIDEO
export const addNewVideo = (videoDetails) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const res = await axios.post(
      BASE_URL + `/video/create`,
      videoDetails,
      getHeaders()
    );
    if (res.status == 201) {
      toast.success("Video added successfully");
      remvoeLoading();
      dispatch({
        type: Types.course.CREATE_NEW_VIDEO,
        payload: res.data.newVideo,
      });
    }
    dispatch(remvoeLoading());
  } catch (err) {
    dispatch(remvoeLoading());
  }
};

// DELETE VIDEO
export const deleteVideo = (videoId, courseId) => async (dispatch) => {
  try {
    dispatch(setLoading());

    const res = await axios.delete(
      BASE_URL + `/video/deleteVideoById/${videoId}`,
      getHeaders()
    );
    if (res.status == 200) {
      toast.warn("Video Deleted");
      dispatch(remvoeLoading());
      // window.location.reload();
      dispatch(getCourseVideos(courseId));
      // dispatch({
      //   type: Types.course.DELETE_VIDEO,
      //   payload: { videoId, courseId },
      // });
    }
    dispatch(remvoeLoading());
  } catch (err) {
    dispatch(remvoeLoading());
  }
};

export const setLoading = () => async (dispatch) => {
  dispatch({
    type: Types.course.COURSE_LOADING,
  });
};

export const remvoeLoading = () => async (dispatch) => {
  dispatch({
    type: Types.course.REMOVE_COURSE_LOADING,
  });
};
