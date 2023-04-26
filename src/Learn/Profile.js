import React, { useState } from 'react';
import axios from 'axios';

function Profile() {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileSelect = (event) => {

    setSelectedFiles(event.target.files);

    console.log(event.target.files)


  };

  const handleFileUpload = () => {

    
    console.log(selectedFiles)
 
    const formData = new FormData();

    for (let i = 0; i < selectedFiles.length; i++) {

      formData.append('files', selectedFiles[i]);
    }
     console.log(formData)

    axios.post('http://localhost:7000/uploadfile', formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <input type="file"  name="files" multiple onChange={handleFileSelect}  />
    
      <button onClick={handleFileUpload}>Upload</button>
    </div>
  );
}

export default Profile;