 const express = require('express');
 const app = express();
 const dotenv = require('dotenv');
 dotenv.config();
 const upload = require('./middleware/uploadFile');
const cors = require('cors');

app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use(cors());

app.post('/upload-file', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }
    res.status(200).json({ message: 'File uploaded successfully'});
});

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`Server running on port ${PORT} 🔥`));