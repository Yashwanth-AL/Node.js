import express from "express"
let app = express();
let port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});