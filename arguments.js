//spread / rest operator

function doSomething (...args){
    console.log(args)

}

doSomething('a','b','c');

function promesify(cb,...args){
    return new Promise(function (resolve,reject){
        cb(...args,function(err,data){
            if(err){
                return reject(err)
            }
            resolve(data)
        })
    })
}

function readFile(path,options,cb){
    if(true){
        return  cb(null,'content of the file');
    }
    cb('some error happened');
}

promesify(readFile,'./',{})
.then(data=>console.log(data))
.catch(err => console.log(err));