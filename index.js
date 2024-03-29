import express from "express";
import connectDb from "./db/Connect.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoute from "./Route/userRoute.js";
const app = express();

app.use(cors());
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16" }));
app.use(cookieParser());

// api Routes
app.use("/api/v1/user", userRoute);

app.use("/", (req, res) => {
  res.send("<h1>Yout tube clone</h1>");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server is listing on ${PORT}`);
});

connectDb();
