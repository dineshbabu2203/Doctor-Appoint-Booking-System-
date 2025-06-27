import Doctor from '../models/DoctorSchema.js'
import User from '../models/UserSchema.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'





const genrateToken = (user) => {

    const secret = process.env.JWT_SECRET;
    return jwt.sign({ userId: user._id, role: user.role }, secret, { expiresIn: '15d' });

}


export const register = async (req, res) => {
    const { email, password, name, role, photo, gender } = req.body
    try {
        let user = null

        if (role === 'patient') {
            user = await User.findOne({ email })
        }
        else if (role === 'doctor') {
            user = await Doctor.findOne({ email })
        }


        //user exsits
        if (user) {
            return res.status(400).json({ message: "user already exsist" })
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        if (role === 'patient') {
            user = new User({
                name, email, password: hashedPassword, photo, gender, role
            })
        }
        if (role === 'doctor') {
            user = new Doctor({
                name, email, password: hashedPassword, photo, gender, role
            })
        }

        await user.save()

        res.status(200).json({ succes: true, message: "user created" })




    } catch (err) {

        res.status(500).json({ succes: true, message: "user  not created" })
    }
}


export const login = async(req, res) => {
    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email }) || await Doctor.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);

        if (!isPasswordMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = genrateToken(user);

        const { password: pwd, role, appointments, ...rest } = user._doc;
        res.status(200).json({
            status: true,
            message: "Successfully Login",
            token,
            role,
            data: { ...rest }
        });
    } catch (err) {
        console.error("Login Error:", err);
        res.status(500).json({ message: "Failed to Login" });
    }
};

