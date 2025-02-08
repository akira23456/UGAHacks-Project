const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5035;

app.use(cors()); // Allows frontend to access backend
app.use(express.json()); // Enable JSON body parsing

// Mock livestream data
const livestream = {
  id: 1,
  title: "Lofi Girl 24/7",
  publicPreviewUrl: "https://www.youtube.com/embed/jfKfPfyJRdk",
  privateStreamUrl: "https://private-stream.com/lofi", // Future paywall stream
  price: 0
};

// API Route to Get the Livestream
app.get("/api/livestream", (req, res) => {
  res.json(livestream);
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});
