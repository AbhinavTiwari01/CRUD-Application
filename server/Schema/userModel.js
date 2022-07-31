import mongoose  from "mongoose";

const userModel= mongoose.Schema({

    name: String,
    username: String,
    email: String,
    phone: String
})

const user= mongoose.model('userCollection', userModel, 'userCollection');

export default user;