const cloudinary = require("cloudinary").v2
require("dotenv").config()
cloudinary.config({
    cloud_name:process.env.CLOUDNAME,
    api_key:process.env.CLOUDAPIKEY,
    api_secret:process.env.CLOUDINARYSECRET,
})
const opts = {
    overwite:true,
    invalide:true,
    resource_type:"auto",
}
const uploadSingleImage = (image)=>{
    return new Promise((resolve,reject)=>{
        cloudinary.uploader.upload(image,opts,(error,result)=>{
            if(result && result.secure_url){
                console.log(result.secure_url)
                return resolve(result.secure_url)
            }
            console.log(error.message)
            return reject({message : error.message});
        })
    })
}


module.exports = (image)=>{
    return new Promise((resolve,reject)=>{
        cloudinary.uploader.upload(image,opts,(error,result)=>{
            if(result && result.secure_url){
                console.log(result.secure_url)
                return resolve(result.secure_url)
            }
            console.log(error.message)
            return reject({message : error.message});
        })
    })
}
module.exports.uploadMultiImages = (images)=>{
    return new Promise((resolve,reject)=>{
        const uploads = images.map((base)=>uploadSingleImage(base));
        Promise.all(uploads)
        .then((values)=>resolve(values))
        .catch((err)=>reject(err))
    })
}