const db = require("../config/db");

db.run(`CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  email TEXT UNIQUE
)`);

const User = {
  getAll: (cb) => db.all("SELECT * FROM users", [], cb),
  create: (name, email, cb) => {
    db.run("INSERT INTO users (name, email) VALUES (?, ?)", [name, email], function(err) {
      cb(err, { id: this.lastID, name, email });
    });
  }
};

module.exports = User;
