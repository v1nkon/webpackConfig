import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { routerReducer } from "react-router-redux";
import ThunkMiddleware from "redux-thunk";
import createFetchMiddleware from 'redux-composable-fetch'; 


// import rootReducer from "@/redux/reducers";


import rootReducer from './reducers';

// 创建一个请求 middleware 的示例 
const FetchMiddleware = createFetchMiddleware({

  beforeFetch({ action }) {
    console.log("开始发送请求了")
    console.log(action)
    return Promise.resolve({ action });
  },
  afterFetch({ action, result }) {
    return result.json().then(data => {
      return Promise.resolve({
        action,
        result: data,
      });
    });
  },
});


const finalCreateStore = compose(applyMiddleware(ThunkMiddleware, FetchMiddleware))(createStore);
const reducer = combineReducers(
  Object.assign({}, rootReducer, { routing: routerReducer })
);
export default function configureStore(initialState) {
  const store = finalCreateStore(
    reducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 
    initialState);
  return store;
}
