import React, {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
// import 'dotenv/config';
import axios from 'axios';
import logo from '../fakescore-logo.svg'


const Processing = () => {

  let navigate = useNavigate();
 
  // const [compareResult, setCompareResult] = useState(null);
  // const [firstFace, setFirstFace] = useState(null);
  // const [secondFace, setSecondFace] = useState(null);

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

  const uploadedPhoto = localStorage.getItem("uploadedPhoto");
  const binDataImage = uploadedPhoto.replace("data:image/jpeg;base64,","");
  console.log("UPLOADED PHOTO", binDataImage)
  const uploadedSelfie = localStorage.getItem("uploadedSelfie");
  const binDataImageSelfie = uploadedSelfie.replace("data:image/png;base64,","");
  console.log("UPLOADED SELFIE", binDataImageSelfie)

  // Use axios to make a request to Face++ API for image comparison
  axios({
    method: 'post',
    url: 'https://api-us.faceplusplus.com/facepp/v3/compare',
    // Configure headers for CORS
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
    data: {
      api_key: "o76CcL3UcRLAkj_nkWU6P9dMKnEBIbWi",
      api_secret: "gmupP3whYdLvNMStGO5nA1YVdzDug38N",
      // api_key: process.env.REACT_APP_FACEPP_KEY,
      // api_secret: process.env.REACT_APP_FACEPP_SECRET,
      image_base64_1: binDataImage,
      image_base64_2: binDataImageSelfie
    }
  })
  .then(function (response) {
    console.log("response", response)
    console.log("response.data.confidence", response.data.confidence)
    console.log("response.data.similarity", response.data.similarity)
  })
  .catch(function (error) {
    console.log("error", error)
  });

  

  // function firstRequest() {
  //   var myHeaders = new Headers();
  //   myHeaders.append("Ocp-Apim-Subscription-Key", process.env.REACT_APP_AZURE_KEY);
  //   myHeaders.append("Content-Type", "application/octet-stream");

  //   const uploadedPhoto = localStorage.getItem("uploadedPhoto");
  //   console.log("UPLOADED PHOTO",uploadedPhoto)
  //   const binDataImage = uploadedPhoto.replace("data:image/jpeg;base64,","");

  //   var requestOptions = {
  //     method: 'POST',
  //     headers: myHeaders,
  //     body: makeblob(binDataImage, 'image/jpeg'),
  //     redirect: 'follow'
  //   };

  //   fetch("https://fakescore.cognitiveservices.azure.com/face/v1.0/detect", requestOptions)
  //         .then(response => response.json())
  //         // .then(result => setFirstFace(result[0]["faceId"]))
  //         .then(result => localStorage.setItem("faceId1", result[0]["faceId"]))
  //         .then(secondRequest())
  //         .catch(error => console.log('error', error));
  // }
  // function secondRequest() {
  //   var myHeaders = new Headers();
  //   myHeaders.append("Ocp-Apim-Subscription-Key", process.env.REACT_APP_AZURE_KEY);
  //   myHeaders.append("Content-Type", "application/octet-stream");

  //   const uploadedSelfie = localStorage.getItem("uploadedSelfie");
  //   console.log("UPLOADED SELFIE",uploadedSelfie)
  //   const binDataImageSelfie = uploadedSelfie.replace("data:image/png;base64,","");

  //   var requestOptionsSelfie = {
  //     method: 'POST',
  //     headers: myHeaders,
  //     body: makeblob(binDataImageSelfie, 'image/jpeg'),
  //     redirect: 'follow'
  //   };

  //   fetch("https://fakescore.cognitiveservices.azure.com/face/v1.0/detect", requestOptionsSelfie)
  //         .then(response => response.json())
  //         // .then(result => setSecondFace(result[0]["faceId"]))
  //         .then(result => localStorage.setItem("faceId2", result[0]["faceId"]))
  //         .then(compare())
  //         .catch(error => console.log('error', error));
  // }
  // function compare() {
  //   console.log("compare function running")

  //   setTimeout(() => {
  //     console.log('Okay now we go! (3 secs passed)')
  //     console.log("firstFaceLS", localStorage.getItem("faceId1"))
  //     console.log("secondFaceLS", localStorage.getItem("faceId2"))

  //     var myHeaders = new Headers();
  //       myHeaders.append("Ocp-Apim-Subscription-Key", process.env.REACT_APP_AZURE_KEY);
  //       myHeaders.append("Content-Type", "application/json");

  //     // Compare Two Faces
  //     var raw = JSON.stringify({
  //       "faceId1": localStorage.getItem("faceId1"),
  //       "faceId2": localStorage.getItem("faceId2")
  //     });

  //     console.log("raw", raw)

  //     var requestOptions = {
  //       method: 'POST',
  //       headers: myHeaders,
  //       body: raw,
  //       redirect: 'follow'
  //     };
  
  //     fetch("https://fakescore.cognitiveservices.azure.com/face/v1.0/verify", requestOptions)
  //       .then(response => response.json())
  //       .then(result => localStorage.setItem("result", result["confidence"]))
  //       .catch(error => console.log('error', error));

      

  //     setTimeout(() => {
  //       console.log(localStorage.getItem('result'))
  //       console.log("WE LIVE BABY");
  //       // navigate('/results')

  //     }, 2000)
      

  //   }, 3000);

  // }

  useEffect(() => {

    // firstRequest()
    
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