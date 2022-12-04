import logo from './fakescore-logo.svg';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import 'react-html5-camera-photo/build/css/index.css';

// Screens
import Home from './Screens/Home';
import AddSelfie from './Screens/AddSelfie';
import AddPhoto from './Screens/AddPhoto';
import Processing from './Screens/Processing';
import Results from './Screens/Results';
import Failure from './Screens/Failure';

function AddPhotoSocial() {
  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>+ best photo from your social</h1>
        <a
          className="button"
          href="/add-selfie"
          rel="noopener noreferrer"
        >
          choose photo
        </a>
        <a
          className="button"
          href="/add-selfie"
          rel="noopener noreferrer"
        >
          next
        </a>
      </header>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-photo" element={<AddPhoto />} />
        <Route path="/add-photo-social" element={<AddPhotoSocial />} />
        <Route path="/add-selfie" element={<AddSelfie/>} />
        <Route path="/processing" element={<Processing />} />
        <Route path="/results" element={<Results />} />
        <Route path="/failure" element={<Failure />} />
      </Routes>
    </div>
  );
}



export default App;
