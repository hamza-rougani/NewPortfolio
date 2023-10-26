const mongoose =  require("mongoose");
const NewsProjectSchema = mongoose.Schema({
    NewsProjectImage:String,
    create_at:{
        type:Date,
        default:Date.now(),
    }
},{
    timestamps: true
})
module.exports = mongoose.model("NewsProject",NewsProjectSchema)