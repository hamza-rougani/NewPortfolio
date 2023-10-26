const mongoose =  require("mongoose");

const Schema = mongoose.Schema({
    post:String,
    image:String
    
},{
    timestamps: true
})

module.exports =  mongoose.model("posts",Schema)