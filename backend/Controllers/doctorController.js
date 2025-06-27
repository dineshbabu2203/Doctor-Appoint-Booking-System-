import BookingSchema from '../models/BookingSchema.js';
import Doctor from '../models/DoctorSchema.js';

export const updateDoctor = async(req,res) =>{
    const id = req.params.id;

    try{
        console.log(id)
        console.log(req.body)
        const updateDoctor = await Doctor.findByIdAndUpdate(
            id,
            {$set:req.body},
            {new:true, runValidators:true}
               
        )

        if(!updateDoctor){
            return res.status(404).json({ success:false, message:"Doctor not found"})
        }

        res.status(200).json({succes:true,message:"succesfully updated",data:updateDoctor})
    }catch(err){
        console.error("Error updating doctor:",err)
        res.status(500).json({succes:false,message:"failed to  update"})
    }


}
export const deleteDoctor = async(req,res) =>{
    const id = req.params.id;

    try{
       await Doctor.findByIdAndDelete(
            id
        )

        res.status(200).json({succes:true,message:"succesfully deleted"})
    }catch(err){
        res.status(500).json({succes:false,message:"failed to  delete"})
    }


}
export const getSingleDoctor = async(req,res) =>{
    const id = req.params.id;

    try{
        const doctor = await Doctor.findById(
            id
               
        ).populate("reviews").select("-password")

        res.status(200).json({success:true,message:"Doctor found",data:doctor})
    }catch(err){
        res.status(303).json({success:false,message:"no Doctor found"})
    }


}
export const getAllDoctor = async(req,res) =>{
    

    try{
         
        const {query} = req.query;
        let doctors;

        if(query){
            doctors = await Doctor.find({
                isApproved:"approved",
                $or:[
                    {name:{$regex:query,$options:"i"}},
                    {specialization:{$regex:query,$options:"i"}},
                ],
            }).select("-password")
        }else{
            doctors = await Doctor.find({isApproved:"approved"}).select("-password")
        }


        

        res.status(200).json({succes:true,message:"Doctors found",data:doctors})
    }catch(err){
        res.status(303).json({succes:false,message:"no Doctors found"})
    }


} 



export const getDoctorProfile = async(req,res)=>{
     const doctorId  = req.userId
    
        try {
            const doctor = await Doctor.findById(doctorId)
            console.log(doctor)
    
            if(!doctor){
                return res.status(404).json({succes:false,message:'Doctor not found'})
            }
    
            const {password,...rest} = doctor._doc
            const appointments = await BookingSchema.find({doctor:doctorId}).lean()
            console.log(appointments)
       
    
            res.status(200).json({success:true , message:'Profile info is getting ',data:{...rest,appointments}})
    
        } catch (err) {
            res.status(500).json({succes:false,message:"Something went wrong "})
        }
    
}