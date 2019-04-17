import { combineReducers } from 'redux';

//引入reducer及actionCreator
// import list from '@/components/Home/previewListRedux';
import list, { loadArticles } from '../components/Home/PreviewListRedux';

console.log("list")
console.log(list)

// export default list

export const actions = {
  loadArticles
}

export default combineReducers({
  list,
});
