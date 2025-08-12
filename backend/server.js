import express from "express";
import { products } from "./data/products.js";
import dotenv from "dotenv";
import lodash from "lodash";
import cors from "cors";
const { isEmpty } = lodash;
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Api is running");
});
app.get("/api/products", (req, res) => {
  try {
    res.send(products);
  } catch (error) {
    console.error("Error signing up user:", error);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/api/products/:id", (req, res) => {
  const product = products.find((item) => item._id === req.params.id);
  try {
    if (!isEmpty(product)) {
      res.send(product);
    } else {
      res.status(404).send("Product not found");
    }
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
