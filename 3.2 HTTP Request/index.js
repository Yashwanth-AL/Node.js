import express from "express"

let app = express();
let port = 2300

app.get("/", (req, res) => {
  console.log(req.rawHeaders);
  res.send("<h1>Hello World!!</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>This is about page</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>This is contact page</h1>");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});