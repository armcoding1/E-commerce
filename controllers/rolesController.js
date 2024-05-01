import User from "../models/userModel.js";

export const restrictTo = async (req, res, next, ...roles) => {
        const userId = req.cookies.user; 

        const user = await User.findById(userId);

        if (!roles.includes(user.role)) {
            return res.status(403).send("Access denied. You do not have permission to perform this action.");
        }

        next(); 
};
