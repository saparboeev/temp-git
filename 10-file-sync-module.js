const { writeFileSync, readFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf-8");

console.log(first, second);

writeFileSync(
  "./content/result-sync.txt",
  `this is my result: ${first}, ${second}`,
  { flag: "a" }
);
