//* OS - Built in module of node js

const os1 = require("os");

//! Info about current user
//! 'userInfo' is a method which returns user data.
const user = os1.userInfo();
console.log(user);

//! 'uptime' method is used to return system uptime in seconds.
console.log(`System uptime is ${os1.uptime()} seconds`);

const currentOS = {
  name: os1.type(),
  release: os1.release(),
  totalMemo: os1.totalmem(),
  freeMemo: os1.freemem(),
};
console.log(currentOS);
