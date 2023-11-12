import { Types } from "../Types";

const initialState = {
  askDeleteCourse: false,
  courseId: "",

  askDeleteVideo: false,
  videoId: "",

  addVideoModal: false,

  createAdmin: false,
  userId: "",

  removeAdmin: false,

  selectUser: false
};

export const modalReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case Types.modal.ASK_DELETE_COURSE:
      return {
        ...state,
        askDeleteCourse: payload.askDeleteCourse,
        courseId: payload.courseId,
      };

    case Types.modal.ASK_DELETE_VIDEO:
      return {
        ...state,
        askDeleteVideo: payload.askDeleteVideo,
        videoId: payload.videoId,
        courseId: payload.courseId,
      };

    case Types.modal.ADD_NEW_VIDEO:
      return {
        ...state,
        addVideoModal: payload.addVideoModal,
        courseId: payload.courseId,
      };

    case Types.modal.ADD_ADMIN_ROLE:
      return {
        ...state,
        createAdmin: payload.createAdmin,
        userId: payload.userId,
      };

    case Types.modal.REMOVE_ADMIN_ROLE:
      return {
        ...state,
        removeAdmin: payload.removeAdmin,
        userId: payload.userId,
      };

    case Types.modal.SELECT_USER_MODAL:
      return {
        ...state,
        selectUser: payload
      };

    default:
      return state;
  }
};
