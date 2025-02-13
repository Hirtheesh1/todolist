import mongoose from 'mongoose';    
const Todoschema=new mongoose.Schema({
    task: String
})
const Todomodel=mongoose.model("todos",Todoschema)

export default Todomodel;