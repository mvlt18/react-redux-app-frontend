import { createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import platformsReducer from './reducers/platformsReducer.js'
import platformForm from './reducers/platformForm.js'

const reducer = combineReducers({
  platforms: platformsReducer,
  platformForm: platformForm
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// let store = createStore(platformsReducer , composeEnhancers(applyMiddleware(thunk)))
let store = createStore(reducer , composeEnhancers(applyMiddleware(thunk)))

export default store
