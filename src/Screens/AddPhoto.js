import React, { useState, useEffect } from 'react';
import logo from '../fakescore-logo.svg'


const AddPhoto = ({ match }) => {
//   const [dataUri, setDataUri] = useState('');
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
  }

  return (
    <div className='flex-auto justify-items-center'>
      <img src={logo} className="App-logo text-center" alt="logo" />
        <h1 className=''>+ best photo from your social</h1>
        { imageURLs.map(imageSrc => <img src={imageSrc} />) }
        <a
          className="button"
          href="/add-selfie"
          rel="noopener noreferrer"
        >
          choose photo
        </a>
        <input type="file" multiple accept="image/*" onChange={onImageChange} />
    </div>
  );
}

export default AddPhoto;