import logo from './logo.svg';
import './App.css';
import WebsiteLayout from './layouts/WebsiteLayout';
import {Toaster} from 'react-hot-toast'

function App() {
  return (
    <>
      <WebsiteLayout />
      <Toaster />
    </>
  );
}

export default App;
