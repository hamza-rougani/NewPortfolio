const mongoose =  require("mongoose");

const Schema = mongoose.Schema({
    post:String,
    image:String,
    create_at:{
        type:Date,
        default:Date.now()
    }
    
},{
    timestamps: true
})

module.exports =  mongoose.model("posts",Schema)