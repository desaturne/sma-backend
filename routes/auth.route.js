import {Router} from "express";
import { login, register, getUser } from "../services/auth.service.js";


const router = Router()

router.post("/login",async (req,res)=>{
    console.log("Request body: ", req.body)
    try{
        const result = await login(req)
        res.send(result)
    }catch(error){
        console.log("Error at login: ", error)
        res.status(400).send({
            message:"Error Occured",
            error:error
        });
    }
})

router.get("/users/:userId, (req,res)=>")

router.post("/register",async (req,res)=>{
    try{
        const result = await register(req)
        res.send(result)
    }catch(error){
        console.log("error: ", error)
        res.status(400).send({
            message:"Error Occured",
            error:error
        });
    }
})

router.post("/users/:userId",async (req,res)=>{
    try{
        const result = await getUser(req)
        res.send(result)
    }catch(error){
        console.log("Error at login: ", error)
        res.status(400).send({
            message:"Error Occured",
            error:error
        });
    }
})

export default router;