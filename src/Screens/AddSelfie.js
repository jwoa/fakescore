import React, { useState } from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import logo from '../fakescore-logo.svg';

import ImagePreview from '../Components/ImagePreview';
const AddSelfie = ({ match }) => {
  const [dataUri, setDataUri] = useState('');

  function handleTakePhotoAnimationDone (dataUri) {
    console.log('takePhoto');
    setDataUri(dataUri);
  }

  const isFullscreen = false;
  return (
    <div>
      {
        (dataUri)
          ? <ImagePreview dataUri={dataUri}
            isFullscreen={isFullscreen}
          />
          : <Camera onTakePhotoAnimationDone = {handleTakePhotoAnimationDone}
            isFullscreen={isFullscreen}
          />
      }
       <div className='flex-auto justify-items-center'>
        <img src={logo} className="App-logo text-center" alt="logo" />
          <h1 className=''>+ add selfie</h1>

          <a
            className="button"
            href="/add-selfie"
            rel="noopener noreferrer"
          >
            choose photo
          </a>
      </div>
    </div>
  );
}

export default AddSelfie;