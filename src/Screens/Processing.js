import React, {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import logo from '../fakescore-logo.svg'


const Processing = () => {

  let navigate = useNavigate();
 
  const [compareResult, setCompareResult] = useState(null);
  const [firstFace, setFirstFace] = useState(null);
  const [secondFace, setSecondFace] = useState(null);

  function makeblob(b64Data, contentType, sliceSize) {
    contentType = contentType || '';
    sliceSize = sliceSize || 512;

    var byteCharacters = atob(b64Data);
    var byteArrays = [];

    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        var slice = byteCharacters.slice(offset, offset + sliceSize);

        var byteNumbers = new Array(slice.length);
        for (var i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        var byteArray = new Uint8Array(byteNumbers);

        byteArrays.push(byteArray);
    }

    var blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }

  function firstRequest() {
    var myHeaders = new Headers();
    myHeaders.append("Ocp-Apim-Subscription-Key", "a620035df3924c32b8fcd3b7b48b30e5");
    myHeaders.append("Content-Type", "application/octet-stream");

    const uploadedPhoto = localStorage.getItem("uploadedPhoto");
    const binDataImage = uploadedPhoto.replace("data:image/jpeg;base64,","");

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: makeblob(binDataImage, 'image/jpeg'),
      redirect: 'follow'
    };

    fetch("https://eastus.api.cognitive.microsoft.com/face/v1.0/detect", requestOptions)
          .then(response => response.json())
          // .then(result => console.log("aaa",result[0]["faceId"]))
          .then(result => localStorage.setItem("faceId1", result[0]["faceId"]))
          .then(secondRequest())
          .catch(error => console.log('error', error));
  }
  function secondRequest() {
    var myHeaders = new Headers();
    myHeaders.append("Ocp-Apim-Subscription-Key", "a620035df3924c32b8fcd3b7b48b30e5");
    myHeaders.append("Content-Type", "application/octet-stream");

    const uploadedSelfie = localStorage.getItem("uploadedSelfie");
    const binDataImageSelfie = uploadedSelfie.replace("data:image/png;base64,","");

    var requestOptionsSelfie = {
      method: 'POST',
      headers: myHeaders,
      body: makeblob(binDataImageSelfie, 'image/jpeg'),
      redirect: 'follow'
    };

    fetch("https://eastus.api.cognitive.microsoft.com/face/v1.0/detect", requestOptionsSelfie)
          .then(response => response.json())
          // .then(result => console.log("sssid", result[0]["faceId"]))
          .then(result => localStorage.setItem("faceId2", result[0]["faceId"]))
          .then(compare())
          .catch(error => console.log('error', error));
  }
  function compare() {

    console.log("compare function running")

    var myHeaders = new Headers();
        myHeaders.append("Ocp-Apim-Subscription-Key", "a620035df3924c32b8fcd3b7b48b30e5");
        myHeaders.append("Content-Type", "application/json");

    // console.log("firstface", firstFace[0])

    // Compare Two Faces
    var raw = JSON.stringify({
      "faceId1": localStorage.getItem("faceId1"),
      "faceId2": localStorage.getItem("faceId2")
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://eastus.api.cognitive.microsoft.com/face/v1.0/verify", requestOptions)
      .then(response => response.json())
      .then(result => localStorage.setItem("result", result["confidence"]))
      // .then(result => setCompareResult(result)["confidence"])
      .catch(error => console.log('error', error));

    
    // localStorage.setItem('Results', compareResult["confidence"]);
    console.log("WE LIVE BABY")
    navigate('/results')

  }

  useEffect(() => {
    // if (firstFace && secondFace) {
    //   compare()
    // }
    firstRequest()
    // secondRequest()
    // setTimeout(() => {
    //   compare()
    // }, 3000);
    
    
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

export default Processing