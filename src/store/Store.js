import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {CoursesReducer, DiplomasReducer} from './reducer/CourseReducer';
import {UserRegisterReducer, UserSigninReducer} from './reducer/UserReducer';

const Reducers = combineReducers({
  CourseReducer: CoursesReducer,
  DiplomaReducer: DiplomasReducer,
  userSignin: UserSigninReducer,
  userRegister: UserRegisterReducer,
});

const Store = createStore(Reducers, applyMiddleware(thunk));

export default Store;
