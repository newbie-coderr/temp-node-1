//* modules
//* in 'CommonJs', every file is a module
//* Node js uses commonjs library under the hood (every file in node is a module)

//* Module - Encapsulated Code (Only Share Minimum)
// const secret = "SUPER SECRET";
// const john = "smilga";
// const peter = "parker";

// module.exports = { john, peter };

const nams = require("./4.names");
const sayHi = require("./5.utils");
const data = require("./6.alternative");
require("./7.mind-grenade");

// console.log(data);
// sayHi("susamsc");
// console.log(nams.john);
// console.log(sayHi);
// sayHi("susan");
// sayHi(john);
// sayHi(peter);
