import prisma from "../lib/prisma.js";
import bcrypt from "bcrypt";


export const getUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.status(200).json(users)
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to fetch all users." })
    }
}


export const getUser = async (req, res) => {
    try {

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to fetch the user." })
    }
}


export const updateUser = async (req, res) => {
    const id = req.params.id;
    const tokenUserId = req.userId;
    const { password, avatar, ...inputs } = req.body;

    if (id !== tokenUserId) {
        return res.status(403).json({ message: "Cannot Update user: NOT AUTHORIZED !" });
    }
    let updatedPassword = null;
    try {
        if (password) {
            updatedPassword = await bcrypt.hash(password, 10);
        }
        const updatedUser = await prisma.user.update({
            where: { id },
            data: {
                ...inputs,
                ...(password && { password: updatedPassword }),
                ...(avatar && { avatar }),
            },
        });
        const { password: userPassword, ...newUpdatedUser } = updateUser;
        res.status(200).json(newUpdatedUser);
    } catch (err) {
        res.status(500).json({ message: "Failed to update user." })
    }
}


export const deleteUser = async (req, res) => {
    const id = req.params.id;
    const tokenUserId = req.userId;
    if (id !== tokenUserId) {
        return res.status(403).json({ message: "Cannot Delete user: NOT AUTHORIZED !" });
    }
    try {
        await prisma.user.delete({
            where: { id }
        })
        res.status(200).json({ message: "User deleted !" })
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to delete the user." })
    }
}