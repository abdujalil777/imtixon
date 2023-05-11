import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux';
import Reduxx from './component/Redux/Redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Savat from './component/Savat/Savat';
// import Hamma from './component/Hamma/Hamma';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Reduxx}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} >
          </Route >
            <Route path='/salom' element={<Savat />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);


