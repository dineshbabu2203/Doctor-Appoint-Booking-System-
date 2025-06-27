import User from '../models/UserSchema.js';
import Booking from '../models/BookingSchema.js';
import Doctor from '../models/DoctorSchema.js'

export const updateUser = async(req,res) =>{
    const id = req.params.id;

    try{
        const updatedUser = await User.findByIdAndUpdate(
            id,
            {$set:req.body},
            {new:true}
               
        )

        res.status(200).json({succes:true,message:"succesfully updated",data:updatedUser})
    }catch(err){
        res.status(500).json({succes:false,message:"failed to  update"})
    }


}
export const deleteUser = async(req,res) =>{
    const id = req.params.id;

    try{
       await User.findByIdAndDelete(
            id
               
        )

        res.status(200).json({succes:true,message:"succesfully deleted"})
    }catch(err){
        res.status(500).json({succes:false,message:"failed to  delete"})
    }


}
export const getSingleUser = async(req,res) =>{
    const id = req.params.id;

    try{
        const user = await User.findById(
            id
               
        ).select("-password")

        res.status(200).json({succes:true,message:"user found",data:user})
    }catch(err){
        res.status(303).json({succes:false,message:"no user found"})
    }


}
export const getAllUser = async(req,res) =>{
    

    try{
        const user = await User.find({}).select("-password")

        res.status(200).json({succes:true,message:"users found",data:user})
    }catch(err){
        res.status(404).json({succes:false,message:"no users found"})
    }


}


export const getUserProfile = async(req,res)=>{
    const userId = req.userId

    try {
        const user = await User.findById(userId)
        

        if(!user){
            return res.status(404).json({succes:false,message:'USer not found'})
        }

        const {password,...rest} = user._doc
        
        res.status(200).json({success:true , message:'Profile info is getting ',data:{...rest}})

    } catch (err) {
        console.error(" Error in getUserProfile:", err);
        res.status(500).json({succes:false,message:"Something went wrong "})
    }

}


export const getMyAppoints = async(req,res)=>{
    try {
        // 1 =>  reteive appointments from booking
        const bookings = await Booking.find({user:req.userId})
 


        // 2 =>  extract doct id from  appointments from booking
        const doctorIds = bookings.map(el=>el.doctor.id)

        // 3 =>  retrive  doctors using doctor ids
        const doctors = await Doctor.find({_id: {$in:doctorIds}}).select('-password')


        res.status(200).json({success:true,message:"appointments are getting ",data:doctors})



    } catch (err) {
        
        res.status(500).json({succes:false,message:"Something went wrong  cannot get "})
    }
}