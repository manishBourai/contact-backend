import express from "express";
import { createContact, deleteContact, getContacts, updateContact } from "../controllers/contactController.js";
import { protect } from "../middleware/isLogin.js";

const router = express.Router();

router.post("/",protect, createContact);
router.get("/",protect, getContacts);
router.delete("/:id",protect,deleteContact)
router.put("/:id",protect,updateContact)

export default router;
