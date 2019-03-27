const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const moment = require("moment");
const test = require("./routes/test.route"); // Imports routes for the punches
const users = require("./routes/api/usersRoute");
const dashboard = require("./routes/api/dashboardRoute");
const cors = require("cors");
const Collaborator = require('./routes/api/collaboratorRoute');
// const users = require('./routes/api/users');
// const profile = require('./routes/api/profile');
// const posts = require('./routes/api/posts');

const app = express();

//Enable cors
app.use(cors());

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Moment Config
moment.updateLocale("es", {
  monthsShort: [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic"
  ]
});

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// // // Passport Config
require("./config/passport")(passport);

// // // // Use Routes
// //ROUTES
//app.use("/api", test);
app.use("/api/users", users);
app.use("/api/dashboard", dashboard);
app.use("/api/collaborators", Collaborator);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
