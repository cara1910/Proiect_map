const express = require("express");
const path = require("path");
const { analyzeBinaryTree } = require("./arbore");

const app = express();
const PORT = 3000;

// Middleware pentru a servi fișiere statice din folderul frontend
app.use(express.static(path.join(__dirname, "../frontend")));

// Endpoint pentru analiza arborilor binari
app.post("/analyze", (req, res) => {
  const { type, numbers } = req.body;
  const numArray = numbers.split(",").map((num) => parseInt(num, 10));

  if (numArray.some(isNaN)) {
    return res.status(400).json({ message: "Input invalid" });
  }

  const result = analyzeBinaryTree(numArray, type);
  res.json({ message: result });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
