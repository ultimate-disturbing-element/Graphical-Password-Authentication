    import express from "express";
    import Model from "../models/model.js";

    const router = express.Router();

    // Post
    router.post("/signup", async (req, res) => {
        const data = new Model({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
        })
        try {
            const dataToSave = await data.save();
            res.status(200).json(dataToSave)
        }
        catch (error) {
            res.status(400).json({message: error.message})
        }
    });

    // Get by email Method.
    router.get('/signIn/:email/:password', async (req, res) => {
        try {
            const { email, password } = req.params;
        const user = await Model.findOne({ email });

        if (user) {
            if (user.password ==+ password) {
                res.json({ message: "SignIn Successfully" });
            } else {
                res.status(401).json({ message: "SignIn Failed: Incorrect password" });
            }
        } else {
            res.status(401).json({ message: "SignIn Failed: User not found" });
        }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    });
    

    export default router;
