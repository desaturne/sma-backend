import { Router } from "express";
import authRoute from "./auth.route.js"; // Import the authRoute
import postRouter from "./post.route.js"; // Import the postRoute
import  authentication  from "../middlewares/authentication.js";

const router = Router();

router.use("/auth", authRoute); // Now authRoute is defined

router.use(authentication); // Assuming authentication is defined elsewhere

router.use("/post", postRouter); // Now postRouter is defined

export default router;