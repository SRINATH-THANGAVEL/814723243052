const express = require("express");
const Log = require("./log");

const app = express();
app.use(express.json());

app.get("/test", async (req, res) => {
    try {
        await Log("backend", "info", "route", "Test API called");
    } catch (err) {
        console.error("Logging failed:", err.message);
    }
    res.send("Logging middleware working!");
});

app.get("/error", async (req, res) => {
    try {
        await Log("backend", "error", "handler", "Something went wrong");
    } catch (err) {
        console.error("Logging failed:", err.message);
    }
    res.send("Error logged!");
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});