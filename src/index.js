import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
axios.defaults.headers.common["Authorization"] = "AUTH TOKEN"; // This is just an example
axios.defaults.headers.post["Content-Type"] = "application/json"; // This is just an example

axios.interceptors.request.use(request => {
    console.log(request);
    // Edit the request configuration here
    return request;
}, error =>{
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    console.log(response);
    // Edit the response configuration here
    return response;
}, error =>{
    console.log(error);
    return Promise.reject(error);
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
