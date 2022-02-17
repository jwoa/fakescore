import React, { useState } from 'react';
import logo from '../fakescore-logo.svg'

const Home = ({ match }) => {
    return (
        <>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Fake<br/>
              Score
            </h1>
            <p>Are you the realest?</p>
            <a
              className="button"
              href="/add-photo"
              rel="noopener noreferrer"
            >
              start
            </a>
          </header>
          {/* <nav>
            <Link to="/about">About</Link>
          </nav> */}
        </>
      );
}

export default Home