const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const bodyParser = require("body-parser");
const db = require("./models/index");
// Route Requiring
const indexRoutes = require("./routes/index");
const accountRoutes = require("./routes/account");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: false} ) );
app.use(express.static(__dirname + "/public"));

// Sequelize Connection Test
db.sequelize.authenticate().then(() => {
    console.log("Database connection has been established successfully.");
    }).catch(err => {
    console.error("Unable to connect to the database:", err);
});

// Routes
app.use(indexRoutes);
app.use(accountRoutes);
app.get("*", function(req, res){
    res.send("Page does not exist");
});

app.listen(PORT, () => {
    console.log("NoSpyAcc server has started, listening on port " + PORT);
});