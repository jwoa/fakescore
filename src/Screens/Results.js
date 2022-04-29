import React from 'react';
// import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import logo from '../fakescore-logo.svg';

const Results = ({ match }) => {

  return (
    <div className='grid mt-40'>
      
       <div className='flex-auto justify-items-center grid'>

        <img src={logo} className="App-logo text-center" alt="logo" />
        
          <h3 className=''>YOUR FAKE SCORE IS</h3>
          <h1>{(Math.floor((localStorage.getItem('result') / 1) * 100))}%</h1>
          
          <a
                className="button"
                href="https://google.com"
                rel="noopener noreferrer"
              >
                SHARE
              </a>
      </div>

    </div>
  );
}

export default Results;