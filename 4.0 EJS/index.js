import express from "express";

const app = express();
let port = 3000;

app.get("/", (req, res) => {
  const today = new Date();
  const day = today.getDay();
  console.log(day);
  if(day === 0 || day === 6){
    res.render("index.ejs", {
      dayType: "weekend", 
      advice: "its time to take rest and enjoy",
    });
  } else {
    res.render("index.ejs", {
      dayType: "weekday", 
      advice: "its time to work hard",
    });
  }
});

app.listen(port, () => {
  console.log(`server running on port ${port}.`);
});