const fs = require('fs')

function readFile (filePath) {
    return new Promise(function (resolve, reject) {
         fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) {
                reject(err)
            };
            resolve(data)
        });
    })   
}

readFile('/etc/passwd')
.then(function (fileContent) {
    console.log(fileContent)
})
.catch(function (err) {
    console.log('err:', err)
})

// homework
promesify(fs.readDir, '/etc/passwd', 'utf-8')
.then(function (fileContent) {
    console.log(fileContent)
})
.catch(function (err) {
    console.log('err:', err)
})
