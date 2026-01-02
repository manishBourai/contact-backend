import express from "express";
import { createContact, deleteContact, getContacts, updateContact } from "../controllers/contactController.js";
import { protect } from "../middleware/isLogin.js";

const router = express.Router();

router.post("/", createContact);
router.get("/", getContacts);
router.delete("/:id",deleteContact)
router.put("/:id",updateContact)

export default router;
