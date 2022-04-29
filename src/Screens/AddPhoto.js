import React, { useState, useEffect } from 'react';
import logo from '../fakescore-logo.svg'
import * as imageConversion from 'image-conversion';


const AddPhoto = ({ match }) => {
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);

  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls = [];
    images.forEach(image => newImageUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImageUrls);
  }, [images]);

  function onImageChange(e) { 
      setImages([...e.target.files]);
      console.log(e.target.files[0])
      const file = e.target.files[0];

      imageConversion.compressAccurately(file,200).then(res=>{
        //The res in the promise is a compressed Blob type (which can be treated as a File type) file;
        console.log(res);
        var reader = new FileReader();
        reader.readAsDataURL(res); 
        reader.onloadend = function() {
          var base64data = reader.result;                
          // console.log(base64data);
          localStorage.setItem('uploadedPhoto', reader.result);
          console.log("UPLOADED PHOTO:",localStorage.getItem('uploadedPhoto'));
        }
      })

    // // encode the file using the FileReader API
    // const reader = new FileReader();
    // reader.onloadend = () => {
    //   // log to console
    //   // logs data:<type>;base64,wL2dvYWwgbW9yZ...
    //   console.log(reader.result);
    //   localStorage.setItem('uploadedPhoto', reader.result);

    // };
    // reader.readAsDataURL(file);
  }

  return (
    <div className='flex-auto justify-items-center grid mt-40'>
        <img src={logo} className="App-logo text-center flex-auto" alt="logo" />
        <h2 className='text-center'>+ best photo from your social</h2>
        
        {
            (images.length > 0)
              ? 
              <a
                className="button"
                href="/add-selfie"
                rel="noopener noreferrer"
              >
                next
              </a>
              : 
              <>
                <input type="file" accept="image/*" id="upload" hidden onChange={onImageChange} />
                <label for="upload">Choose File</label>
              </>
          }
    </div>
  );
}

export default AddPhoto;