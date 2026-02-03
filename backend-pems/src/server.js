import dotenv from "dotenv";
import connectDB from "./config/db.js";
import app from "./app.js"
dotenv.config({path: "./.env"});

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`server connect successfullon port ${process.env.PORT}`);
        })
    })
    .catch((error) => {
        console.log("server connection field", error)
    })
