//* path - Built in method of node js

const path1 = require("path");

//! platform specific separator - 'sep'
console.log(path1.sep);
//output: \

//!  join method  is used to make a path of the file
const filePath = path1.join("content", "subfolder", "test.txt");
console.log(filePath);
//output: content\subfolder\test.txt

//! basename method returns the filename which is at the end of the path.
const base = path1.basename(filePath);
console.log(base);
//output: test.txt

//! __dirname, __filename are globals in node js
//! resolve method returns absolute path
const absolute = path1.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
//output:  E:\NODE Tutorial\1.Node Basics\content\subfolder\test.txt
