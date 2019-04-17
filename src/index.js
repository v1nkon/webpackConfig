import React from 'react'
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
 
// import Frame from '@/layouts/Frame';
// import Main from '@/routes';
// import configureStore from '@/redux/configureStore';

// import DevTool from './redux/DevTool'
import Frame from './layouts/Frame';
import Main from './routes';
import configureStore from './redux/configureStore';

const store = configureStore()


const App = () => (
  <Provider store={store}>
    <HashRouter>
      <Frame>
        <Main />
      </Frame>
    </HashRouter>
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'))
