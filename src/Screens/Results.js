import React, { useState } from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import logo from '../fakescore-logo.svg';

const Results = ({ match }) => {
  const [dataUri, setDataUri] = useState('');

  const isFullscreen = false;
  return (
    <div className='grid mt-40'>
      
       <div className='flex-auto justify-items-center grid'>
        
          <h3 className=''>YOUR FAKE SCORE IS</h3>
          <h1>{(Math.floor((localStorage.getItem('result') / 1) * 100))}%</h1>
          
          <a
                className="button"
                href="/processing"
                rel="noopener noreferrer"
              >
                next
              </a>
      </div>
        <img src={logo} className="App-logo text-center" alt="logo" />

    </div>
  );
}

export default Results;