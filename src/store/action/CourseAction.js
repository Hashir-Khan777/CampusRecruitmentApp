import Axios from 'axios';

const CourseAction = () => async (dispatch) => {
  dispatch({type: 'COURSE_ACTION_REQUEST'});
  try {
    const {data} = await Axios.get('http://192.168.10.113:4000/api/courses');
    dispatch({type: 'COURSE_ACTION_SUCCESS', payload: data});
  } catch (err) {
    dispatch({
      type: 'COURSE_ACTION_FAIL',
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

const DiplomaAction = () => async (dispatch) => {
  dispatch({type: 'DIPLOMA_ACTION_REQUEST'});
  try {
    const {data} = await Axios.get('http://192.168.10.113:4000/api/diplomas');
    dispatch({type: 'DIPLOMA_ACTION_SUCCESS', payload: data});
  } catch (err) {
    dispatch({
      type: 'DIPLOMA_ACTION_FAIL',
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export {CourseAction, DiplomaAction};
