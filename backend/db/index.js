const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://AshikMohan:Ashik12345@cluster0.ngaoxfw.mongodb.net/project',{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
console.log('MongoDB is connected')
})
.catch((err)=>{
console.log('error in connection'+ err)
})