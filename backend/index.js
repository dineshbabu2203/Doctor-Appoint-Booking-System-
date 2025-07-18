import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from './Routes/auth.js'
import userRoutes from './Routes/user.js'
import doctorRoute from './Routes/doctor.js'
import bookingRoute from './Routes/booking.js'
import reviewRoute from './Routes/review.js'

dotenv.config()

const app = express()
const port = process.env.PORT;

const corsOptions = {
    origin:true
}


app.get('/',(req,res)=>{
    res.send("APi is working")
})

//database

mongoose.set('strictQuery',false)
const connectDB = async()=>{
    try{
       await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
       console.log('mongodb database is connected ')
    }catch(err){
        console.error('mongodb is connection failed')
    }

}




//middleware
app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions))

app.use('/api/v1/auth',authRoute)
app.use('/api/v1/users',userRoutes)
app.use('/api/v1/doctors',doctorRoute)
app.use('/api/v1/reviews',reviewRoute)
app.use("/api/v1/bookings",bookingRoute)


app.listen(port,()=>{
    connectDB()
    console.log('server is running on port',+port)
})
