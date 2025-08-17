const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./quiz_master.db", (err) => {
  if (err) {
    console.error("❌ DB connection failed:", err.message);
  } else {
    console.log("✅ Connected to SQLite database.");
  }
});

module.exports = db;
