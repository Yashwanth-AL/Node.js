//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

let app = express();
let port = 3000;
app.use(bodyParser.urlencoded({extended: true}));

let isAuthorised = false;
function checkPassword(req, res, next){
  const password = req.body["password"];
  if(password == "ILoveProgramming"){
    isAuthorised = true;
  }
  next();
};
app.use(checkPassword);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
  if (isAuthorised) {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.sendFile(__dirname + "/public/index.html");
    //Alternatively res.redirect("/");
  }
});

app.listen(port, () => {
  console.log("Listening on port : " + port);
})