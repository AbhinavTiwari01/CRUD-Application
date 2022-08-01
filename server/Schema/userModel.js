import mongoose  from 'mongoose';
import validator from 'validator';
import Swal from 'sweetalert2';


const userModel= mongoose.Schema({

    name: {type : String,
        validate(value){
            if(!validator.isAlpha(value)){
                throw new Error("Only Alphabets are allowed");
                Swal.fire("Only Alphabets are allowed");
            }
        }
    },
    username: {type : String,
        unique : true,
        validate(value){
            if(!validator.isAlphanumeric(value)){
                throw new Error("Only Alphabets are allowed");
            }
        }
    },
    email: {type : String,
        unique : true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Only Alphabets are allowed");
            }
        }
    },
    phone: String
})

const user= mongoose.model('userCollection', userModel, 'userCollection');

export default user;