import React, {useState} from 'react';
import axios from 'axios';

function Fileupload() {

  const [file, setFile] = useState()

  function handleChange(event) {
    setFile(event.target.files[0])
  }
  
  function handleSubmit(event) {
    event.preventDefault()
    const url = 'http://192.168.1.2:5000';
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', file.name);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    axios.post(url, formData, config).then((response) => {
      console.log(response.data);
    });

  }

   return (
     <div>
      <form onSubmit={handleSubmit}>
       <h3>Töltse fel a kívánt fájlt</h3>
       <input type="file" onChange={handleChange}/>
       <button type="submit">Feltöltés</button>
       </form>
     </div> 
     );
  }

export default Fileupload;