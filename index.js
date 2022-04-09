const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World ");
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/secretdetails", (req, res) => {
  res.json({
    name: "Suraj",
    lastname: "Poddar",
    number: 9815379803,
  });
});

app.get("/contact/:name", (req, res) => {
  res.send("Contact " + req.params.name);
});

app.get("/bootstrap", (req, res) => {
  res.sendFile(path.join(__dirname, "bootstrap.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
