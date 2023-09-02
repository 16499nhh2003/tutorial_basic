const { readFile, writeFile } = require("fs").promises;

// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFile("./content/first.txt","utf-8"); 
    const second = await readFile("./content/second.txt","utf-8")
    await writeFile('./content/write-async.txt',`${first} + ||  + ${second}`,{flag : 'a'})
  } catch (err) {
    console.log(err);
  }
};
start();

// function getSumNum(a, b) {
//   const customPromise = new Promise((resolve, reject) => {
//     const sum = a + b;
//     if(sum <= 5){
//       const data = {result : sum , message : 'Susscessfull'}
//       resolve(data)
//     } else {
//       reject(new Error('Oops!.. Number must be less than 5'))
//     }
//   })

//   return customPromise
// }

// getSumNum(2,3).then((result) => {
//   console.log(result.result)
// }).catch((err) => {

// });

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf-8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// getText("./content/first.txt")
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
