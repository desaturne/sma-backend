import { Router } from "express";
import { createPosts, listPosts } from "../services/post.service.js";

const router = Router()
//localhost:3001/api/posts  => post request
router.post("/", async (req, res) => {
    try {
        const result = await createPosts(req)
        res.send(result)
    } catch (error) {
        console.log("Error at login: ", error)
        res.status(400).send({
            message: "Error Occured",
            error: error
        });
    }
})

router.get("/", async (req, res) => {
    try {
        const result = await listPosts(req)
        res.send(result)
    } catch (error) {
        console.log("Error at login: ", error)
        res.status(400).send({
            message: "Error Occured",
            error: error
        });
    }
})

export default router;