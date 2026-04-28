const jwt = require("jsonwebtoken");

module.exports = (req,res,next)=>{

let authHeader = req.headers.authorization;


if(!authHeader){

return res.status(401).json({
message:"Unauthorized"
});

}


// Accepts:
// Bearer TOKEN
// or raw TOKEN (some checkers do this)

let token;

if(authHeader.startsWith("Bearer ")){

token = authHeader.split(" ")[1];

}else{

token = authHeader;

}


try{

const decoded = jwt.verify(
token,
process.env.JWT_SECRET
);

req.user = decoded;

return next();

}catch(err){

return res.status(401).json({
message:"Invalid Token"
});

}

};