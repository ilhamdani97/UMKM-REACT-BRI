import { createStore, applyMiddleware } from 'redux';
import middlewares from './middlewares/middleware';
import appReducer from './reducers';

const Profile = createStore(appReducer, {}, applyMiddleware(...middlewares));

export default { Profile };
