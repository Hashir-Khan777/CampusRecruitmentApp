import Axios from 'axios';

const UserRegister = (name, number, email, password, roll) => async (
  dispatch,
) => {
  dispatch({
    type: 'USER_REGISTER_REQUEST',
    payload: {name, number, email, password, roll},
  });
  try {
    const {data} = await Axios.post(
      'http://192.168.10.113:4000/api/users/register',
      {
        name,
        number,
        email,
        password,
        roll,
      },
    );
    dispatch({type: 'USER_REGISTER_SUCESS', payload: data});
    dispatch({type: 'USER_SIGNIN_SUCESS', payload: data});
  } catch (err) {
    dispatch({
      type: 'USER_REGISTER_FAIL',
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

const Sign_In = (email, password) => async (dispatch) => {
  dispatch({type: 'USER_SIGNIN_REQUEST', payload: {email, password}});
  try {
    const {data} = await Axios.post(
      'http://192.168.10.113:4000/api/users/signin',
      {
        email,
        password,
      },
    );
    dispatch({type: 'USER_SIGNIN_SUCESS', payload: data});
  } catch (err) {
    dispatch({
      type: 'USER_SIGNIN_FAIL',
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export {Sign_In, UserRegister};
