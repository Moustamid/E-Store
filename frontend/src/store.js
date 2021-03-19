import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

//- SECTION: Redux :
const reducer = combineReducers({});

const initialState = {};

//- SECTION: middlewares
const middleware = [thunk];

//. SECTION: Store :

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
