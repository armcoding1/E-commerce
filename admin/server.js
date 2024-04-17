const { connect } = require("mongoose");
const app = require("./app");
require("dotenv").config();

async function startServer() {
    const DB_URL = process.env.DB_URL;
    const PORT = process.env.PORT;

    await connect(DB_URL);
    console.log("DB is successfuly connected");

    app.listen(PORT, () => {
        console.log(`Listening on http://localhost:${PORT}`);
    });
};

startServer();