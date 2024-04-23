require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });
const express = require("express");
const cors = require("cors");
const path = require("path");
const routes = require("./src/route");


const app = express();
const PORT = process.env.PORT || 3004;


app.use(cors());
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());



// connecting with database
const mongoose = require("mongoose");
mongoose.connect(process.env.DB_STRING
).then(()=>{
    console.warn("db connection done")
})


app.get("/", (req, res) => res.send(`Server listing on port ${PORT}`));
app.use("/api", routes);
app.all("*", (req, res) => res.status(404).json({ error: "404 Not Found" }));




const server = app.listen(PORT, () =>
  console.log(`Server running on ${process.env.BACKEND_URL}`)
);

