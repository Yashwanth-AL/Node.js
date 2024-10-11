const fs = require("fs");

fs.writeFile("message.txt", "Hello i am Yashwanth A L", (err) => {
  if (err) throw err;
  console.log("file modified successfully");
});

fs.readFile("./message.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
}); 