const { readFileSync, writeFileSync } = require("fs");

//  Read file sync
const first = readFileSync("./content/first.txt", "utf-8");

writeFileSync("./content/write-sync.txt", "Huy Hoa 11/10/2003", { flag: "a" });
