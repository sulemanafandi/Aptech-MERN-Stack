const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");

app.use(cors());

const upload = require("./Middleware/uploadFile");



app.post("/upload-file", upload.single('file'), async (req, res) => {
    res.json({message: "file uploaded successfully"});
});



app.listen(3000, () => {
    console.log("app is running");
})