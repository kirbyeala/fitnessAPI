const Workout = require("../models/Workout");



// ADD WORKOUT
module.exports.addWorkout = async(req,res)=>{

try{

const { name, duration } = req.body;


if(!name || duration === undefined){

return res.status(400).json({

message:"Name and duration are required"

});

}


const newWorkout = await Workout.create({

name: name,

duration: duration,

userId: req.user.id,

status:"pending"

});


// return raw created workout document
return res.status(201).json(newWorkout);


}catch(err){

return res.status(500).json({

error: err.message

});

}

};




// GET MY WORKOUTS
module.exports.getMyWorkouts = async(req,res)=>{

try{

const workouts = await Workout.find({

userId:req.user.id

});


// return array directly
return res.status(200).json(workouts);


}catch(err){

return res.status(500).json({

error:err.message

});

}

};




// UPDATE WORKOUT
module.exports.updateWorkout = async(req,res)=>{

try{

const updatedWorkout =
await Workout.findOneAndUpdate(

{
_id:req.params.id,
userId:req.user.id
},

req.body,

{
new:true
}

);


if(!updatedWorkout){

return res.status(404).json({

message:"Workout not found"

});

}


return res.status(200).json({

message:"Workout updated successfully",

updatedWorkout: updatedWorkout

});


}catch(err){

return res.status(500).json({

error:err.message

});

}

};




// DELETE WORKOUT
module.exports.deleteWorkout = async(req,res)=>{

try{

const deletedWorkout = await Workout.findOneAndDelete({

_id:req.params.id,
userId:req.user.id

});


if(!deletedWorkout){

return res.status(404).json({

message:"Workout not found"

});

}


return res.status(200).json({

message:"Workout deleted successfully"

});


}catch(err){

return res.status(500).json({

error:err.message

});

}

};




// COMPLETE WORKOUT STATUS
module.exports.completeWorkoutStatus = async(req,res)=>{

try{

const updatedWorkout =
await Workout.findOneAndUpdate(

{
_id:req.params.id,
userId:req.user.id
},

{
status:"completed"
},

{
new:true
}

);


if(!updatedWorkout){

return res.status(404).json({

message:"Workout not found"

});

}


return res.status(200).json({

message:"Workout status updated successfully",

updatedWorkout: updatedWorkout

});


}catch(err){

return res.status(500).json({

error:err.message

});

}

};