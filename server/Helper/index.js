const cloudinary = require('cloudinary').v2 


cloudinary.config({
    cloud_name:"dwsdik5f9",
    api_key : "527547676913657",
    api_secret : "bdYn7BrBqWzLJ_F4Ar--vPGo1M4"
})


const uploadFile= async(filePath)=>{
    try{
        const result = await cloudinary.uploader.upload(filePath)
        return result

    }
    catch(err){
        console.log("this is error", err)

    }

}


module.exports = uploadFile
