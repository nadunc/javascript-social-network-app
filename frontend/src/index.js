import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import './bootstrap.css';
import './style.css';
import ComponentMain from './components/ComponentMain';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import store from './store';


ReactDOM.render(
  <Provider store={store}>
    <ComponentMain/>
  </Provider>, document.getElementById('root')
);
registerServiceWorker();
