const mongoose=require('mongoose');
const mongouri="mongodb+srv://Ruthik:ruthik06@cluster0.y4yfiu8.mongodb.net/?retryWrites=true&w=majority";
const connecttoMongo=()=>{
    mongoose.connect(mongouri,()=>{
        console.log("connected to mongo");
    })
}
module.exports=connecttoMongo;