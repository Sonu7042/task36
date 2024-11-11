const express = require("express");
const multer = require("multer");
const cors = require("cors");
const bodyParser= require('body-parser')
const {mongoConnect, imgModel}= require('./db')
const storage = require('./Helper/index')


mongoConnect()
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))


const upload = multer({ storage:storage });

app.post("/upload", upload.single("file"),async(req, res) => {
  try{
    const {originalname, filename, path}=req.file
    console.log(path)
    const img= await imgModel.create({originalname, filename, path})

    res.status(201).json({
      message:"Img upload Successfully",
      error:false,
      success:true,
      data:img
    })

  }
  catch(err){
    res.status(500).json({
      message: err.message || "Error uploading file",
      error:true,
      success:false
    })
  }

});



app.get('/', async(req, res)=>{
 try{
  const data= await imgModel.find()

  res.status(200).json({
    message:"Data got Successfully",
    error:false,
    success:true,
    data:data
  })
 }
 catch(err){
  res.status(500).json({
    message: err.message || "fetching Error",
    error:true,
    success:false
  })

 }
})



app.listen(9000, () => console.log("Server is listening on port 9000..."));
