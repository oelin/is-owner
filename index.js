const fs = require('fs')
const os = require('os')


export default function(path) {
        return fs.statSync(path).uid === os.userInfo().uid
}
