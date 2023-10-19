const signupNewUser = (request,response)=>{
    const{regno,firstname,lastname,email,password}=request.body

    data.map(iterator=>{
        if(iterator.regno !== regno && iterator.password !== password)
        {
            return response.status(200).json({message:"Successfully Registered!!"})
        }
        else if(iterator.regno === regno)
        {
            return response.status(401).json({message:"Email already Registered"})
        }
        else if(iterator.password === password){
            return response.status(402).json({message:"Use another new password"})
        }
        return response.status(401).json({message:"Username & Password already exist"})
    })
}


module.exports = {signupNewUser}