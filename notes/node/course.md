# Node

## 文件操作

### 统计文件信息

异步 callback

```javascript
const fs = require("node:fs");

fs.stat("/Users/joe/test.txt", (err, stats) => {
  if (err) {
    console.error(err);
  }
  // we have access to the file stats in `stats`
});
```

同步调用

```javascript
const fs = require("node:fs");

try {
  const stats = fs.statSync("/Users/joe/test.txt");
} catch (err) {
  console.error(err);
}
```

异步 Promise

```javascript
const fs = require("node:fs/promises");

async function example() {
  try {
    const stats = await fs.stat("/Users/joe/test.txt");
    stats.isFile(); // true
    stats.isDirectory(); // false
    stats.isSymbolicLink(); // false
    stats.size; // 1024000 //= 1MB
  } catch (err) {
    console.log(err);
  }
}

example();
```

常用方法

- `stats.isFile()`
- `stats.isDirectory()`
- `stats.isSymbolicLink()`
- `stats.size`

### 文件路径

提取信息

```javascript
const path = require("node:path");

const notes = "/users/joe/notes.txt";

path.dirname(notes); // /users/joe
path.basename(notes); // notes.txt
path.extname(notes); // .txt
path.basename(notes, path.extname(notes)); // notes
```

路径拼接

```javascript
const name = "joe";
path.join("/", "users", name, "notes.txt"); // '/users/joe/notes.txt'

path.resolve("joe.txt"); // '/Users/joe/joe.txt' if run from my home folder

path.resolve("tmp", "joe.txt"); // '/Users/joe/tmp/joe.txt' if run from my home folder

path.resolve("/etc", "joe.txt"); // '/etc/joe.txt'

path.normalize("/users/joe/..//test.txt"); // '/users/test.txt'
```

[源码](https://github.com/nodejs/node/blob/v20.2.0/lib/path.js)

### 文件描述符

打开文件

```javascript
const fs = require("node:fs");

// 异步 callback
fs.open("/Users/joe/test.txt", "r", (err, fd) => {
  // fd is our file descriptor
});

// 同步 call
try {
  const fd = fs.openSync("/Users/joe/test.txt", "r");
} catch (err) {
  console.error(err);
}
```

该 `fs/promises` 模块仅从 Node.js v14 开始可用。在 v14 之前，在 v10 之后，您可以改用 `require('fs').promises` 。在 v10 之前，在 v8 之后，您可以使用 `util.promisify` 将 fs 方法转换为基于 promise 的方法

```javascript
const fs = require("node:fs");
const util = require("node:util");

async function example() {
  const open = util.promisify(fs.open);
  const fd = await open("/Users/joe/test.txt", "r");
}
example();
```

### 读取文件

异步 callback

```javascript
const fs = require("node:fs");

fs.readFile("/Users/joe/test.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
```

同步 call

```javascript
const fs = require("node:fs");

try {
  const data = fs.readFileSync("/Users/joe/test.txt", "utf8");
  console.log(data);
} catch (err) {
  console.error(err);
}
```

### 写入文件

异步 callback

```javascript
const fs = require("node:fs");

const content = "Some content!";

fs.writeFile("/Users/joe/test.txt", content, (err) => {
  if (err) {
    console.error(err);
  } else {
    // file written successfully
  }
});
```

同步 call

```javascript
const fs = require("node:fs");

const content = "Some content!";

try {
  fs.writeFileSync("/Users/joe/test.txt", content);
  // file written successfully
} catch (err) {
  console.error(err);
}
```

异步 Promise

```javascript
const fs = require("node:fs/promises");

async function example() {
  try {
    const content = "Some content!";
    await fs.writeFile("/Users/joe/test.txt", content);
  } catch (err) {
    console.log(err);
  }
}

example();
```

追加文件

```javascript
const fs = require("node:fs");

const content = "Some content!";

fs.appendFile("file.log", content, (err) => {
  if (err) {
    console.error(err);
  } else {
    // done!
  }
});
```

### 文件夹

- 检查文件夹是否存在以及 Node.js 可以使用其权限访问 `fs.access` `fs.exists`
- 创建文件夹 `fs.mkdir`
- 读取文件夹`fs.readdir`
- 重命名文件夹`fs.rename`
- 删除文件夹`fs.rm`

## 命令行

### 命令行运行

### 环境变量

### 终端交互 REPL

### 命令行输出

### 命令行输入
