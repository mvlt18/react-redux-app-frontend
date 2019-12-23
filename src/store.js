import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import platformsReducer from './reducers/platformsReducer.js'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(platformsReducer , composeEnhancers(applyMiddleware(thunk)))

export default store
