import axios from 'axios';
import React, {useState} from 'react'

function App() {
  const [img, setImg] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiUrl = "http://localhost:3000/upload-file";

    const fd = new FormData();
    fd.append("file", img);

    await axios.post(apiUrl, fd);
    alert("File uploaded!");
  }

  return (
    <>

    <form onSubmit={handleSubmit} method="POST" encType='multipart/form-data'>
    <input type="file" name='file' onChange={(e) => setImg(e.target.files[0])} />
    <button type='submit'>Upload</button>

    </form>
    
    </>
  )
}

export default App