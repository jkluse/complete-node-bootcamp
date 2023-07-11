import express from "express";
import { getAllUsers, getUser, updateUser, deleteUser, createUser } from "../controllers/userController.js";

export const router = express.Router();

router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);
