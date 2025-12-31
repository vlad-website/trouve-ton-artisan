const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');

const logger = require("./middleware/logger");


const app = express();
app.use(cors());
app.use(express.json());

app.use(logger);


app.use("/categories", require("./routes/categorie.routes"));
app.use("/specialites", require("./routes/specialite.routes"));
app.use("/artisans", require("./routes/artisan.routes"));


// Test DB connection
sequelize.authenticate()
  .then(() => console.log("✅ Connected to MySQL"))
  .catch(err => console.error("❌ DB error: ", err));

// Routes
app.get('/', (req, res) => {
  res.send("API is running 🚀");
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});