import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import reportWebVitals from './reportWebVitals';
import VideoList from './components/Videos/VideoList';
import VideoForm from './components/Videos/VideoForm';

import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import 'bootswatch/dist/flatly/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>

      <Navbar />

      <div className="container p-4">
        <Switch>
          <Route exact path="/" component={VideoList} />
          <Route path="/new-video" component={VideoForm} />
          <Route path="/update/:id" component={VideoForm} />
        </Switch>
        <ToastContainer />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
