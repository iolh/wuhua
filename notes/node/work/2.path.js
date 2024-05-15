const path = require("node:path");

// path.join
console.log(path.join("a", "b////c", "d")); // '.' 路径字符串是一个长度为零的字符串或者为空，则返回 '.'，表示当前工作目录的相对路径
console.log(path.join("a", "b", "c")); // 'a/b/c' 使用平台特定的分隔符把全部给定的 path 片段连接到一起，并规范化生成的路径
console.log(path.join("a", "b", "..", "c")); // 'a/c' 路径中出现".."，那么它前面的路径片段将被丢弃
console.log(path.join("/foo", "bar", "baz/asdf", "quux", "..")); // /foo/bar/baz/asdf

// path.resolve
console.log(path.resolve()); // 返回当前工作目录的绝对路径
console.log(path.resolve("/a", "b", "/c", "d")); // 把一个路径片段解析为一个绝对路径
console.log(path.resolve("/a", "b", "c/")); // 把一个路径解析为一个绝对路径, 末尾斜杠会被删除
console.log(path.resolve("a", "/b", "c", "..")); // 路径片段从右往左被依次解析，直到构造完成一个绝对路径

// path.normalize
console.log(path.normalize(""));

