import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
let petName = "";

app.use(bodyParser.urlencoded({extended: true}));

function petNameGenerator(req, res, next){
  console.log(req.body);
  petName = req.body["name"] + " alias " +  req.body["pet"];
  next();
}

app.use(petNameGenerator);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  res.send(`<h1>The Pet name generated is : </h1><h2>${petName}</h2>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
