const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
const PORT = 3001;

app.use(cors());

app.get("/api/rooms/:id", async (req, res) => {
  try {
    const roomId = req.params.id;
    const response = await axios.get(`${API_BASE_URL}/rails/user_profile/rooms/room/${roomId}`);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching room details:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
