import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma from '../lib/prisma.js';

export const register = async (req, res) => {
    const { username, email, password } = req.body;
    console.log("register");

    try {

        const hashedPassword = await bcrypt.hash(password, 10);
        console.log(hashedPassword);

        //CREATE A NEW USER AND SAVING TO DB
        const newUser = await prisma.user.create({
            data: {
                username: username,
                email: email,
                password: hashedPassword,
            },
        });
        console.log(newUser);
        res.status(201).json({ message: "User created successfully" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to add user" });
    }
};


export const login = async (req, res) => {

    const { username, password } = req.body;
    try {
        //CHECK IF THE USER EXISTS
        const user = await prisma.user.findUnique({
            where: { username }
        })
        if (!user) return res.status(401).json({ message: "Invalid Credentials" });

        //CHECK IF PASSWORD IS CORRECT
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) return res.status(401).json({ message: "Password Incorrect" });

        //GENERATE COOKIE TOKEN AND SEND TO THE USER
        const age = 1000 * 60 * 60 * 24 * 7;
        // res.setHeader("Set-Cookie", "test=" + "myValue").json({ message: "success" });
        const token = jwt.sign(
            {
                id: user.id,
                isAdmin: true,
            },
            process.env.JWT_SECRET_KEY,
            { expiresIn: age });
        const { password: userPassword, ...userInfo } = user;
        res.cookie("token", token, {
            httpOnly: true,
            maxAge: age,
            // secure: true
        }).status(200).json(userInfo);

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to login." })
    }
}


export const logout = (req, res) => {
    res.clearCookie("token").status(200).json({ message: "Logged out !" })
}