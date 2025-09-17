import express from "express";
import { 
         getAllContacts,
         getMessagesByUserId, 
         sendMessage,
         getChatPartners,
       } from "../controllers/message.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { arcjetProtection } from "../middleware/arcjet.middleware.js";
    
   const router = express.Router();

   router.use(arcjetProtection, protectRoute);
   router.get("/contacts", protectRoute, getAllContacts);
   router.get("/chats", protectRoute, getChatPartners);
   router.get("/:id", protectRoute, getMessagesByUserId);
   router.post("/send/:id", protectRoute, sendMessage);
export default router;