import Doctor from "../models/DoctorSchema.js";
import User from "../models/UserSchema.js";
import jwt from 'jsonwebtoken';

// Authenticate Middleware
export const authenticate = async (req, res, next) => {
    const authToken = req.headers.authorization;

    if (!authToken || !authToken.startsWith("Bearer")) {
        return res.status(401).json({ success: false, message: "No token, authorization denied" });
    }

    try {
        const token = authToken.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.userId = decoded.userId;
        req.role = decoded.role;
        

        next();
    } catch (err) {
        if (err.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'Token is expired' });
        }

        return res.status(401).json({ success: false, message: "Invalid token" });
    }
};


// Restrict Middleware (Role-based)
export const restrict = (roles) => (req, res, next) => {
    const { userId, role } = req;

    console.log("Restrict Middleware - User ID:", userId, "Role:", role);

    if (!userId || !role) {
        return res.status(401).json({ success: false, message: "Unauthorized: No user info found" });
    }

    if (!roles.includes(role)) {
        return res.status(403).json({ success: false, message: "You're not authorized" });
    }

    next();
};
