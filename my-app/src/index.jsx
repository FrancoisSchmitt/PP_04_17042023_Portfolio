import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import './normalize.css';

import reportWebVitals from './reportWebVitals';

import Homepage from './pages/homepage';
import Header from './components/layout/header';
import Footer from './components/layout/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <React.StrictMode>
            <BrowserRouter>
                  <Header />
                  <Routes>
                        <Route path="/" element={<Homepage />} />
                  </Routes>
                  {/* <Footer /> */}
            </BrowserRouter>
      </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
