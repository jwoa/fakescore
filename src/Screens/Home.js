import React from 'react';
import logo from '../fakescore-logo.svg'
// import 'dotenv/config'
console.log(process.env.REACT_APP_AZURE_KEY)

const Home = ({ match }) => {

    return (
        <>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Fake Score</h1>
            <p>Are you the realest?</p>
            <br/>
            <a
              className="button"
              href="/add-photo"
              rel="noopener noreferrer"
            >
              start
            </a>
            
          </header>
        </>
      );
}

export default Home