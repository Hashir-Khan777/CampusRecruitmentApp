const INITIAL_STATE = {
  userInfo: [],
};

const UserSigninReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'USER_SIGNIN_REQUEST':
      return {
        loading: true,
      };

    case 'USER_SIGNIN_SUCESS':
      return {
        loading: false,
        userInfo: action.payload,
      };

    case 'USER_SIGNIN_FAIL':
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

const UserRegisterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'USER_REGISTER_REQUEST':
      return {
        loading: true,
      };

    case 'USER_REGISTER_SUCESS':
      return {
        loading: false,
        userInfo: action.payload,
      };

    case 'USER_REGISTER_FAIL':
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export {UserSigninReducer, UserRegisterReducer};
