import User from "../model/User";
import express from "express";

const router = express.Router();

export const getAllUser = async (req, res, next) => {
    try {
        const users = await User.find();

        if (users.length === 0) {
            return res.status(404).json({ message: "No items found!" });
        }

        return res.status(200).json(users);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "An error occurred while fetching users." });
    }
};

export const signup = async (req, res, next) => {
    const { name, email, password } = req.body;
    let existingUser;

    try {
        existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: "User Already Exists! Login Instead" });
        }

        const user = new User({
            name,
            email,
            password,
        });

        await user.save();

        return res.status(201).json({ user });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "An error occurred while creating a user." });
    }
};

export default router;
