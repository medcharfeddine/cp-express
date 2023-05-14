const express = require("express");

const app = express();

// app.use(express.static("Pages"));
// app.use(express.static(path.join(__dirname, "Pages")));

//axios request

// Custom middleware
const checkTime = (req, res, next) => {
  const now = new Date();
  const dayOfWeek = now.getDay();
  const hourOfDay = now.getHours();
  if (dayOfWeek >= 1 && dayOfWeek <= 5 && hourOfDay >= 9 && hourOfDay < 17) {
    next();
  } else {
    res.send(
      "Sorry, this web application is only available during working hours (Monday to Friday, from 9 to 17)."
    );
  }
};

// Routes
app.get("/", checkTime, (req, res) => {
  res.sendfile("Pages/index.html");
});

app.get("/ourservices", checkTime, (req, res) => {
  res.sendfile("Pages/ourServices.html");
});

app.get("/contact", checkTime, (req, res) => {
  res.sendfile("Pages/contactUs.html");
});

// Start the server
app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
