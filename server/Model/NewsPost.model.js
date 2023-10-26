const mongoose =  require("mongoose");
const NewsPostSchema = mongoose.Schema({
    NewsPostImage:String,
    create_at:{
        type:Date,
        default:Date.now(),
    }
},{
    timestamps: true
})
module.exports = mongoose.model("NewsPost",NewsPostSchema)