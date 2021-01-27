const express = require("express");
const products = require("./data/products");
const app = express();

app.get("/", (req, res) => {
  res.send("hello from the server ... Node API is Running");
});

app.get("/api/products", (req, res) => {
  res.status(200).json({
    status: "success",
    requestedAt: req.requestTime,
    data: {
      products: products,
    },
  });
});

app.get("/api/products/:id", (req, res) => {
  const id = req.params.id;
  // console.log("req.params.id ", req.params.id);
  const product = products.find((p) => p._id === id);

  res.status(200).json({
    status: "success",
    requestedAt: req.requestTime,
    data: {
      product,
    },
  });
});

app.listen(5000, console.log("server running on Port 5000 ..."));
