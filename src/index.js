import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux'
import { Provider } from 'react-redux';

import counterReducer from './reduxcode/reducers';
// import EventsDemo from './EventsDemo';
// import LifeCycleMethods from './LifeCycleMethods';
// import MyApp1 from './MyApp1'
// import MyForm from './MyForm';
// import ParentComponent from './ParentComponent';
// import PropsDemo from './PropsDemo';
// import StateClassDemo from './StateClassDemo'
// import UseContextDemo from './UseContextDemo';
// import UseContextUpdate from './UseContextUpdate';
// import UseMemoHook from './UseMemoHook';
// import UseRefDemo from './UseRefDemo';
// import ValidateForm from './ValidateForm';
import Home from './reduxcode/Home'

const store=createStore(counterReducer) // value=100

ReactDOM.render(
    <Provider store={store}>
         <Home/>
    </Provider>
,
  document.getElementById('root')
);