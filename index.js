import express from "express";
import router from "./routes/routes.js";

const app = express();
const port = 3001;

app.use(express.json());

//routing
app.use("/api", router);


app.listen(port, (error) => {
  if (error) {
    console.error("Error running in th server", error);
  } else {
    console.log("Server is starting on port");
  }
});

