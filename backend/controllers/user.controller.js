import User from "../models/User.model.js";

const getUsersForSidebar = async(req , res) => {
    try{
        const loggedInUserId = req.user._id;
        // don't show the user itself in the sidebar it like telegrem that you won't see yourself at the sidebar
        const filteredUsers = await User.find({_id: {$ne: loggedInUserId}}).select("-password");
        res.status(200).json(filteredUsers);

    }catch(error){
        console.log("Error in user controller", error.message);
        res.status(500).json({ error: "Internal server error" })
    }
}
export default getUsersForSidebar;