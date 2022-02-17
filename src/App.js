import logo from './fakescore-logo.svg';
import React, { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
// import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
// import ImagePreview from './Components/ImagePreview';

// Screens
import Home from './Screens/Home';
import AddSelfie from './Screens/AddSelfie';
import AddPhoto from './Screens/AddPhoto';


// function handleTakePhotoAnimationDone (dataUri) {
//   // Do stuff with the photo...
//   setDataUri(dataUri);
//   console.log(dataUri);
// }

// function AddPhoto() {
//   return (
//     <>
//       <header className="App-header">
//         <img src={logo} className="App-logo object-center" alt="logo" />
//         <h1>+ best photo from your social</h1>
//         <a
//           className="button"
//           href="/add-photo-social"
//           rel="noopener noreferrer"
//         >
//           choose photo
//         </a>
//       </header>
//     </>
//   );
// }

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
      {/* <nav>
        <Link to="/">Home</Link>
      </nav> */}
    </>
  );
}

// function AddSelfieComplete() {
//   return (
//     <>
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1>+ one selfie</h1>
//         <a
//           className="button"
//           href="/add-selfie"
//           rel="noopener noreferrer"
//         >
//           redo
//         </a>
//         <a
//           className="button"
//           href="/processing"
//           rel="noopener noreferrer"
//         >
//           next
//         </a>
//       </header>
//     </>
//   );
// }

// function Processing() {
//   return (
//     <>
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1>processing . . .</h1>
//       </header>
//     </>
//   );
// }

// function Results() {
//   return (
//     <>
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1>Your fake score is</h1>
//       </header>
//     </>
//   );
// }

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-photo" element={<AddPhoto />} />
        <Route path="/add-photo-social" element={<AddPhotoSocial />} />
        <Route path="/add-selfie" element={<AddSelfie/>} />
        {/* <Route path="/add-selfie-complete" element={<AddSelfieComplete/>} />
        <Route path="/processing" element={<Processing />} />
        <Route path="/results" element={<Results />} /> */}
      </Routes>
    </div>
  );
}



export default App;
