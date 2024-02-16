import express from "express";
import passwordRoutes from "./routes/router.js";
const app = express();

app.use(express.json());
const PORT = 3000;

app.use("/", passwordRoutes);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
