import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import './normalize.css';

import reportWebVitals from './reportWebVitals';

import Homepage from './pages/homepage';
import ContactPage from './pages/contact';
import StudyPage from './pages/study';
import WorksPage from './pages/work';
import ThermsOfUsage from './pages/thermsOfuse';

import Header from './components/layout/header';
import Footer from './components/layout/footer';
import ProjectPage from './pages/project';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <React.StrictMode>
            <BrowserRouter>
                  <Header />
                  <Routes>
                        <Route path="/" element={<Homepage />} />
                        <Route path="/project" element={<ProjectPage />} />
                        <Route path="/study" element={<StudyPage />} />
                        <Route path="/works" element={<WorksPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route
                              path="/therms-of-usage"
                              element={<ThermsOfUsage />}
                        />
                  </Routes>
                  <Footer />
            </BrowserRouter>
      </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
