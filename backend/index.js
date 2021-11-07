import express from "express";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: "*",
  })
);

const PORT = 5002;

app.get("/api", (req, res) => {
  res.json({ message: "Hello from API", success: true });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
