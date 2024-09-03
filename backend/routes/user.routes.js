import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUsersForSidebar } from "../controllers/user.controller.js";

const router = express.Router();

// list of chats on left side
router.get("/",protectRoute , getUsersForSidebar)

export default router;