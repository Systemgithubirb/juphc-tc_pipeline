const express = require("express");
const path = require("path");
const { calculateTax } = require("./src/taxCalculator");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/health", (req, res) => {
  res.status(200).json({ status: "UP", service: "tax-calculator" });
});

app.post("/api/calculate", (req, res) => {
  try {
    const income = Number(req.body.income);
    const result = calculateTax(income);

    res.status(200).json({
      success: true,
      ...result
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Tax Calculator running on port ${PORT}`);
  });
}

module.exports = app;