const axios = require("axios");

const TOKEN = "PASTE_YOUR_ACCESS_TOKEN_HERE";

async function Log(stack, level, pkg, message) {
    try {
        const response = await axios.post(
            "http://20.207.122.201/evaluation-service/logs",
            {
                stack: stack,
                level: level,
                package: pkg,
                message: message
            },
            {
                headers: {
                    Authorization: `Bearer ${TOKEN}`
                }
            }
        );

        console.log("Log sent:", response.data);
    } catch (error) {
        console.log("Logging failed:", error.message);
    }
}

module.exports = Log;
