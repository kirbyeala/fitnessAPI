const router = require("express").Router();

const auth = require("../auth");

const {

addWorkout,
getMyWorkouts,
updateWorkout,
deleteWorkout,
completeWorkoutStatus

} = require("../controllers/workout");


router.post("/addWorkout",auth,addWorkout);
router.get("/getMyWorkouts",auth,getMyWorkouts);
router.patch("/updateWorkout/:id",auth,updateWorkout);
router.delete("/deleteWorkout/:id",auth,deleteWorkout);
router.patch("/completeWorkoutStatus/:id", auth, completeWorkoutStatus);


module.exports = router;