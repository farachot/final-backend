const express = require("express");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 2000;

const db = require("./Config/db");
const allRoutes = require("./Routers");

db.then(() => {
  console.log("Berhasil Connect Ke MongoDB");
}).catch(() => {
  console.log("gagal konek ke mongoDB");
});

app.use(cors());
app.use(express.json());
//diambil dari index.js
app.use(allRoutes);

app.listen(PORT, () => {
  console.log("server running on port " + PORT);
});
