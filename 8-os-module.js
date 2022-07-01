//os modeules

const os = require('os')

//Info about current user
const user = os.userInfo()
console.log(user);

// method returns the system uptime in seconds

console.log('The system uptime is', os.uptime() + ' seconds')
const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMen: os.freemem(),
}

console.log(currentOs)