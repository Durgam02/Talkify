import User from "../models/user.model.js ";

export const getUsersForSidebar = async (req, res) => {
    try {
        
        const loggedInUserId = req.user._id;

        // find all users in the database, if you want to see yourself in chats keep the find brackets empty [.find()]
        const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }) .select("-password")

        res.status(200).json(filteredUsers); 

    } catch (error) {
        console.error("Error in getUsersForSidebar:", error.message);
        res.status(500).json({ error: "Internal server error"});
    }
}