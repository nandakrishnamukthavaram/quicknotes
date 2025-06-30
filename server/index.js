const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const notesRouter = require('./routes/notes');
app.use('/api/notes', notesRouter);

app.get('/',(req,res) => {
   res.json({ message: '👋 Hello from QuickNotes Backend!' });
});

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
})
.then(() => console.log("Mongodb connected"))
.catch(err=>console.log("connection error",err));

app.listen(process.env.PORT,()=>{
    console.log(`Server running on http://localhost:${process.env.PORT}`)
})