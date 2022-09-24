import logo from './logo.svg';
import './App.css';
import WebsiteLayout from './layouts/WebsiteLayout';
import {Toaster} from 'react-hot-toast'
import axios from 'axios';

function App() {

  axios.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token").replace(/["']/g, "")
      console.log(token)
      if (token) {
        config.headers["Authorization"] = "Bearer " + token;
      }
      config.headers["Content-Type"] = "application/json";
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );

  return (
    <>
      <WebsiteLayout />
      <Toaster />
    </>
  );
}

export default App;
