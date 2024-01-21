const express = require("express");
const cors = require("cors");
const globalErrorHandler = require("./controllers/errorController");

const morgan = require("morgan");
const AppError = require("./utils/appError");
const vendorRoutes = require("./routes/vendorRoutes");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cors());

console.log(process.env.NODE_ENV);
// 1) MIDDLEWARES
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 3) ROUTES

app.use("/api/v1/vendors", vendorRoutes);

app.use(globalErrorHandler);

module.exports = app;
