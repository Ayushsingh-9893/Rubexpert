const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("RubExpert Backend is Running 🚀");
});
app.post("/solve", (req, res) => {
    const { cube } = req.body;

    console.log("Received cube:", cube);

    res.json({
        success: true,
        message: "Cube received successfully",
        cube: cube
    });
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});