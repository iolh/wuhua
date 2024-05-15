const fs = require("node:fs");
const path = require("node:path");

console.log(path.resolve("../course.md"));
fs.open(path.resolve(__dirname, "../course.md"), "r", (err, fd) => {
  // fd is our file descriptor
  console.log(fd);
  fs.readFile(fd)
});
