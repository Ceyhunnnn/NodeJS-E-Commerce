require("express-async-errors");
require("dotenv").config();
require("./src/database/databaseConnection");
const errorHandlerMiddleware = require("./src/middlewares/errorHandlers");
const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const router = require("./src/routes");
const cors = require("cors");
const corsOptions = require("./src/helpers/corsOptions");

app.use(express.json());
app.use(express.json({ limit: "50mb" }));
app.use(
  express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 })
);
app.use(cors(corsOptions));
app.use("/api", router);
app.use(errorHandlerMiddleware);
app.use("/profile", express.static("upload/images"));

app.listen(port, () => console.log(`Server is running in port : ${port}`));
("f");
