const mongoose =  require("mongoose");

const ShcemaAdmin = mongoose.Schema({
    username:String,
    password:String,
    isAdmin:Boolean,
},{
    timestamps: true
})

module.exports = mongoose.model("admin",ShcemaAdmin)