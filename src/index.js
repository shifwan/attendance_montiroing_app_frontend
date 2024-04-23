import express from "express";
import v1Router from "./routes.js";

const app = express();
const PORT = process.env.PORT || 5555;


app.use(express.json());
app.use("/api/v1", v1Router);

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
