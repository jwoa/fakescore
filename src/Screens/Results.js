import React from 'react';

import 'react-html5-camera-photo/build/css/index.css';
import instagram from '../instagram.png';
import facebook from '../facebook.png';
import twitter from '../twitter.png';
import bottomFace from '../bottom-face.png';

const Results = ({ match }) => {

  if (Math.floor((localStorage.getItem('result') / 1) * 100) >= 68) {
    return (
      <div className='grid mt-40'>
        
          <div className='flex-auto justify-items-center grid'>
          
            <h3 className='text-center mb-10 plain'>YOU'RE A REAL ONE</h3>
            
            <h3 className=''>YOUR FAKE SCORE IS</h3>
            <h1 className='mb-10'>{(Math.floor((localStorage.getItem('result') / 1) * 100))}%</h1>

            <div className='flex social-links'>
              <img src={facebook} className="facebook text-center" alt="facebook" />
              <img src={twitter} className="twitter text-center" alt="twitter" />
              <img src={instagram} className="instagram text-center" alt="instagram" />
            </div>
            
            <a
              className="button"
              href="/"
              rel="noopener noreferrer"
            >
              try again?
            </a>
        </div>

        <img src={bottomFace} className="bottomFace" alt="Bottom face" />

      </div>
    );
  } else {
    return (
      <div className='grid mt-40'>
        
        <div className='flex-auto justify-items-center grid'>
          
            <h3 className='text-center mb-10 plain'>GUESS YOU'RE NOT THE REALEST</h3>
            
            <h3 className=''>YOUR FAKE SCORE IS</h3>
            <h1 className='mb-10'>{(Math.floor((localStorage.getItem('result') / 1) * 100))}%</h1>

            <div className='flex social-links'>
              <img src={facebook} className="facebook text-center" alt="facebook" />
              <img src={twitter} className="twitter text-center" alt="twitter" />
              <img src={instagram} className="instagram text-center" alt="instagram" />
            </div>
            
            <a
              className="button"
              href="/"
              rel="noopener noreferrer"
            >
              try again?
            </a>
        </div>

        <img src={bottomFace} className="bottomFace" alt="Bottom face" />

      </div>
    );
  }

}

export default Results;