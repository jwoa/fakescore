import React, { useState } from 'react';

const AddPhotoSocial = ({ match }) => {
  const [dataUri, setDataUri] = useState('');

  function uploadPhotoSocial (dataUri) {
    console.log('takePhoto');
    setDataUri(dataUri);
  }

  return (
    <div>
      Upload Photo social media
    </div>
  );
}

export default AddPhotoSocial;