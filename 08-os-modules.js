const os = require('os')

const user =  os.userInfo()

const currentOs = {
    name : os.type(),
    release  : os.release(),
    totalMen : os.totalmem(),
}

console.log(currentOs)