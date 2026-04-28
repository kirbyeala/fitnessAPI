require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const userRoutes = require("./routes/user");
const workoutRoutes = require("./routes/workout");

const app = express();

const PORT = process.env.PORT || 4000;


// Middleware
app.use(cors());

app.use(express.json());


// Routes
app.use("/users", userRoutes);

app.use("/workouts", workoutRoutes);


// Debug check
console.log(process.env.MONGO_URI);


// Mongo Connection
mongoose.connect(process.env.MONGO_URI)

.then(()=>{

console.log("Connected to MongoDB");

app.listen(PORT,()=>{

console.log(`Server running on port ${PORT}`);

});

})

.catch((err)=>{

console.log("MongoDB connection error:",err);

});

// [SECTION] Server Listening
if(require.main === module) {
	// http:localhost:4000
	app.listen(process.env.PORT || 3000, () => console.log(`API is now online on port ${process.env.PORT || 3000}`)); 
};

// In creating APIS, exporting modules in the "index.js" can be ommited
module.exports = {app, mongoose};