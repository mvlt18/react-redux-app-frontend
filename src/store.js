import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import platformsReducer from './reducers/platformsReducer.js'
import coursesReducer from './reducers/coursesReducer.js'
import todosReducer from './reducers/todosReducer.js'

const reducer = combineReducers({
  platforms: platformsReducer,
  courses: coursesReducer,
  todos: todosReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store
