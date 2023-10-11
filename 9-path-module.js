const path = require("path");

console.log(path.sep);

const filPath = path.join("content", "subfolder", "test.txt");

console.log(filPath);

const base = path.basename(filPath);

console.log(base);

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");

console.log(absolute);
