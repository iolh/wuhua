const fs = require("node:fs");
const fsp = require("node:fs/promises");
const path = require("node:path");

const filePath = path.join(__dirname, "../course.md");
console.log("filePath:", filePath);

// 异步 callback
fs.stat(filePath, (err, stats) => {
  if (err) {
    console.error(err);
  }
  // we have access to the file stats in `stats`
  logStats("异步 callback", stats);
});
console.log("1");

// 同步调用
try {
  const stats = fs.statSync(filePath);
  logStats("同步调用", stats);
} catch (err) {
  console.error(err);
}
console.log("2");

// 异步 promise
async function statFile() {
  try {
    const stats = await fsp.stat(filePath);
    logStats("异步 promise", stats);
    console.log(3);
  } catch (err) {
    console.log(err);
  }
}

statFile();
console.log(4);

// 输出
// 1 同步调用 2 4 异步callback 异步promise 3

function logStats(title, stats) {
  console.log("==============");
  console.log(title);
  console.log("stats", stats);
  console.log("stats.isFile()", stats.isFile());
  console.log("stats.isDirectory()", stats.isDirectory());
  console.log("stats.isSymbolicLink()", stats.isSymbolicLink());
  console.log("stats.size()", stats.size);
  console.log("==============");
}
