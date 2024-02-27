//* fs is a builtin module (file structure- fs)
//!Sync is a blocking approach

//! here we are destructing the modules 'readFileSync' n 'writeFileSync' out of fs module.
//* Syntax - 'readFileSync'(path,what is the encoding)

//! Syntax - 'writeFileSync'(path with new created file,content inside file,flag:a)
//! [here flag repeats the whole content once]

//* writeFileSync method creates a new file
//* file 'result-sync.text' is created in folder 'content'
//* 'result-sync.text' contains

const { readFileSync, writeFileSync } = require("fs");
console.log("start");
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);

writeFileSync(
  "./content/result-sync.txt",
  `here is the result , ${first}, ${second}`,
  { flag: "a" }
);
console.log("done with the task");
console.log("starting the next task");
