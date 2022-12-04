import React, {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import 'dotenv/config';
// import axios from 'axios';
import logo from '../fakescore-logo.svg'
import facePlusplusNode from 'face-plusplus-node';


const Processing = () => {

    let navigate = useNavigate();

    // Compare two images and see if they are the same person
    const compare = async () => {
        const facepp = new facePlusplusNode(process.env.REACT_APP_FACEPP_KEY, process.env.REACT_APP_FACEPP_SECRET);
        const uploadedPhoto = localStorage.getItem("uploadedPhoto");
        const binDataImage = uploadedPhoto.replace("data:image/jpeg;base64,","");
        const uploadedSelfie = localStorage.getItem("uploadedSelfie");
        const binDataImage2 = uploadedSelfie.replace("data:image/jpeg;base64,","");
        const result = await facepp.compare(binDataImage, binDataImage2);
        console.log("RESULT", result);
        if (result.confidence > 80) {
            navigate('/results');
        } else {
            navigate('/failure');
        }
    }

    useEffect(() => {
        compare();
    }, []);

    return (
        <>
          <div className="App-div grid flex-auto justify-items-center mt-40">
            <a href="/results">
              <img src={logo} className="App-logo text-center justify-self-center" alt="logo" />
              <h3>PROCESSING . . .</h3>
            </a>
          </div>
        </>
      );
}

export default Processing;