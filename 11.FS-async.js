//* fs is a builtin module (file structure- fs)
//! Async is a non blocking approach

const { readFile, writeFile } = require("fs");

console.log("start");
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;

  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;

    writeFile(
      "./content/result-async.txt",
      ` here is async result: ${first}, ${second}`,
      //  if you want you can add flag here too
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("Done with the async task ");
      }
    );
  });
});
console.log("starting next task");

//! alternative for this is promises and async await
