const { spawn } = require("child_process");

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    console.log("POST /solve called");
    res.send("RubExpert Backend is Running 🚀");
});
app.post("/solve", (req, res) => {
    const { cube } = req.body;

    console.log("Received cube:", cube);

    const python = spawn("python", ["solver.py", cube]);

    let solution = "";
    let error = "";

    python.stdout.on("data", (data) => {
        solution += data.toString();
    });

    python.stderr.on("data", (data) => {
        error += data.toString();
    });

    python.on("close", (code) => {
        if (code !== 0) {
            return res.status(500).json({
                success: false,
                error: error.trim(),
            });
        }

        res.json({
            success: true,
            solution: solution.trim(),
        });
    });
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});