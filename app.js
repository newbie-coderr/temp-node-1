//*  CommonJs, every file is a module
//* Modules - Encapsulated code (only share minimium)

//* npm - global command, comes with node
//* npm --version

//* local dependency - use it only in this particular project
//* npm i <packageName>

//* global dependency - use it in any project
//* npm install -g <packageName>
//* sudo install -g <packageName>

//* package.json - manifest file (stores important info about project/package)
//* manual approach(create package.json in the root, create properties etc)
//* npm init (step by step, press enter to skip)
//* npm init -y (everything default)
//* npm i lodash (get lodash package in dependencies of json)
//* npm i bootstrap (get bootstrap package in dependencies of json)

//! lodash is a utility library used for installation purpose

//! Always install external packages before you code them. Example like lodash,bootstrap

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
//* loadash has the flatenDeep method which will split the array back as flat array.

const newItems = _.flattenDeep(items);
console.log(newItems);

//! "package.json" is very crucial to share our project with other developers.
