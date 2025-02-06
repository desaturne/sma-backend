import { Router } from "express";
import authRoute from "./auth.route.js"; // Import the authRoute
import  authentication  from "../middlewares/authentication.js";
const router = Router();

router.use("/auth", authRoute); // Now authRoute is defined

router.use(authentication); // Assuming authentication is defined elsewhere

export default router;