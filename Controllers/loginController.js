const data = require('../Data/userData')

const loginExistingUser = (request,response)=>{
    const{regno,password} = request.body

    data.map(iterator=>{
        if(iterator.regno === regno && iterator.password=== password)
        {
            return response.status(200).json({message:"Successful login"})
        }
    })

    return response.status(401).json({message:"Username/password is incorrect"})
}

module.exports = {loginExistingUser}