import userModel from '../Schema/userModel.js'

export const addUser = async(request, response) => {
    const user= request.body;

    const newUser=new userModel(user);

    try{
        await newUser.save();
        response.status(201).json(newUser);

    }catch(err){
        response.status(409).json({message: err.message});

    }

}

export const getUsers = async (request, response) => {
    try{

        const userData= await userModel.find({});
        response.status(200).json(userData);

    }catch(err){
        response.status(404).json({message : error.message});
    }
} 


export const getUser = async (request, response) => {
    try{

        // const user= await userModel.find({_id : request.params.id});
        const user = await userModel.findById(request.params.id)
        response.status(200).json(user);

    }catch(err){
        response.status(404).json({message : error.message});
    }
} 

export const editUser = async (request, response) => {

    let user = request.body;
    const editData= new userModel(user);

    try{

        await userModel.updateOne({_id : request.params.id }, editData);
        response.status(201).json(editData);

    }catch(err){
        response.status(409).json({message : err.message})
    }
    
}

export const deleteUser = async (request, response) => {
    try{

        await userModel.deleteOne({_id: request.params.id})
        response.status(201).json({message: "User Deleted Successfully"});

    }catch(err){
        response.status(409).json({message : err.message})
    }
}