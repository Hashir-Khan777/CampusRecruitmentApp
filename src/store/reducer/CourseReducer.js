const INITIAL_STATE = {
  Courses: [],
  Diplomas: [],
};

const CoursesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'COURSE_ACTION_REQUEST':
      return {
        loading: true,
      };

    case 'COURSE_ACTION_SUCCESS':
      return {
        loading: false,
        Courses: action.payload,
      };

    case 'COURSE_ACTION_FAIL':
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

const DiplomasReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'DIPLOMA_ACTION_REQUEST':
      return {
        loading: true,
      };

    case 'DIPLOMA_ACTION_SUCCESS':
      return {
        loading: false,
        Diplomas: action.payload,
      };

    case 'DIPLOMA_ACTION_FAIL':
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export {CoursesReducer, DiplomasReducer};
