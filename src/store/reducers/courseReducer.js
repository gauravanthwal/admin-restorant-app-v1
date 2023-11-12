import { Types } from "../Types";

const initialState = {
  allCourses: [],
  courseVideos: [],
  loading: false,
  userDetails: {},
  isAuth: false,
  isRegistrationSuccess: false,
};

export const courseReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case Types.course.COURSE_LOADING:
      return { ...state, loading: true };

    case Types.course.REMOVE_COURSE_LOADING:
      return { ...state, loading: false };

    case Types.course.GET_ALL_COURSE:
      return { ...state, allCourses: payload };

    case Types.course.ADD_NEW_COURSE:
      return { ...state, allCourses: [...state.allCourses, payload] };

    case Types.course.DELETE_COURSE:
      const filteredCourse = state.allCourses.filter(
        (item) => item._id != payload
      );
      return { ...state, allCourses: filteredCourse };

    case Types.course.DELETE_VIDEO:
      return state;

    case Types.course.GET_COURSE_VIDEOS:
      let courseVid = state.courseVideos.findIndex(
        (course) => course.courseId == payload.courseId
      );
      if (payload?.courseId && courseVid == -1) {
        return { ...state, courseVideos: [...state.courseVideos, payload] };
      } else {
        let filteredVids = state.courseVideos.filter(
          (x) => x.courseId != payload.courseId
        );

        return { ...state, courseVideos: [...filteredVids, payload] };
      }
    // return state;

    case Types.course.CREATE_NEW_VIDEO:
      let myCourse = state.courseVideos.find(
        (item) => item.courseId == payload.courseId
      );
      myCourse.data.push(payload);
      return { ...state, courseVideos: [...state.courseVideos, myCourse] };

    default:
      return state;
  }
};
