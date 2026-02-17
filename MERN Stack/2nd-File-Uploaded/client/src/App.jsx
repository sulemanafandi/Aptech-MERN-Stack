import axios from 'axios'
import { useState } from 'react'

function App() {
  const [img, setImg] = useState(null)

  const handleSubmit = async (e) => { 
    e.preventDefault()
    const apiUrl = "http://localhost:3000/upload-file"

    const fd =  new FormData()
    fd.append('file', img)

     await axios.post(apiUrl, fd);
     alert('File uploaded successfully')
  }

  return (
    <>
      <form method='POST' encType='multipart/form-data' action='/upload' onSubmit={handleSubmit}>
        <input type="file" name="file" onChange={(e) => setImg(e.target.files[0])} />
        <button type="submit">Upload</button>
      </form>
    </>
  ) 
}

export default App
