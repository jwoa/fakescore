import React, { useState } from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
// import logo from '../fakescore-logo.svg';

const AddSelfie = ({ match }) => {
  const [dataUri, setDataUri] = useState('');

  console.log('UPLOADED PHOTO:', localStorage.getItem('uploadedPhoto'))


  function handleTakePhotoAnimationDone (dataUri) {
    // console.log('photo:', dataUri);
    setDataUri(dataUri);
    localStorage.setItem('uploadedSelfie', dataUri);
    console.log('UPLOADED SELFIE:', localStorage.getItem('uploadedSelfie'));
  }

  const isFullscreen = false;
  return (
    <div className='grid mt-40'>
      
       <div className='flex-auto justify-items-center grid'>
        {/* <img src={logo} className="App-logo text-center" alt="logo" /> */}
        
          <h2 className=''>+ one selfie</h2>
          {
            (dataUri)
              ? 
              <a
                className="button"
                href="/processing"
                rel="noopener noreferrer"
              >
                next
              </a>
              : <Camera onTakePhotoAnimationDone = {handleTakePhotoAnimationDone}
                isFullscreen={isFullscreen}
              />
          }
      </div>
    </div>
  );
}

export default AddSelfie;