// import modules
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// import server
import app from "./app.js";

// function to start server
async function startServer() {
    const DB_URL = process.env.DB_URL;
    const PORT = process.env.PORT;

    await mongoose.connect(DB_URL);
    console.log("DB is successfuly connected");
    app.listen(PORT, () => {
        console.log(`Listening on http://localhost:${PORT}`);
    });
};

startServer();